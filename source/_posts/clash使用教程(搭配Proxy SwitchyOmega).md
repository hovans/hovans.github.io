---
title: Clash/ClashR使用教程(windows,mac,linux,安卓,ios)

tags: 翻墙
---


Clash默认不支持ssr,clashR才支持，需要替换Clash的内核
Clash各版本(win,mac,linux)使用教程，增加规则,搭配Proxy SwitchyOmega 



[机场订阅转换](https://web.api.ytoo-163cdn.com/) ：包含：SS(R)/v2ray转clash(R)

<!--more--> 
# Clash/clashR

## 一、windows版本：

### 1.clash for windows

[clash for windows/CFW](https://github.com/Fndroid/clash_for_windows_pkg/releases):
不支持SSR,[telegram群](https://t.me/fndroid_news)

如果想要支持SSR:  
在上面CFW基础上改内核即可:
[下载内核文件](https://github.com/BROBIRD/clash/releases) ，改名为clash-win64.exe

<div align=center>![avatar](/uploads/clash/34.png)

替换CFW的resources\static\files文件夹里面的内核文件clash-win64.exe

<div align=center>![avatar](/uploads/clash/33.png)

教程：

#### 第1步：设置节点信息，点击左边Profiles

** 订阅链接和配置文件二选一!!! ** 
** 1）如果是使用订阅链接：粘贴订阅链接——然后点击download——提示 Success ** 

<div align=center>![avatar](/uploads/clash/1.png)

动图：
<div align=center>![avatar](/uploads/clash/1.gif)

** 2）如果是使用配置文件：直接拖本地yaml格式配置文件到页面，点击选择刚才的配置！！！选择颜色变深。 ** 

<div align=center>![avatar](/uploads/clash/2.gif)

连接成功左下角会显示Connected

#### 第2步：设置为系统代理
** 开启方法：点击左边General——点击System proxy！！！可以设置开机自启：点击Start with Windows；  **
<div align=center>![avatar](/uploads/clash/sys.png)

如果是使用订阅链接的可以设置自动定时更新订阅（可选）
点击【Profiles】-点击change information按钮-随便输入名称-输入定时更新的时间（小时整数，24就挺好）

<div align=center>![avatar](/uploads/clash/31.png)

<div align=center>![avatar](/uploads/clash/32.png)

详细教程：

[how-to-use-clash-for-windows](https://10101.io/2018/10/27/how-to-use-clash-for-windows)

[docs.cfw.lbyczf](https://docs.cfw.lbyczf.com/contents/quickstart.html)


### 2.mini web版本:[ClashWeb](https://github.com/lzdnico/ClashWeb/releases)
这个版本优点：内存占用小
有withoutpython.7z结尾的文件是需要安装python并且自己安装依赖包的；为了方便，请下载下面没有withoutpython结尾的.7z已经打包好的文件。

1)启动：双击ClashWeb.exe文件
2)开启代理：右键桌面右下角小猫图标--Clash--启动clash
<div align=center>![avatar](/uploads/clash/web1.jpg)
3)设置为系统代理：右键桌面右下角小猫图标--系统代理--开启系统代理
<div align=center>![avatar](/uploads/clash/web2.jpg)

4)打开控制台：右键桌面右下角小猫图标--控制后台--=打开控制后台
<div align=center>![avatar](/uploads/clash/web3.jpg)

5)设置节点：订阅链接/选择配置文件：点击【配置托管】
<div align=center>![avatar](/uploads/clash/web4.jpg)

如果是通过订阅链接：把订阅链接粘贴到订阅地址下方，然后【点击下载配置】--然后点击【重启Clash】
<div align=center>![avatar](/uploads/clash/web5.jpg)
如果没有clash订阅链接，软件自带ss/v2ray订阅转换Subscription Converter,点击【订阅转换】

如果是使用配置文件：配置文件需要为yaml后缀，然后拷贝到Profile文件夹中，刷新页面--页面【配置文件】选择刚刚拷贝的文件--点击【重启Clash】
<div align=center>![avatar](/uploads/clash/web6.jpg)

如果需要修改规则/配置文件信息，直接点击控制台的【查看配置】--修改后--点击【修改配置】--【重启Clash】

6)点击【打开面板】--进入节点选择信息、日志、规则，设置页面
<div align=center>![avatar](/uploads/clash/web7.jpg)

如果重启clash后显示成功代表没有问题，失败则表示配置文件有问题。

## 二、mac版本：

