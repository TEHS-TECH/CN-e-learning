export interface FooterColumn {
  title: string;
  links: Array<{
    text: string;
    url: string;
    icon?: string;
  }>;
}

export interface FooterInfo {
  columns: FooterColumn[];
}

export const footerData: FooterInfo = {
  columns: [
    {
      title: "友情链接",
      links: [
        { text: "智教联盟论坛", url: "https://forum.smart-teach.cn/", icon: '<img src="https://forum.smart-teach.cn/assets/favicon-v4ksoaxf.png" alt="stcn" width="14" height="14">' },
        { text: "Awesome-Iwb", url: "https://github.com/awesome-iwb/awesome-iwb",icon: '<img src="/images/aiwb.png" alt="awesome-iwb" width="14" height="14">' },
        { text: "Awesome-Class-Softwares", url: "https://github.com/Jursin/Awesome-Class-Softwares", icon: '<img src="https://nav.jursin.top/acs.png" alt="awesome-class-softwares" width="14" height="14">' },
      ]
    },
  ]
};