<template>
  <footer class="vp-footer">
    <div class="footer-content">
      <div class="footer-columns">
        <div v-for="(column, index) in footerData.columns" :key="index" class="footer-column">
          <h3 class="column-title">{{ column.title }}</h3>
          <ul class="column-links">
            <li v-for="(link, linkIndex) in column.links" :key="linkIndex">
              <a :href="link.url" class="footer-link">
                <span v-if="link.icon" v-html="link.icon"></span>
                {{ link.text }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="record-info">
          <span class="record">
            <img src="https://i.theojs.cn/logo/miit.webp" alt="miit" width="14" height="14" />
            <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" class="record-link">
              津ICP备2025035356号-10
            </a>
          </span>
          <span class="separator">|</span>
          <span class="record">
            <img src="https://forum.smart-teach.cn/assets/favicon-v4ksoaxf.png" alt="stcn" width="14" height="14" />
            <a href="https://www.smart-teach.cn/" target="_blank" rel="noopener noreferrer"
              class="record-link">智教联盟提供技术支持</a>
          </span>
        </div>
        <div class="copyright">本文档根据 CC-BY-NC-SA 4.0 许可发布 | 版权所有 © 2025 电教委员指南</div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { footerData } from '../untils/FooterData'
</script>

<style scoped>
.vp-footer {
  background-color: var(--vp-sidebar-bg-color);
  padding: 2rem 1rem;
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-columns {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.footer-column {
  flex: 1;
  min-width: 200px;
  margin-bottom: 1.5rem;
  padding: 0 1rem;
}

.column-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--vp-c-text-1);
}

.column-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.column-links li {
  margin-bottom: 0.5rem;
}

.footer-link {
  color: var(--vp-c-text-2);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.footer-link:hover {
  color: var(--vp-c-brand-2);
}

.footer-bottom {
  text-align: center;
}

.record {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.record-link {
  color: var(--vp-c-text-2);
  text-decoration: none;
  font-size: 0.8rem;
}

.separator {
  margin: 0 0.5rem;
  color: var(--vp-c-text-2);
}

.copyright {
  color: var(--vp-c-text-2);
  font-size: 0.8rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .footer-columns {
    flex-direction: column;
  }
  
  .footer-column {
    min-width: 100%;
    padding: 0;
  }
}
</style>