---
tags:
    - 高级
---

# 为 Windows 长期服务渠道（LTSC）添加微软应用商店以安装必要的系统组件
> [!TIP]
> 此文档也适用于其它微软应用商店（下文称 Microsoft Store ）被卸载的 Windows 系统

先简要介绍一下，Windows LTSC（Long-Term Servicing Channel ，长期服务渠道）是微软针对特定用户群体推出的Windows操作系统版本，专注于提供`长期稳定性`和`最少的功能更新`。这样的系统移除了大量消费者功能和预装应用，无频繁的功能更新推送，无广告软件和促销内容。这种精简设计使得系统`资源占用更低`，特别适合老旧硬件和低配设备。

但也因此，使用 LTSC 系统的一体机会可能遇到以下情况：
- 缺少日常教学中必备的系统组件，如照片查看器、媒体播放器之类的
- 上述原因导致的各种如“使用画图工具查看图片”“为了放视频专门下了个视频平台客户端导致一体机卡顿”等问题的
- 想通过 Microsoft Store 获取必要的系统组件但是找不到 Store 的
- 知道可以通过某种神奇的渠道得到必要的系统组件，如照片查看器、媒体播放器等以解决这些问题，但系统连应用安装程序都没有的

## 检查你的一体机系统是否为 LTSC
- 打开“设置”应用
- 点击“系统”
- 在“关于”页面中，查看“版本”信息
- 如果版本中包含“LTSC”，则说明你的系统为 LTSC 版本

## 推荐的解决方法
推荐 GitHub 上的项目，这些开发者们已经将必要组件打包，还附带了一键执行脚本，能基本实现傻瓜式操作

- 对于 Windows 10 LTSC 2019 ：https://github.com/kkkgo/LTSC-Add-MicrosoftStore
- 对于 Windows 10 LTSC 2021 ：https://github.com/megakarlach/LTSC-Add-MicrosoftStore-2021
> [!TIP]
> 如果您不清楚您的 Windows 10 LTSC 版本，请先尝试 2021，如果 2021 的脚本无法部署 ，请尝试 2019 版本的脚本

- 对于 Windows 11 LTSC 2024 ：https://github.com/minihub/LTSC-Add-MicrosoftStore

## 操作流程
两个针对 Windows 10 LTSC 的项目可以直接点击 Readme 中的超链接下载，下载后解压到一个新建文件夹，右键以管理员身份运行脚本。下图将指出你该点击哪里下载已打包的文件：
![2019](/images/Add-Microsoft-Store-for-Windows-LTSC/1.png)
![2021](/images/Add-Microsoft-Store-for-Windows-LTSC/2.png)

针对 Windows 11 LTSC 2024 的项目，需要点击发布的版本，在版本页找到相应的文件，下载后解压到一个新建文件夹，右键以管理员身份运行脚本。下图将指出下载前具体操作流程：
![Step 1](/images/Add-Microsoft-Store-for-Windows-LTSC/3.png)
![Step 2](/images/Add-Microsoft-Store-for-Windows-LTSC/4.png)

脚本中如有提示已存在更高版本的报错，多数情况下不必理会，在脚本执行完毕后，就可以去开始菜单检查是否新增了 Microsoft Store 应用。如果新增了，进入 Store 并登录微软账户，应该就可以正常使用 Store 查找并安装必要的系统组件了。
