---
title: Clash/ClashR各版本(windows,mac,linux,安卓)使用教程(搭配Proxy SwitchyOmega)

tags: 翻墙
---

clash默认不支持ssr,clashR才支持，需要替换calsh的内核
Clash各版本(win,mac,linux)使用教程，增加规则,搭配Proxy SwitchyOmega,备份以免忘记

自用稳定高速机场推荐：http://dwz.date/wdx

[机场订阅转换](https://web.api.ytoo-163cdn.com/) ：包含：SS(R)/v2ray转clash(R)

<!--more--> 
# Clash/clashR

## windows版本：

1) [clash for windows/CFW](https://github.com/Fndroid/clash_for_windows_pkg/releases) :不支持SSR,[telegram群](https://t.me/fndroid_news)

2)clashR（支持SSR）:  
在上面CFW基础上改内核即可:
[下载内核文件](https://github.com/BROBIRD/clash/releases) ，改名为clash-win64.exe

<div align=center>![avatar](/uploads/clash/34.png)

替换CFW的resources\static\files文件夹里面的内核文件clash-win64.exe

<div align=center>![avatar](/uploads/clash/33.png)


### 点击左边Profiles
#### 订阅链接和配置文件二选一！
##### 1.如果是使用订阅链接：粘贴订阅链接——然后点击download——提示 Success 

<div align=center>![avatar](/uploads/clash/1.png)


设置自动定时更新订阅（可选）
点击【Profiles】-点击change information按钮-随便输入名称-输入定时更新的时间（小时整数，24就挺好）

<div align=center>![avatar](/uploads/clash/31.png)

<div align=center>![avatar](/uploads/clash/32.png)


##### 2.如果是使用配置文件：直接拖本地yaml格式配置文件到页面，点击选择刚才的配置！！！选择颜色变深。

  <div align=center>![avatar](/uploads/clash/2.gif)


连接成功左下角会显示Connected

设置为系统代理：

### 开启方法：点击左边General——点击System proxy！！！


可以设置开机自启：点击Start with Windows；

详细教程：

[how-to-use-clash-for-windows](https://10101.io/2018/10/27/how-to-use-clash-for-windows)

[docs.cfw.lbyczf](https://docs.cfw.lbyczf.com/contents/quickstart.html)



## mac版本：

mac安装文件：
1)[calshX](https://github.com/yichengchen/clashX/releases)

2)[clashXR](https://github.com/WhoJave/clashX/releases) :支持SSR

#### 订阅链接和配置文件二选一！

首先都要：把出站模式改为【规则判断】
<div align=center>![avatar](/uploads/clash/21.png)

##### 1.1通过订阅链接

具体如下：
1.点击【配置】-【托管配置】-【管理】
<div align=center>![avatar](/uploads/clash/22.png)
2.点击【添加】-填入链接和随便起要给名字-点击【确定】
<div align=center>![avatar](/uploads/clash/23.png)
3.设置为系统代理
<div align=center>![avatar](/uploads/clash/23.5.png)




##### 1.2通过配置文件：点击状态栏图标 — 配置 — 打开配置文件夹

1.点击配置——打开配置文件夹——把下载的yaml 文件拖到文件夹里面
<div align=center>![avatar](/uploads/clash/25.png)
<div align=center>![avatar](/uploads/clash/24.png)

2.点击配置，然后选择刚刚的那个配置文件
<div align=center>![avatar](/uploads/clash/26.png)

3.最后，勾选 ClashX 的「设置为系统代理」即可开始使用
<div align=center>![avatar](/uploads/clash/27.png)



## 安卓版本:
1)[clash_for_android](https://github.com/Kr328/ClashForAndroid/releases)：支持SSR,推荐，[telegram群](https://t.me/clash_for_android_channel)

2)[ClashAR](https://github.com/WhoJave/ClashA/releases) : 支持SSR

3)[ClashA](https://github.com/ccg2018/ClashA/releasess)

## linux版本:
[GitHub项目地址](https://github.com/Dreamacro/clash/releases) ,下载对应安装包

[安装方法参考](https://www.jianshu.com/p/2906066d2e0a)


# SwitchyOmega浏览器插件（可选）
如果设置为系统代理则会全部都通过clash 分发。如果不想设置为系统代理则可以搭配
SwitchyOmega浏览器插件使用

chrome 网上应用店 搜索Proxy SwitchyOmega

[谷歌浏览器插件地址](https://chrome.google.com/webstore/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif?hl=zh-CN)

不能点开？https://www.gugeapps.net/ 这里搜索下载；
然后[安装这个方法离线安装]( https://jingyan.baidu.com/article/0f5fb099cbe5486d8334ea2c.html?st=5&os=1&bd_page_type=1&net_type=1)


觉得设置麻烦直接导入[我的备份文件](https://www.lanzous.com/i831agd)

点击左边：导入/导出，从备份文件恢复
<div align=center>![avatar](/uploads/clash/000.png)

##### 1.新建情景模式-选择代理服务器-代理协议选择HTTP-代理端口选择7890

随便命名

<div align=center>![avatar](/uploads/clash/8.png)

<div align=center>![avatar](/uploads/clash/5.png)

上面表示走代理的时候走哪个代理，填写的是代理的信息

下面的自动切换 则如同PAC模式，需要走代理的时候才走代理；(如果clash已经有分流规则,搭配clash时可以不弄)

别人已经总结出了需要走代理的[网站规则列表](https://raw.githubusercontent.com/gfwlist/gfwlist/master/gfwlist.txt)


##### 2.点击自动切换-选择AutoProxy-粘贴规则列表地址-立即更新情景模式(如果clash已经有分流规则,搭配clash时可以不弄)

  <div align=center>![avatar](/uploads/clash/6.png)

规则列表规则 需要选择为刚刚设置的代理，这里是GFWed

选择为自动切换，表示需要走代理才走；
没有弄自动切换直接选则自己创建的代理（如我这里的GFWed）

  <div align=center>![avatar](/uploads/clash/7.png)



## 配置规则+去除广告:

[Surge、Shadowrocket、Quantumult、Pepi(ShadowRay)、Kitsunebi、Clash、V2Ray 更新配置规则文件](https://jiangxin.info/0507/surge-shadowrocket-quantumult-pepi-kitsunebi-potatso-v2ray-clash-profiles/)


## Clash增加规则

### 选择Profiles页面

#### 1.Clash 页面添加：
#### 中间Edite Rules--Add--添加关键字或者域名--选择一条线路--save



  <div align=center>![avatar](/uploads/clash/9.png)

  <div align=center>![avatar](/uploads/clash/10.png)

  <div align=center>![avatar](/uploads/clash/11.png)

  <div align=center>![avatar](/uploads/clash/12.png)
  <div align=center>![avatar](/uploads/clash/12.1.png)


#### 2.配置文件添加：

#### 点击Edit in text mode--拉到Rule

栗子：

DOMAIN-SUFFIX表示增加域名
- DOMAIN-SUFFIX,http://hongwan.xyz/,google
（-DOMAIN-SUFFIX,域名,指定线路）

KEYWORD表示增加关键字
- DOMAIN-KEYWORD,google,google
（-DOMAIN-KEYWOR,关键字,指定线路）

  <div align=center>![avatar](/uploads/clash/13.png)

  <div align=center>![avatar](/uploads/clash/14.png)


