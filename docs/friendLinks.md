--- 
layout: page
sidebar: false
---

<script setup lang="ts">
import { friendLinks } from '.vitepress/theme/untils/friendLinks'
</script>

<div class="friend-links-container">
    <h1 style="color: var(--vp-c-brand-2); font-size: 32px; font-weight: 600; padding-bottom: 26px;"><i class="fa-solid fa-link"></i>&nbsp;友情链接</h1>
    <div class="friend-links-grid">
        <a
        v-for="link in friendLinks"
        :key="link.title"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        class="friend-link-card"
        >
        <div class="icon-wrapper">
            <img :src="link.icon" :alt="link.title" class="icon" />
        </div>
        <div class="text-wrapper">
            <h3 class="title">{{ link.title }}</h3>
            <p class="description">{{ link.description }}</p>
        </div>
        </a>
    </div>
    <Twikoo />
</div>


<style scoped>
.friend-links-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.friend-links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
  gap: 10px;
}

.friend-link-card {
  display: flex;
  align-items: center;
  padding: 16px;
  border-radius: 12px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  color: inherit;
  text-decoration: none;
  height: 95px;
}

.friend-link-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.icon-wrapper {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  margin-right: 16px;
  border-radius: 8px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.text-wrapper {
  flex: 1;
  min-width: 0;
}

.title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 4px;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.description {
  font-size: 0.875rem;
  color: #666;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 暗色模式适配 */
.dark .friend-link-card {
  background: #1e1e1e;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.dark .friend-link-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}

.dark .icon-wrapper {
  background: #2d2d2d;
}

.dark .title {
  color: #f0f0f0;
}

.dark .description {
  color: #aaa;
}

/* 响应式调整 */
@media (max-width: 1024px) {
  .friend-links-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .friend-links-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .friend-links-grid {
    grid-template-columns: 1fr;
  }
}
</style>
