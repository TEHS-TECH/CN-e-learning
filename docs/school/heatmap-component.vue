<template>
  <div class="heatmap-container">
    <div class="heatmap-header">
      <h3><i class="fa-solid fa-map"></i> 全国学校分布热力图</h3>
      <div class="stats">
        <span class="stat-item">
          <i class="fa-solid fa-school"></i>
          总计学校：{{ totalSchools }}所
        </span>
        <span class="stat-item">
          <i class="fa-solid fa-map-marker-alt"></i>
          覆盖省份：{{ activeProvinces }}个
        </span>
        <span class="stat-item">
          <i class="fa-solid fa-clock"></i>
          更新时间：{{ formatDate(lastUpdated) }}
        </span>
      </div>
    </div>
    <div ref="chartContainer" class="chart-container"></div>
    <div class="legend">
      <span class="legend-title">学校数量：</span>
      <span class="legend-item" v-for="item in legendItems" :key="item.min">
        <span class="legend-color" :style="{ backgroundColor: item.color }"></span>
        {{ item.label }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import * as echarts from 'echarts'

/**
 * 热力图组件的响应式数据
 */
const chartContainer = ref(null)
const totalSchools = ref(0)
const activeProvinces = ref(0)
const lastUpdated = ref('')
const legendItems = ref([
  { min: 0, max: 0, color: '#f0f0f0', label: '暂无数据' },
  { min: 1, max: 5, color: '#ffeb3b', label: '1-5所' },
  { min: 6, max: 10, color: '#ff9800', label: '6-10所' },
  { min: 11, max: 20, color: '#f44336', label: '11-20所' },
  { min: 21, max: 999, color: '#9c27b0', label: '20所以上' }
])

/**
 * 格式化日期显示
 * @param {string} dateString - ISO日期字符串
 * @returns {string} 格式化后的日期字符串
 */
const formatDate = (dateString) => {
  if (!dateString) return '暂无数据'
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  })
}

/**
 * 获取热力图数据颜色
 * @param {number} value - 学校数量
 * @returns {string} 对应的颜色值
 */
const getColor = (value) => {
  if (value === 0) return '#f0f0f0'
  if (value <= 5) return '#ffeb3b'
  if (value <= 10) return '#ff9800'
  if (value <= 20) return '#f44336'
  return '#9c27b0'
}

/**
 * 加载热力图数据
 * @returns {Promise<Object>} 热力图数据对象
 */
const loadHeatmapData = async () => {
  try {
    const response = await fetch('/school/heatmap-data.json')
    if (!response.ok) {
      // 如果文件不存在，返回空数据
      return {
        lastUpdated: new Date().toISOString(),
        totalSchools: 0,
        data: []
      }
    }
    return await response.json()
  } catch (error) {
    console.warn('加载热力图数据失败，使用默认数据:', error)
    return {
      lastUpdated: new Date().toISOString(),
      totalSchools: 0,
      data: []
    }
  }
}

/**
 * 初始化ECharts图表
 * @param {Object} heatmapData - 热力图数据
 */
const initChart = async (heatmapData) => {
  if (!chartContainer.value) return

  const chart = echarts.init(chartContainer.value)
  
  // 加载中国地图数据
  try {
    const mapResponse = await fetch('https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json')
    const chinaGeoJson = await mapResponse.json()
    echarts.registerMap('china', chinaGeoJson)
  } catch (error) {
    console.error('加载中国地图数据失败:', error)
    return
  }

  // 转换数据格式
  const mapData = heatmapData.data.map(item => ({
    name: item.name,
    value: item.value,
    schools: item.schools
  }))

  const option = {
    title: {
      text: '全国学校分布热力图',
      left: 'center',
      textStyle: {
        fontSize: 18,
        fontWeight: 'bold'
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: function(params) {
        if (params.data && params.data.schools) {
          const schools = params.data.schools
          let schoolList = schools.slice(0, 5).map(school => 
            `• ${school.name} (${school.type})`
          ).join('<br>')
          
          if (schools.length > 5) {
            schoolList += `<br>... 还有 ${schools.length - 5} 所学校`
          }
          
          return `
            <div style="max-width: 300px;">
              <strong>${params.name}</strong><br>
              学校数量：${params.value}所<br>
              <div style="margin-top: 8px; font-size: 12px;">
                ${schoolList}
              </div>
            </div>
          `
        }
        return `${params.name}<br>学校数量：${params.value || 0}所`
      }
    },
    visualMap: {
      min: 0,
      max: Math.max(...mapData.map(item => item.value), 20),
      left: 'left',
      top: 'bottom',
      text: ['高', '低'],
      inRange: {
        color: ['#f0f0f0', '#ffeb3b', '#ff9800', '#f44336', '#9c27b0']
      },
      calculable: true
    },
    series: [
      {
        name: '学校数量',
        type: 'map',
        map: 'china',
        roam: true,
        emphasis: {
          label: {
            show: true
          }
        },
        data: mapData
      }
    ]
  }

  chart.setOption(option)
  
  // 响应式调整
  window.addEventListener('resize', () => {
    chart.resize()
  })
}

/**
 * 组件挂载时初始化
 */
onMounted(async () => {
  await nextTick()
  
  const heatmapData = await loadHeatmapData()
  
  // 更新统计数据
  totalSchools.value = heatmapData.totalSchools
  activeProvinces.value = heatmapData.data.length
  lastUpdated.value = heatmapData.lastUpdated
  
  // 初始化图表
  await initChart(heatmapData)
})
</script>

<style scoped>
.heatmap-container {
  width: 100%;
  margin: 20px 0;
  border: 1px solid #e1e4e8;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
}

.heatmap-header {
  padding: 16px 20px;
  background: #007BFF;
  color: white;
}

.heatmap-header h3 {
  margin: 0 0 12px 0;
  font-size: 18px;
  font-weight: 600;
}

.stats {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  opacity: 0.95;
}

.stat-item i {
  font-size: 12px;
}

.chart-container {
  width: 100%;
  height: 500px;
  background: #fafbfc;
}

.legend {
  padding: 12px 20px;
  background: #f6f8fa;
  border-top: 1px solid #e1e4e8;
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.legend-title {
  font-weight: 600;
  color: #24292e;
  font-size: 14px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #586069;
}

.legend-color {
  width: 12px;
  height: 12px;
  border-radius: 2px;
  border: 1px solid #d1d5da;
}

@media (max-width: 768px) {
  .stats {
    gap: 16px;
  }
  
  .stat-item {
    font-size: 13px;
  }
  
  .chart-container {
    height: 400px;
  }
  
  .legend {
    padding: 10px 16px;
  }
  
  .heatmap-header {
    padding: 12px 16px;
  }
}
</style>