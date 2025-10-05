<template>
  <div class="icp-info">
    <a 
      href="https://beian.miit.gov.cn/" 
      target="_blank" 
      rel="noopener noreferrer"
      class="icp-link"
    >
      津ICP备2025035356号-10
    </a>
    <a
      href="https://www.smart-teach.cn/" 
      target="_blank" 
      rel="noopener noreferrer"
      class="icp-link"
    >
    <!--这个类上 写个屎山 就当没人看到吧 嘻嘻嘻-->
      智教联盟提供技术支持
    </a>
    
  </div>
</template>

<script setup>
/**
 * ICP备案信息组件
 * 显示网站备案号并提供跳转链接
 */
</script>

<style scoped>
.icp-info {
  text-align: center;
  padding: 8px 0;
  font-size: 12px;
  color: var(--vp-c-text-2);
  border-top: 1px solid var(--vp-c-divider);
  margin-top: 16px;
}

.icp-link {
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: color 0.25s;
}

.icp-link:hover {
  color: var(--vp-c-brand-1);
  text-decoration: underline;
}

/* 确保在暗色模式下也有良好的显示效果 */
.dark .icp-info {
  color: var(--vp-c-text-2);
}

.dark .icp-link {
  color: var(--vp-c-text-2);
}

.dark .icp-link:hover {
  color: var(--vp-c-brand-1);
}
</style>