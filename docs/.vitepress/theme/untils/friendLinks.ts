export interface FriendLink {
  icon: string
  title: string
  description: string
  url: string
}

export const friendLinks: FriendLink[] = [
  {
    icon: "https://static.smart-teach.cn/logos/full.jpg",
    title: "智教联盟论坛",
    description: "全国最大的电教委交流社区",
    url: "https://forum.smart-teach.cn/",
  },
  {
    icon: "/images/aiwb.png",
    title: "Awesome-Iwb",
    description: "为广大电教倾情撰写，让班级大屏更好用！",
    url: "https://github.com/awesome-iwb/awesome-iwb",
  },
  {
    icon: "https://nav.jursin.top/acs.png",
    title: "Awesome-Class-Softwares",
    description: "适用于班级一体机的优质软件合集🌟",
    url: "https://github.com/Jursin/Awesome-Class-Softwares",
  },
];