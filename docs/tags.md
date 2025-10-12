---
layout: page
sidebar: false
footer: false
---

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter, useData } from 'vitepress'
import { data } from '.vitepress/theme/untils/posts.data'

const { tagMap, postMap } = data
const { site } = useData()
const router = useRouter()
const currentTag = ref(null)

// 从 URL 解析初始 tag
onMounted(() => {
  const tag = new URLSearchParams(location.search).get('tag')
  if (tag) currentTag.value = decodeURIComponent(tag)
})

// 当前标签的文章列表
const filteredPosts = computed(() => 
  currentTag.value ? tagMap[currentTag.value]?.map(url => postMap[url]) : []
)

// 点击标签时更新 URL
function selectTag(tag) {
  currentTag.value = tag
  router.go(`/tags?tag=${encodeURIComponent(tag)}`)
}

// 修复链接问题 - 确保正确处理 base URL
function getCorrectLink(path) {
  // 移除可能的重复斜杠
  path = path.replace(/^\/+/, '/')
  
  // 处理 base URL
  const base = site.value.base || '/'
  const baseWithSlash = base.endsWith('/') ? base : base + '/'
  
  // 确保路径不以 base 开头
  if (path.startsWith(baseWithSlash)) {
    return path
  }
  
  // 组合完整路径
  return baseWithSlash + path.replace(/^\//, '')
}
</script>

<div class="tags-container">
  <h1 style="color: var(--vp-c-brand-2); font-size: 32px; font-weight: 600; padding-bottom: 26px;"><i class="fa-solid fa-tags"></i>标签</h1>
  <!-- 标签云 -->
  <div class="tags-cloud">
    <button
      v-for="(posts, tag) in tagMap"
      :key="tag"
      @click="selectTag(tag)"
      :class="{ active: currentTag === tag }"
      class="tag-button"
    >
      {{ tag }} ({{ posts.length }})
    </button>
  </div>

  <!-- 文章列表 -->
  <div v-if="currentTag" class="tag-posts">
    <ul class="post-list">
      <li v-for="post in filteredPosts" :key="post.url" class="post-item">
        <a :href="getCorrectLink(post.url)" class="post-link">
            <span class="post-bullet">·</span>
            <span v-html="post.title"></span>
        </a>
      </li>
    </ul>
  </div>
</div>

<style scoped>
.tags-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.tags-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 2rem;
}

.tag-button {
  padding: 0.3rem 0.8rem;
  background: var(--vp-c-brand-soft);
  border-radius: 6px;
  color: var(--vp-c-brand-2);
  transition: all 0.2s;
}

.tag-button:hover {
  background: var(--vp-c-brand-light);
  color: white;
}

.tag-button.active {
  background: var(--vp-c-brand);
  color: white;
}

.tag-title {
  font-size: 1.5rem;
  margin: 1.5rem 0 1rem;
  color: var(--vp-c-brand);
}

.post-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.post-item {
  margin: 0.75rem 0;
}

.post-link {
  display: flex;
  align-items: center;
  color: var(--vp-c-text);
  text-decoration: none;
  transition: color 0.2s;
}

.post-link:hover {
  color: var(--vp-c-brand);
}

.post-bullet {
  color: var(--vp-c-brand);
  margin-right: 0.5rem;
  font-weight: bold;
}

.post-title {
  flex: 1;
}

.fa-solid {
  margin-right: 0.5em;
}
</style>