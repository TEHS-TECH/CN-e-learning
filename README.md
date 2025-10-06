<div align="center">

# CN-e-learning 电教委员指南

![banner](./docs/public/images/banner.png)

[![CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-blue.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0)
[![QQ群](https://img.shields.io/badge/QQ%20%E7%BE%A4-982310822-blue?style=flat&logo=QQ)](https://qm.qq.com/q/XOabZnlEMm)
[![CSES](https://img.shields.io/badge/STCN-一起共建《电教委员指南》-4c8bf5?labelColor=white&style=flat&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDkxOSI+CiAgPGRlZnM+CiAgICA8c3R5bGU+LmF7ZmlsbDojMTA2OGFmfS5ie2ZpbGw6IzI2YTAzZH08L3N0eWxlPgogIDwvZGVmcz4KICA8cGF0aCBjbGFzcz0iYSIgZD0iTTY0My4zIDEzNHMtMzAuNC0xNi42LTU5LjYtOC40TDk4LjggMjYwLjQgMjI3LjYgMzUuM1MyNDYuNS0xLjMgMzE5LjMuMDNsNDA1IC42LTc3LjUgMTM1LjV6Ii8+CiAgPHBhdGggY2xhc3M9ImEiIGQ9Ik04MDMuOCA0M2wtODIuMiAxNDMuOHMyMC43IDE5IDI2LjYgNDAuNmw3Mi4xIDI3NS45LTI3OC4yIDg0LjMgMTAwLjItMTYwLTMxLjMtMTIwLjdzLTE2LjQtNDcuNy02NC00Mi4xYy0uNy4xLTEuNS4yLTIuMi4zLTQ5LjMgNy40LTUwNy4yIDEzNS01MDcuMiAxMzVzLTM2IDEwLjItMzcuNiA0Ni4xYzAgMC0uNiAzOC43IDIyLjYgNzQuMWwyMDMgMzQ5IDc0LjYtMTMwLjRzLTIzLjctMjEuMy0yNi0zMi4xbC04Mi0yOTIuOSAyNzQuOS03OC42czE0LjktNy40IDIwLjkgNS42bC0xMjAgMTUwLjMgNDAuOSAxMzQuNHMxNy44IDI5LjYgNTkuNiAyOS44bDUyOC42LTE0NC45czM1LjEtNi43IDI1LjEtNTkuOGMwIDAgMS41LTE5LjgtMTQuOC01Mi4xTDgwMy44IDQzeiIvPgogIDxwYXRoIGNsYXNzPSJiIiBkPSJNMzcxLjIgNzgwLjZzMjguMSAxMiA0Ni4zIDExLjJsNTEwLjctMTQwLjYtMTE3LjIgMjA0LjhzLTI4LjUgNTcuMi05Ni40IDU3LjFsLTQyMi41IDUuNyA3OS4xLTEzOC4yeiIvPgo8L3N2Zz4=)](https://forum.smart-teach.cn/d/701)

CN-e-learning 是一个专注于帮助电教委员提升工作能力的指南项目。本指南由顶尖电教委编撰，内容涵盖多种计算机知识、错误应对方法等，旨在助力每一位电教委员成为优秀的技术支持角色。

</div>

## ✨ 主要特点

- **内容优质**：由经验丰富的电教委精心编写，确保内容的专业性和实用性
- **覆盖面广**：包含多种计算机知识、设备操作指南及常见错误应对方法
- **多校联盟**：汇集全国多所学校的电教委经验，提供学校专属信息
- **易于阅读**：文档结构清晰，语言简洁明了，便于快速查阅和学习

## 🚀 快速开始

### 本地运行

1. 克隆仓库

    ```bash
    git clone https://github.com/TEHS-TECH/CN-e-learning.git
    cd CN-e-learning
    ```

2. 安装依赖

    ```bash
    npm install
    ```

3. 启动开发服务器

    ```bash
    npm run docs:dev
    ```

4. 在浏览器中访问 `http://localhost:5173` 查看文档

### 构建生产版本

```bash
npm run docs:build
```

构建后的文件将位于 `docs/.vitepress/dist` 目录下，可部署到任何静态文件服务器。

## 📁 项目结构

- `docs/`：文档内容目录
  - `index.md`：首页内容
- `.vitepress/`：VitePress 配置目录
- `package.json`：项目依赖和脚本配置

## 🛠️ 技术栈

- [VitePress](https://vitepress.dev/)：静态站点生成器，基于 Vue 3
- Markdown：文档内容编写格式

## 🤝 贡献指南

欢迎全国各学校的电教委员贡献经验和知识，具体贡献方式请在[此处](https://github.com/TEHS-TECH/CN-e-learning/wiki/%E5%86%85%E5%AE%B9%E8%B4%A1%E7%8C%AE%E6%8C%87%E5%8D%97)查看。

## 🙏 贡献者

<!-- readme: contributors -start -->
<table>
	<tbody>
		<tr>
            <td align="center">
                <a href="https://github.com/Peter267">
                    <img src="https://avatars.githubusercontent.com/u/175904095?v=4" width="100;" alt="Peter267"/>
                    <br />
                    <sub><b>Wujingbo</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/weizhizhuangwzz">
                    <img src="https://avatars.githubusercontent.com/u/103792860?v=4" width="100;" alt="weizhizhuangwzz"/>
                    <br />
                    <sub><b>位置装</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/Jursin">
                    <img src="https://avatars.githubusercontent.com/u/127487914?v=4" width="100;" alt="Jursin"/>
                    <br />
                    <sub><b>Jursin</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/jiangyin14">
                    <img src="https://avatars.githubusercontent.com/u/106649516?v=4" width="100;" alt="jiangyin14"/>
                    <br />
                    <sub><b>姜胤</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/typed-sigterm">
                    <img src="https://avatars.githubusercontent.com/u/145281501?v=4" width="100;" alt="typed-sigterm"/>
                    <br />
                    <sub><b>Typed SIGTERM</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/Lyang1273">
                    <img src="https://avatars.githubusercontent.com/u/160390179?v=4" width="100;" alt="Lyang1273"/>
                    <br />
                    <sub><b>Lyang</b></sub>
                </a>
            </td>
		</tr>
		<tr>
            <td align="center">
                <a href="https://github.com/Yihggh">
                    <img src="https://avatars.githubusercontent.com/u/161115959?v=4" width="100;" alt="Yihggh"/>
                    <br />
                    <sub><b>Yihggh</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/xingbiao996">
                    <img src="https://avatars.githubusercontent.com/u/181859181?v=4" width="100;" alt="xingbiao996"/>
                    <br />
                    <sub><b>星标</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/MYZ2030">
                    <img src="https://avatars.githubusercontent.com/u/200359622?v=4" width="100;" alt="MYZ2030"/>
                    <br />
                    <sub><b>MYZ2030</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/Windows-git">
                    <img src="https://avatars.githubusercontent.com/u/109967664?v=4" width="100;" alt="Windows-git"/>
                    <br />
                    <sub><b>緒山まひろ</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/baldi233">
                    <img src="https://avatars.githubusercontent.com/u/124134387?v=4" width="100;" alt="baldi233"/>
                    <br />
                    <sub><b>baldi233</b></sub>
                </a>
            </td>
		</tr>
	<tbody>
</table>
<!-- readme: contributors -end -->

## 📄 许可证

<p xmlns:cc="http://creativecommons.org/ns#" >本文档采用 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-NC-SA 4.0 许可<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1" alt=""></a>发布</p>

## 🌟 Stars 历史图表

[![Star History Chart](https://api.star-history.com/svg?repos=TEHS-TECH/CN-e-learning&type=Date)](https://www.star-history.com/#TEHS-TECH/CN-e-learning&Date)

<div align="center">

**如果这个项目对您有帮助，请点亮 Star ⭐！**

</div>

## 🔗 友情链接
- <image src="https://avatars.githubusercontent.com/u/184760810" height="18"/> **[Awesome-Iwb](https://github.com/awesome-iwb/awesome-iwb)** - ✨ 全网最全的 教学辅助软件/一体机软件 推荐清单
- <image src="https://nav.jursin.top/acs.png" height="18"/> [**Awesome-Class-Softwares**](https://github.com/Jursin/Awesome-Class-Softwares) - 🌟 适用于班级一体机的优质软件合集
- <image src="https://forum.smart-teach.cn/assets/favicon-v4ksoaxf.png" height="18"/> [**SmartTeachCN**](https://forum.smart-teach.cn/) - 智教联盟致力于为教学辅助类应用提供全方面扶持与帮助。