mac安装文件：
[calshX](https://github.com/yichengchen/clashX/releases)

[clashXR](https://github.com/WhoJave/clashX/releases) :支持SSR

** 订阅链接和配置文件二选一！ ** 

首先都要：把出站模式改为【规则判断】
<div align=center>![avatar](/uploads/clash/21.png)

**  如果通过订阅链接 ** 

具体如下：
1.点击【配置】-【托管配置】-【管理】
<div align=center>![avatar](/uploads/clash/22.png)
2.点击【添加】-填入链接和随便起要给名字-点击【确定】
<div align=center>![avatar](/uploads/clash/23.png)
3.设置为系统代理
<div align=center>![avatar](/uploads/clash/23.5.png)


**  如果通过配置文件：点击状态栏图标 — 配置 — 打开配置文件夹 ** 

1.点击配置——打开配置文件夹——把下载的yaml 文件拖到文件夹里面
<div align=center>![avatar](/uploads/clash/25.png)
<div align=center>![avatar](/uploads/clash/24.png)

2.点击配置，然后选择刚刚的那个配置文件
<div align=center>![avatar](/uploads/clash/26.png)

3.最后，勾选 ClashX 的「设置为系统代理」即可开始使用
<div align=center>![avatar](/uploads/clash/27.png)



## 三、安卓版本:
1)[clash_for_android](https://github.com/Kr328/ClashForAndroid/releases)：支持SSR,推荐，[telegram群](https://t.me/clash_for_android_channel)

** 添加配置文件：点击【Profiles】--【New Profiles】 **
【File】--通过配置文件，先保存文件到手机
【URL】--通过订阅链接

** 点击Stopped 开启，开启后变为Running **

** Proxy **：节点选择

2)[ClashAR](https://github.com/WhoJave/ClashA/releases) : 支持SSR

3)[ClashA](https://github.com/ccg2018/ClashA/releasess)




## 四、IOS版本：
一般iOS大家推荐 shadowrocket,Quantumult(X)，kitsunebi这些，但是quantumultX的健康检测自动选择节点功能总觉得不方便，近期小水滴：Pharos pro 支持导入clash了，导入本地yaml文件或者远程yaml文件下载。

需要美区id购买下载，去淘宝或者发卡网买：https://dlj.tf/rBQ1Id

官方telegram群：https://t.me/Pharos_x_Announcements

**  导入方法：点击右上角“+添加”--“手动输入”--“clash” ** 
1）“从本地导入配置”：导入本地clash yaml格式文件,需要先把clash文件存在手机里
2）“下载配置”：远程clash订阅

导入视频参考：
本地文件：https://t.me/ysl_channel/718
远程clash订阅：https://t.me/ysl_channel/737


## 五、linux版本:
[GitHub项目地址](https://github.com/Dreamacro/clash/releases) ,下载对应安装包

[安装方法参考](https://www.jianshu.com/p/2906066d2e0a)


# Clash增加规则

规则匹配：
DOMAIN-SUFFIX表示增加域名，比如：hongwan.xyz，匹配整个hongwan.xyz网站
KEYWORD表示增加关键字，比如hongwan，则可以匹配网址单词包括有“hongwan”的网址，比如aahongwan.xyz,hongwan.com,ahongwanb.com/help等。
IP--CIDR表示指定ip： 比如：13.105.218.23/32，表示匹配整个ip


### 选择Profiles页面

**  1).Clash 页面添加： ** 
**  中间Edite Rules--Add--添加关键字或者域名--选择一条线路--save ** 

比如给hongwan.xyz,整个网址设置走代理并且指定为google这个策略组：

  <div align=center>![avatar](/uploads/clash/9.png)

  <div align=center>![avatar](/uploads/clash/10.png)

  <div align=center>![avatar](/uploads/clash/11.png)

  <div align=center>![avatar](/uploads/clash/12.png)
  <div align=center>![avatar](/uploads/clash/12.1.png)



**  2).配置文件添加： ** 

**   点击Edit in text mode--拉到Rule ** 

栗子：

**  DOMAIN-SUFFIX表示增加域名 ** 
- DOMAIN-SUFFIX,http://hongwan.xyz/,google ：表示http://hongwan.xyz/这个网址相关的页面都走google这个策略组
（-DOMAIN-SUFFIX,域名,指定线路）

** KEYWORD表示增加关键字 ** 
- DOMAIN-KEYWORD,google,google ：表示网址有google这个字符串的都走google这个策略组
（-DOMAIN-KEYWOR,关键字,指定线路）

** IP--CIDR表示指定ip ** 
- IP-CIDR,13.105.218.23/32,美国服务器 ：表示ip为13.105.218.23的都走美国服务器这个策略组
（IP-CIDR,ip地址/32,指定线路）


  <div align=center>![avatar](/uploads/clash/13.png)

  <div align=center>![avatar](/uploads/clash/14.png)


### 具体例子：

yml配置文件中：
** Proxy Group: ** ：代表策略组

例子1：
比如要把美国的线路都放到一个策略组里面，同时让某个ip或者网站走这些线路
如：
```
  - name: 美国服务器
    type: select
    proxies:
      - DIRECT
      - 日用 美国 01 [0.2]
      - 🇺🇸 日用-美国-[0.2]
      - 🇺🇸 美国-01-(1)
      - 🇺🇸 美国-02-(1)
```
创建名为美国服务器的组，type为select，表示自己选择线路，proxies为可以选的节点名称，其中默认是DIRECT表示直连，不走代理。

添加rule:
  - IP-CIDR,33.106.219.23/32,美国服务器
表示33.106.219.23/32这个ip走美国服务器这个组，默认是直连。

在Proxies页面显示如下：
  <div align=center>![avatar](/uploads/clash/lizi4.png)



例子2：
假如我有：🇭🇰 香港-01-0.6，🇭🇰 香港-02-0.6 ，🇭🇰 香港-03-0.6三个节点。
我需要设置网址包含有google的都走指定策略组google，并且这个策略组可以默认自己选择延迟最低的节点，同时也可以指定节点：

1）先设置一个自动选择延迟最低的名为google-auto策略组：
```
  - interval: 300
    name: google-auto
    proxies:
      - 🇭🇰 香港-01-0.6
      - 🇭🇰 香港-02-0.6
      - 🇭🇰 香港-03-0.6
    type: url-test
    url: http://www.gstatic.com/generate_204c
```
这里面type为url-test，proxies下的节点会轮流向http://www.gstatic.com/generate_204c这个网站发送请求，自动选择延迟最低的节点。

2）然后创建一个google的策略组
```
  - name: google
    proxies:
      - google-auto
      - 🇭🇰 香港-01-0.6
      - 🇭🇰 香港-02-0.6
      - 🇭🇰 香港-03-0.6
    type: select
```
这里type为select，表示节点是自己自选的，默认为第一个节点，可以是线路也可以是别的策略组，这里是google-auto这个策略组。

3）在Rule写哪些网站需要使用到上面的策略组

```
Rule:
  - DOMAIN-KEYWORD,google,google
  - DOMAIN-SUFFIX,wikipedia.org,google
```
这里是网址有google这个字符串关键词的网站和wikipedia.org网站都走google策略组，并且默认是google-auto，google-auto策略组会默认选择3条线路中延迟最低的那条线路节点，当某条线路挂了，会自动选择其它线路，不需要手动切换，同时google是可以自己选择的，不想默认为它自己选的线路，也可以自己指定某一条线路。

在Proxies页面显示如下：

  <div align=center>![avatar](/uploads/clash/lizi1.png)

  <div align=center>![avatar](/uploads/clash/lizi2.png)

规则：

  <div align=center>![avatar](/uploads/clash/lizi3.png)



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

**  1.新建情景模式-选择代理服务器-代理协议选择HTTP-代理端口选择7890 ** 

随便命名

<div align=center>![avatar](/uploads/clash/8.png)

<div align=center>![avatar](/uploads/clash/5.png)

上面表示走代理的时候走哪个代理，填写的是代理的信息

下面的自动切换 则如同PAC模式，需要走代理的时候才走代理；(如果clash已经有分流规则,搭配clash时可以不弄)

别人已经总结出了需要走代理的[网站规则列表](https://raw.githubusercontent.com/gfwlist/gfwlist/master/gfwlist.txt)


**  2.点击自动切换-选择AutoProxy-粘贴规则列表地址-立即更新情景模式(如果clash已经有分流规则,搭配clash时可以不弄) ** 

  <div align=center>![avatar](/uploads/clash/6.png)

规则列表规则 需要选择为刚刚设置的代理，这里是GFWed

选择为自动切换，表示需要走代理才走；
没有弄自动切换直接选则自己创建的代理（如我这里的GFWed）

  <div align=center>![avatar](/uploads/clash/7.png)



## 配置规则+去除广告:

[Surge、Shadowrocket、Quantumult、Pepi(ShadowRay)、Kitsunebi、Clash、V2Ray 更新配置规则文件](https://jiangxin.info/0507/surge-shadowrocket-quantumult-pepi-kitsunebi-potatso-v2ray-clash-profiles/)



