---
title: 极路由降级和安装shadowsocks
tags: 翻墙
---


由于极路由最新版本安装不了shadowsocks，所以需要降级安装：


<!--more--> 
## 降级视频教程：
<!--more--> 

[http://v.youku.com/v_show/id_XMTMwNzA5MDY4OA==.html?from=y1.7-1.2
](http://v.youku.com/v_show/id_XMTMwNzA5MDY4OA==.html?from=y1.7-1.2)

## 以太网的IP
## win10版本:
右键电脑桌面右下角的wifi图标-打开网络和共享中心-更改适配器设置-以太网-Internet协议版本4；ip改成 192.168.1.88子网掩码 255.255.255.0

我们这里安装的版本是：  HC5962 - 1.1.4.14678s ，所需固件和这个文件已上传百度云： 


链接：[http://pan.baidu.com/s/1nvptgZv](http://pan.baidu.com/s/1nvptgZv) 密码：9uco


然后，很重要的一点：** 关闭路由器自动升级功能 **：智能插件-路由器信息，改为手动。

<div align=center>![avatar](/uploads/jiluyou/1.png)

## 获取root权限：
在路由器后台，点击【云插件】或访问，进入云平台。
切换到【路由器信息】页面，拉到最底部，点击【高级设置】

<div align=center>![avatar](/uploads/jiluyou/2.jpg)

申请成功后，安装【开发者模式】插件，安装成功后，路由器可能会重启。如果一直停留在【安装中....】则重启路由器，重新安装这个插件。

## 安装ss：

google里面有很多：

安装好putty,登录：ip为192.168.199.1; ,端口1022;用户名：root;密码就是路由器登录密码；

主要是那条安装ss的指令：我用的是这个网站的：
[https://github.com/qiwihui/hiwifi-ss/issues/1](https://github.com/qiwihui/hiwifi-ss/issues/1)

使用的是这条：
```
cd /tmp && curl -k -o shadow.sh https://raw.githubusercontent.com/qiwihui/hiwifi-ss/master/shadow.sh && sh shadow.sh && rm shadow.sh
```
然后重启路由器；
然后路由器“互联网”页就有“shadowsocks 设置”了，如果没有出现，那就换一个指令；
找对应的

<div align=center>![avatar](/uploads/jiluyou/3.png)

## ss配置页面：

<div align=center>![avatar](/uploads/jiluyou/4.png)
