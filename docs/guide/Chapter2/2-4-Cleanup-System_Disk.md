# 2.4 系统清理与磁盘空间维护

- 清理系统盘可以释放磁盘空间，提升系统性能，避免使用时卡顿，定期清理垃圾是一个好的习惯
<br>(部分界面可能会与本页面截图有所不同，请以您以实际出现的页面为标准)
<br>

## 使用系统自带的工具
### 磁盘清理 （适用于大部分 Windows 版本）
#### 清理垃圾
- 打开 此电脑 ，找到系统盘后鼠标右键点击 属性 ，在弹出的窗口中，点击 磁盘清理 <br>
![图片](/images/Cleanup-System_Disk/1.png)

> [!NOTE]
> 此按钮在 Windows 11 被替换成  详细信息  ，点击后会跳转到  设置<br>
> 可以在 搜索框 中输入 disk clean 即可打开
![图片](/images/Cleanup-System_Disk/4.png)
![图片](/images/Cleanup-System_Disk/3.png)
> 


- 等待扫描完成后，为了清理更彻底，点击 “清理系统文件” 按钮（如果没有请忽略）<br>
![图片](/images/Cleanup-System_Disk/2.png)

- 再次等待扫描完成后，勾选 **你认为该清理** 的项目（个人建议除 回收站 以外全部勾上）
- 勾选完成后，点击 确定，然后点击 删除文件 即可进行清理<br>
![图片](/images/Cleanup-System_Disk/6.png)


> [!NOTE]
> 升级/覆盖安装 过 Windows 10/11 的电脑会有 "以前的 Windows 安装" 项目，如果你的电脑超过10天没有进行 回退 原系统，或 不想回退 / 已经无法进行回退，建议勾选删除<br>
> 删除过程中会有窗口提示，点击 “是” 即可删除<br>
⚠注意：此操作一旦执行将不可逆

#### 其他选项
- 程序与功能：删除不用的应用程序以释放空间，点击 “清理” 将跳转到 控制面板\程序\程序和功能 ， 在此处选择要卸载的软件，鼠标右键选择 卸载 即可<br>
![图片](/images/Cleanup-System_Disk/7.png)
- 启用存储感知（适用于 Windows 10 和 Windows 11）：以 Windows 11 为例，在设置-系统-存储中可以找到该选项，根据需要调节设置
![图片](/images/Cleanup-System_Disk/21.png)
- 使用[Dism ++](https://github.com/Chuyu-Team/Dism-Multi-language)，[清浊](https://pc.dircleaner.com/)等进阶工具（下文会详细介绍 Dism ++ 的使用）

>[!TIP]
>⚠注意：从控制面板中卸载**每次只能卸载一个软件**，可前往 [设置 - 应用 - 应用和功能](ms-settings:appsfeatures) 进行多个软件的卸载，或者使用 第三方卸载工具 进行批量卸载
<br>
- 系统还原与卷影复制：

>[!NOTE]
>⚠注意：清理系统还原和卷影复制不会影响个人文件和数据，一般情况下可以放心删除，但会删除之前的还原点，可能会影响系统恢复的能力。因此，建议在清理之前确保没有重要的系统还原点需要保留。
<br>

 ![图片](/images/Cleanup-System_Disk/5.png)



### 设置 （适用于 Windows 10 以上）
- 以 Windows 11 为例，打开 设置 (Windows 键 + I ) > 系统 > 存储  ，或者 [点我o(*￣▽￣*)ブ](ms-settings:storagesense)  直达该页面（点击链接后如浏览器提示 此站点正在尝试打开“设置” ，请点击“打开”）<br>
![图片](/images/Cleanup-System_Disk/8.png)

- 打开后，点击“临时文件”<br>
![图片](/images/Cleanup-System_Disk/10.png)

- 等待扫描完成后，勾选 **你认为该清理** 选项，点击 “删除文件” 按钮，在弹出的提示框中点击 “继续” 即可开始删除<br>
![图片](/images/Cleanup-System_Disk/9.png)




## 通过 杀毒软件 附带的工具
- 系统自带的清理工具作用有限，我们可以通过 第三方杀毒软件 附带的 清理工具 以清理应用程序的垃圾等<br>以下为市面上常见的2个杀毒软件的操作示范<br>
<br>（注：操作前请确保已安装对应的软件）

### 火绒安全
- 打开 火绒安全 主界面,在应用左侧的列表中点击第4个图标，然后点击 “垃圾清理”<br>
![图片](/images/Cleanup-System_Disk/11.png)
- 点击 “开始扫描”，并等待扫描完成<br>
![图片](/images/Cleanup-System_Disk/12.png)
- 扫描完成后，你可以放心清理自动选择的项目，或者手动选择一些项目，选择完成后，点击 “一键清理” 即可,等待清理完成即可关闭窗口<br>
>[!WARNING]
>⚠注意：谨慎选择其他清理项目，请确保清楚你在干什么，否则别乱选！

![图片](/images/Cleanup-System_Disk/13.png)
![图片](/images/Cleanup-System_Disk/14.png)

### 360安全卫士
- 打开 360安全卫士 主界面，点击“清理加速” ，找到 “深度清理” 的字样并点击，等待扫描完成
![图片](/images/Cleanup-System_Disk/15.png)<br>
- 扫描完成后，你可以放心清理自动选择的项目，或者手动选择一些项目，选择完成后，点击 “深度清理” 即可,等待清理完成即可关闭窗口
>[!WARNING]
>⚠注意：谨慎选择其他清理项目，请确保清楚你在干什么，否则别乱选！

![图片](/images/Cleanup-System_Disk/18.png)
<br> 

>[!NOTE]
>⚠注意：如果选择了其他清理项目，可能会弹出如下图所示的窗口，如果你知道清理的是什么，请点击“清理所有”以继续完成清理任务，如果你不确定清理的是什么，请点击“仅清理无风险项”以继续，点击后将自动跳过你手动勾选的项目<br>
![图片](/images/Cleanup-System_Disk/17.png)

![图片](/images/Cleanup-System_Disk/16.png)

## 进阶操作
### 使用 Dism ++ 清理
 >[!CAUTION]
 >⚠注意：建议专业人员操作，除非你知道你在干什么，否则造成系统损坏等后果请自行负责

下载 Dism ++ :<br>
https://github.com/Chuyu-Team/Dism-Multi-language/releases
<br>
![图片](/images/Cleanup-System_Disk/19.png)
<br>
镜像链接直达下载（适用于无法访问的用户）：<br>
https://ghproxy.net/https://github.com/Chuyu-Team/Dism-Multi-language/releases/download/v10.1.1002.2/Dism++10.1.1002.1B.zip

- 下载完成后，将压缩包进行解压，解压完成后，双击运行 Dism ++ x86.exe 程序，点击”同意“<br>

打开后在应用左侧的列表中选择 空间回收 ，在列表中点击任意一个选项即可在应用右侧查看 描述 及 详细信息，勾选你想清理的项目，选择完成点击扫描并等待<br>（直接点击“清理“会先扫描完然后再自动清理）
![图片](/images/Cleanup-System_Disk/20.png)<br>
(截图中勾选的项目仅为示范)

>[!WARNING]
>⚠注意：部分项目清理过后可能会导致系统损坏症状，**除非你知道程序在干什么 或者 你很清楚你在干什么**，请谨慎选择！

扫描完成后，点击 清理 ，点击 确定 即可开始清理
>清理部分项目时可能会弹出提示框确认，点击 确定 即可进行清理，点击 取消 将跳过清理该项
