import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { inBrowser, useRoute, useData } from 'vitepress'
import { onMounted, watch, nextTick } from 'vue'
import mediumZoom from 'medium-zoom'
import Layout from './components/Layout.vue'
import BilibiliVideo from './components/BilibiliVideo.vue'
import Linkcard from './components/Linkcard.vue'
import ArticleMetadata from './components/ArticleMetadata.vue'
import HomeUnderline from './components/HomeUnderline.vue'
import Twikoo from './components/Twikoo.vue'
import Tags from './components/Tags.vue'
import busuanzi from 'busuanzi.pure.js'
import './style.css'
import './style/index.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { NProgress } from 'nprogress-v2/dist/index.js' // 进度条组件
import 'nprogress-v2/dist/index.css' // 进度条样式

export default {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp({ app, router, siteData }) {
    app.component('BilibiliVideo', BilibiliVideo);
    app.component('Linkcard' , Linkcard);
    app.component('HomeUnderline' , HomeUnderline);
    app.component('ArticleMetadata' , ArticleMetadata);
    app.component('Twikoo' , Twikoo);
    app.component('Tags' , Tags);

    if (inBrowser) {
      NProgress.configure({ showSpinner: false })
      router.onBeforeRouteChange = () => {
        NProgress.start() // 开始进度条
      }
      router.onAfterRouteChanged = () => {
        busuanzi.fetch()
        NProgress.done()
      }
    }
  },
  setup() {
    const route = useRoute();
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    };
    const cleanLightGallery = () => {
      document.querySelectorAll('.lg-container').forEach(el => el.remove())
    };
    onMounted(() => {
      initZoom()
      cleanLightGallery()
    });
    watch(
      () => route.path,
      () => nextTick(() => {
        initZoom()
        cleanLightGallery()
      })
    )
  }
} satisfies Theme