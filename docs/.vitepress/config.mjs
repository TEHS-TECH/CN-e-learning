import { defineConfig } from 'vitepress'
import mdItCustomAttrs from 'markdown-it-custom-attrs'

export default defineConfig({
  title: '电教委员指南',
  description: '教你如何做一名优秀的电教委员',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: "stylesheet", href: "https://cdn.jsdmirror.com/npm/@fancyapps/ui/dist/fancybox.css" }],
    ['script', { src: "https://cdn.jsdmirror.com/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js" }],
    // Umami 统计脚本
    ['script', { 
      defer: true, 
      src: 'https://umami.peter267.dpdns.org/script.js', 
      'data-website-id': 'ac648300-d79f-46a2-bc8e-a818cf6e2af2' 
    }]
  ],
  
  markdown: {
    config: (md) => {
      md.use(mdItCustomAttrs, 'image', {
        'data-fancybox': "gallery"
      });
      md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
        let htmlResult = slf.renderToken(tokens, idx, options);
        if (tokens[idx].tag === 'h1') htmlResult += `<ArticleMetadata />`;
        return htmlResult;
      };
    },
    image: {
      // 开启图片懒加载
      lazyLoading: true
    },
  },

  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '<i class="fa-solid fa-info-circle"></i> 关于', link: '/about' },
      { text: '<i class="fa-solid fa-link"></i> 友情链接', link: '/links' },
      { text: '<i class="fa-solid fa-school"></i> 多校联盟', link: '/school' },
      { text: '<i class="fa-solid fa-question-circle"></i> 常见问题', link: '/faq/the-soft-keyboard-cannot-type' }
    ],
    sidebar: [
      { text: '关于', link: '/about' },
      { text: '友情链接', link: '/links' },
      { text: '多校联盟', link: '/school' },
      {
        text: '指南',
        collapsed: false,
        items: [
          { text: '前言', link: '/guide/before-starting'},
          { text: '如何正确打开或关闭电脑', link: '/faq/correctly-turn-on-and-off-the-computer' },
          { text: '善用任务管理器', link: '/guide/task-manager' },
	        { text: '在Office中启用flash内容', link: '/guide/how-to-enable-flash-contents-in-microsoft-office' }
        ]
      }, 
      {
        text: '常见问题',
        collapsed: false,
        items: [
          { text: '电脑软键盘无法输入字符', link: '/faq/the-soft-keyboard-cannot-type' },
          { text: 'Windows蓝屏错误代码', link: '/faq/bugcheck-codes' },
          { text: '修复Microsoft Office无法正常打开的问题', link: '/faq/How-to-fix-MS_Office_Startup' }
        ]
      },
	  {
        text: '资源汇总',
        collapsed: false,
        items: [
          { text: '教学一体机/交互白板的触摸校准/触摸驱动', link: '/guide/Common-Touch-Driver-Summaries-for-All-in-One-Teaching-Displays' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/TEHS-TECH/CN-e-learning' },
      { icon: 'qq', link: 'https://qm.qq.com/q/XOabZnlEMm' },
      { 
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 919"><defs><style>.a{fill:#1068af}.b{fill:#26a03d}</style></defs><path class="a" d="M643.3 134s-30.4-16.6-59.6-8.4L98.8 260.4 227.6 35.3S246.5-1.3 319.3.03l405 .6-77.5 135.5z"/><path class="a" d="M803.8 43l-82.2 143.8s20.7 19 26.6 40.6l72.1 275.9-278.2 84.3 100.2-160-31.3-120.7s-16.4-47.7-64-42.1c-.7.1-1.5.2-2.2.3-49.3 7.4-507.2 135-507.2 135s-36 10.2-37.6 46.1c0 0-.6 38.7 22.6 74.1l203 349 74.6-130.4s-23.7-21.3-26-32.1l-82-292.9 274.9-78.6s14.9-7.4 20.9 5.6l-120 150.3 40.9 134.4s17.8 29.6 59.6 29.8l528.6-144.9s35.1-6.7 25.1-59.8c0 0 1.5-19.8-14.8-52.1L803.8 43z"/><path class="b" d="M371.2 780.6s28.1 12 46.3 11.2l510.7-140.6-117.2 204.8s-28.5 57.2-96.4 57.1l-422.5 5.7 79.1-138.2z"/>'
        },
        link: 'https://forum.smart-teach.cn/d/701'
      }
    ],

    outline: {
      level: 'deep',
      label: '页面导航'
    },
    editLink: {
      pattern: 'https://github.com/TEHS-TECH/CN-e-learning/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    lastUpdated: {
      text: '最后更新于'
    },

    notFound: {
      title: '页面未找到',
      quote:
        '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
      linkLabel: '前往首页',
      linkText: '带我回首页'
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容',

    //Algolia搜索
    search: {
      provider: 'algolia',
      options: {
        appId: 'WKRPSXHOXG',
        apiKey: 'b2935f5a1b0b0c6e6917bbe4b58494c2',
        indexName: 'guide',
        locales: {
          root: {
            placeholder: '搜索文档',
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                searchBox: {
                  resetButtonTitle: '清除查询条件',
                  resetButtonAriaLabel: '清除查询条件',
                  cancelButtonText: '取消',
                  cancelButtonAriaLabel: '取消'
                },
                startScreen: {
                  recentSearchesTitle: '搜索历史',
                  noRecentSearchesText: '没有搜索历史',
                  saveRecentSearchButtonTitle: '保存至搜索历史',
                  removeRecentSearchButtonTitle: '从搜索历史中移除',
                  favoriteSearchesTitle: '收藏',
                  removeFavoriteSearchButtonTitle: '从收藏中移除'
                },
                errorScreen: {
                  titleText: '无法获取结果',
                  helpText: '你可能需要检查你的网络连接'
                },
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                  searchByText: '搜索提供者'
                },
                noResultsScreen: {
                  noResultsText: '无法找到相关结果',
                  suggestedQueryText: '你可以尝试查询',
                  reportMissingResultsText: '你认为该查询应该有结果？',
                  reportMissingResultsLinkText: '点击反馈'
                },
              },
            },
          },
        },
      },
    },
  },

  cleanUrls: true,
  appearance: true,
  lastUpdated: true
})
