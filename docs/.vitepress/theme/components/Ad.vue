<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { ads } from '../untils/AdData'

const { theme } = useData()
const isDark = computed(() => theme.value.isDark)
</script>

<template>
  <div class="sidebar-ads-container">
    <div v-for="(ad, index) in ads" :key="index" class="sidebar-ad">
      <a :href="ad.url" target="_blank" rel="noopener noreferrer">
        <div class="ad-logo-container">
          <div v-if="ad.logo" class="ad-logo">
            <img alt="logo" :src="ad.logo" />
          </div>
          <div v-else class="ad-fallback-icon">
            <i class="fas fa-link"></i>
          </div>
        </div>
        <div class="ad-content">
          <p class="ad-title">{{ ad.title }}</p>
          <p class="ad-description">{{ ad.description }}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
/* 广告容器样式 */
.sidebar-ads-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 10px 0;
}

/* 侧边栏广告基础样式 */
.sidebar-ad {
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 12px;
  transition: all 0.3s ease;
  border: 1px solid var(--vp-c-divider-light);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
}

/* 链接样式 */
.sidebar-ad a {
  display: flex;
  align-items: center;
  text-decoration: none;
}

/* logo容器样式 */
.ad-logo-container {
  width: 48px;
  height: 48px;
  min-width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--vp-c-bg-alt);
  border-radius: 6px;
  margin-right: 12px;
}

/* logo图片样式 */
.ad-logo img {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

/* 备用图标样式 */
.ad-fallback-icon {
  color: var(--vp-c-text-3);
  font-size: 20px;
}

/* 广告内容区域 */
.ad-content {
  flex: 1;
}

/* 标题样式 */
.ad-title {
  font-weight: 500;
  font-size: 14px;
  line-height: 1.4;
  color: var(--vp-c-text-1);
  margin: 0 0 4px 0;
}

/* 描述文字样式 */
.ad-description {
  font-size: 12px;
  line-height: 1.4;
  color: var(--vp-c-text-2);
  margin: 0;
}

/* 鼠标悬停效果 */
.sidebar-ad:hover {
  border-color: var(--vp-c-brand);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}
</style>