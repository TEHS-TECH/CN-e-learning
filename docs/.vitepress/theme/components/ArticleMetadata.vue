<script lang="ts" setup>
import { useData } from 'vitepress'
import { computed, ref, onMounted } from 'vue'
import { countWord } from '../untils/functions'

const { page } = useData()
const date = computed(
  () => new Date(page.value.lastUpdated!)
)

const wordCount = ref(0)
const imageCount = ref(0)

const wordTime = computed(() => {
    return ((wordCount.value / 275) * 60)
})

const imageTime = computed(() => {
    const n = imageCount.value
    if (imageCount.value <= 10) {
        // 等差数列求和
        return n * 13 + (n * (n - 1)) / 2
    }
    return 175 + (n - 10) * 3
})

// 阅读时间
const readTime = computed(() => {
    return Math.ceil((wordTime.value + imageTime.value) / 60)
})


function analyze() {
    document.querySelectorAll('.meta-des').forEach(v => v.remove())
    const docDomContainer = window.document.querySelector('#VPContent')
    const imgs = docDomContainer?.querySelectorAll<HTMLImageElement>(
        '.content-container .main img'
    )
    imageCount.value = imgs?.length || 0
    const words = docDomContainer?.querySelector('.content-container .main')?.textContent || ''
    wordCount.value = countWord(words)
}

onMounted(() => {
    // 初始化时执行一次
    analyze()
})
</script>


<template>
    <Tags />
    <div class="word">
        <p class="info">
            <i class="fa-solid fa-file-word"></i>&nbsp;&nbsp;约 {{ wordCount }} 字&nbsp;&nbsp;
            <i class="fa-solid fa-clock-rotate-left"></i>&nbsp;&nbsp;大约 {{ readTime }} 分钟&nbsp;&nbsp;
            <i class="fa-solid fa-eye"></i>&nbsp;&nbsp;<span id="busuanzi_value_page_pv" /> 次
        </p>
        <p class="time">
            <i class="fa-solid fa-arrows-rotate"></i>&nbsp;&nbsp;{{ date.toLocaleString() }}
        </p>
    </div>
</template>

<style>
.word {
  display: flex;
  color: var(--vp-c-text-2);
  font-size: 14px;
  justify-content: space-between;
  border-bottom: 0.5px solid var(--vp-c-divider);
  margin-bottom: 22px;
}
</style>