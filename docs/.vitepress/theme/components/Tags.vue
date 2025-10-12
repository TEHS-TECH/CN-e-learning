<script setup>
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
  <div v-if="frontmatter.tags?.length" class="tags-container">
    <i class="fa-solid fa-tags"></i>&nbsp;&nbsp;
    <div class="tags-list">
        <a
            v-for="tag in frontmatter.tags"
            :key="tag"
            :href="`/tags?tag=${encodeURIComponent(tag)}`"
            class="tag-item"
        >
            {{ tag }}
        </a>
    </div>
  </div>
</template>

<style scoped>
.tags-container {
  display: flex;
  align-items: center;
  margin-top: 0.75rem;
  font-size: 15px;
  line-height: 1.5;
}

.tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.tag-item {
  display: inline-block;
  padding: 0.3rem 0.8rem;
  background: var(--vp-c-brand-soft);
  border-radius: 6px;
  color: var(--vp-c-brand-2);
  text-decoration: none;
  font-size: 0.85em;
  transition: all 0.2s;
}

.tag-item:hover {
  background: var(--vp-c-brand-light);
  color: white;
}
</style>