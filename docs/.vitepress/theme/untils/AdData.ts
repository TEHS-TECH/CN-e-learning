// AdData.ts
export interface Ad {
  url: string
  title: string
  description: string
  logo?: string
}

export const ads: Ad[] = [
  {
    url: 'https://forum.smart-teach.cn/',
    title: '智教联盟论坛',
    description: '全国最大的电教委交流社区',
    logo: 'https://static.smart-teach.cn/logos/full.jpg'
  },
  {
    url: 'https://github.com/awesome-iwb/awesome-iwb',
    title: 'Awesome-Iwb',
    description: '为广大电教倾情撰写，让班级大屏更好用！',
    logo: '/images/aiwb.png'
  },
  // 添加更多广告...
]