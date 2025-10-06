<template>
  <Layout>
    <!-- 保留默认主题布局 -->
    <template #doc-after>
      <!-- 在这里添加 Twikoo 评论组件 -->
      <Twikoo />
    </template>
    <template #aside-top>
      <bsz />
    </template>
    <template #aside-outline-after>
      <Ad />
    </template>
    <template #doc-footer-before>
      <backtotop />
    </template>
  </Layout>
</template>

<script setup>
import Layout from 'vitepress/dist/client/theme-default/Layout.vue'
import Twikoo from './Twikoo.vue'
import bsz from "./bsz.vue";
import backtotop from "./backtotop.vue";
import Ad from './Ad.vue';
</script>

<style scoped>
.twikoo .el-loading-spinner .circular {
  margin-left: auto;
  margin-right: auto;
}
</style>