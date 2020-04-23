---
title: 虚拟定位破解钉钉打卡(fv悬浮球，手机分身,炼妖壶,fake location,太极,钉钉助手,锤锤)以及magisk模块使用

tags: 破解
---
目的就是为了可以虚拟定位，但是又不能让钉钉检测到

IOS苹果手机:
直接使用PC版的爱思助手的虚拟定位，越狱了可以使用钉钉助手

安卓三种方法：
 0.直接放一台手机到需要打卡的地方，最不容易检测 
下面的教程可能已经被钉钉封杀了

1 如果是小米MIUI,华为EMUI,魅族flyme,三星有手机分身功能的，主空间安装fake location模拟定位，分身系统空间安装钉钉

2 如果没有分身系统功能

2.1 如果有root权限:

2.1.1 可以直接使用fake location的高级会员的反检测功能,会员要钱 
2.1.2 直接使用炼妖壶APP,在炼妖壶里面安装钉钉

2.2如果没有root权限:

2.2.1 使用adb开启炼妖壶，不会adb的可以用AutumnBox (https://atmb.top/)
2.2.2 使用太极APP配合钉钉助手APP或者锤锤

<!--more--> 

# 一、IOS苹果手机

如果是IOS的,可以使用PC版的爱思助手的虚拟定位(工具箱--虚拟定位--修改虚拟定位)
<div align=center>![avatar](/uploads/taiji/0.png)

你的手机定位就定死在了那个设置的地方，不用时记得还原真实定位


# 二、安卓手机
## 0.直接放一台手机到需要打卡的地方，最不容易检测 ：

tasker需要root权限，fv悬浮球不需要
具体 参考：

https://www.bilibili.com/read/cv4628284

里面的屏幕解锁不成功，可以取消屏幕解锁并去除教程里那几个步骤。




## 1.如果手机有分身功能，主空间安装fake location模拟定位，分身系统空间安装钉钉

fake location安装包：
[fakelocation](https://github.com/Lerist/FakeLocation/releases)
主空键安装后直接后直接搜索要模拟的位置模拟，免root运行需要去开发者模式—>选择模拟位置信息应用->选择fake location
然后去分身系统安装钉钉


<div align=center>![avatar](/uploads/taiji/11.jpg)


是手机分身不是应用双开

小米MIUI：设置--特色功能--手机分身
华为EMUI：隐私空间
魅族：访客模式
三星：安全文件夹

## 2.如果没有分身系统功能

### 2.1 如果有root权限:
 
#### 2.1.1 可以直接使用fake location的高级会员的反检测功能,会员要钱 
使用fake location的高级会员的反检测功能
可以试用高级会员
到期后最好购买会员支持开发者

##### 找到菜单栏的反检测
<div align=center>![avatar](/uploads/taiji/20.jpg)

##### 点击加号，添加需要反检测的软件：钉钉
<div align=center>![avatar](/uploads/taiji/21.jpg)
##### 开启反检测
<div align=center>![avatar](/uploads/taiji/22.jpg)

##### 直接打开钉钉

#### 2.1.2 直接使用炼妖壶APP,在炼妖壶里面安装钉钉


炼妖壶相当于就是一个帮你双开应用的app，而且数据不互通，这样钉钉无法检测到你安装了虚拟定位，可以不需要root 也能用

安装好fake location后

安装炼妖壶，app地址：
[https://github.com/oasisfeng/island/releases](https://github.com/oasisfeng/island/releases)

如果有root权限直接使用炼妖壶APP,在炼妖壶里面安装钉钉
如果没有root权限：使用adb开启炼妖壶，不会adb的可以用AutumnBox (https://atmb.top/)


然后在炼妖壶里面安装钉钉（界外搜索点击钉钉进行双开钉钉，壶中界打卡）

主空间fake location模拟位置，炼妖壶里面打开钉钉打卡

### 2.2如果没有root权限:

#### 2.2.1 使用adb开启炼妖壶，不会adb的可以用AutumnBox (https://atmb.top/)

开启abd后和上面一样

#### 2.2.2 使用太极APP配合钉钉助手APP或者锤锤

##### 三步：
##### 1.安装太极app
##### 2.安装位置模拟软件：钉钉助手app或者锤锤app
##### 3.设置

(钉钉助手直接模拟，锤锤则是采集位置信息，需要先到打卡的地方采集)

太极如同另外一个Xposed框架


##### 1.安装太极app
太极app官网：[https://www.taichi-app.com/index.html](https://www.taichi-app.com/index.html)

选择下载左边的太极，不是Magisk模块

<div align=center>![avatar](/uploads/taiji/1.png)

可以安装
##### 2.安装位置模拟软件：钉钉助手app，锤锤app二选一

##### 2.1钉钉助手app

下载地址：
[https://repo.xposed.info/module/com.sky.xposed.rimet](https://repo.xposed.info/module/com.sky.xposed.rimet)

apk安装包地址:
<div align=center>![avatar](/uploads/taiji/2.png)

记得查看当前钉钉助手版本是否支持钉钉版本！！！不支持卸载钉钉后重装合适的版本


##### 钉钉助手app设置操作：
##### 1)进入 太极 选择创建 钉钉 (后面的操作跟着提示完成即可)。
具体：点击太极首页右下角的浮动按钮，然后在弹出菜单中点击创建APP，然后选择钉钉，然后点击创建按钮，耐心等待创建完毕。创建完成之后，会提示并自动帮助你卸载原APP，然后会自动提示你再安装钉钉

<div align=center>![avatar](/uploads/taiji/41.png)
<div align=center>![avatar](/uploads/taiji/42.jpg)

##### 2)进入 太极 在 模块管理 中勾选 钉钉助手 ,完成后强行停止 钉钉。

<div align=center>![avatar](/uploads/taiji/53.png)


##### 3)回到桌面点击 钉钉->我的->设置->钉钉助手 进行配置。
 具体操作：开启虚拟定位--点击位置信息--点击右上角放大镜搜索需要定位的地址--点击右上角√

<div align=center>![avatar](/uploads/taiji/61.jpg)

##### 要开启虚拟定位！

<div align=center>![avatar](/uploads/taiji/62.jpg)

点击位置信息
<div align=center>![avatar](/uploads/taiji/63.png)
点击右上角放大镜搜索需要定位的地址--点击右上角√
<div align=center>![avatar](/uploads/taiji/64.png)

##### 如果不成功，可能是版本不对应！
##### 如果钉钉更新，则需要钉钉助手模块也需要更新支持
##### 如果失效了，那重装或者换锤锤试试


######  2.2锤锤app：需要先到需要打卡的地方采集位置信息

安装包：
[https://repo.xposed.info/module/com.jrsen.android.rimet](https://repo.xposed.info/module/com.jrsen.android.rimet)

锤锤app设置操作：
<div align=center>![avatar](/uploads/taiji/chui.jpg)

去到需要打卡的地点，点击右下角+ 号就保存位置信息
然后和之前一样同样是进入 太极 在 模块管理 中勾选 锤锤 ,完成后强行停止 钉钉。
然后再打开钉钉


如果只要钉钉打卡，那么到这里就可以了；


太极介绍与教程：：
[https://taichi.cool/README_CN.html](https://taichi.cool/README_CN.html)


钉钉助手教程：
[http://blog.skywei.info/2019-04-18/xposed_rimet](http://blog.skywei.info/2019-04-18/xposed_rimet)


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 我是分割线 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

但是想要进一步体验其他功能，比如去系统APP广告，魔改系统等，则需要magisk配合了
刷入第三方Twrp
安装magisk
安装其他插件模块

# 刷入第三方Twrp

直接找搜机型的第三方一键刷入包
进入recovery直接刷入（打开USB调试，小米6进入recovery –> 完全关机下，按“电源键”+“音量键上”）,然后安装指导进行就好

界面参考[http://3guu.cn/670.html](http://3guu.cn/670.html)


# 通过Twrp安装magisk

需要先导入magisk安装包到手机中
安装包：
[https://github.com/topjohnwu/Magisk/releases](https://github.com/topjohnwu/Magisk/releases)

太极其他模块：
[https://taichi.cool/module/module_cn.html](https://taichi.cool/module/module_cn.html)


