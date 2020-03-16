
---
title: xshell、FileZila、Navcat使用代理连接国外服务器
tags: 代理
---

国外服务器被墙了，通过代理连接，代理推荐：http://dwz.date/wdx

<!--more--> 
### 一.xshell连接服务器

#### 1.查看代理监听端口
如图v2ray监听2333端口

<div align=center>![avatar](/uploads/xshellnavcat/1.png)

#### 2.添加需要连接的远程服务器连接信息
<div align=center>![avatar](/uploads/xshellnavcat/2.png)


####  选择“代理”
<div align=center>![avatar](/uploads/xshellnavcat/3.png)

点击“添加",添加代理的端口2333
<div align=center>![avatar](/uploads/xshellnavcat/4.png)


选中刚才添加的代理；点击“连接”；xshell可以通过隧道连接远程服务器了


### 二、FileZila ：编辑-设置-通用代理-socks5

<div align=center>![avatar](/uploads/xshellnavcat/5.png)


### 三.Navcat连接远程服务器mysql

### xshell设置：
属性-隧道-添加

主机为localhost
侦听端口-随便写一个比如8888
目标主机就是远程主机ip
端口：mysql这里是3306

<div align=center>![avatar](/uploads/xshellnavcat/6.png)

#### Navicat 设置

这里端口为刚才填写的8888
用户名为mysql 用户名
密码为远程主机mysql 登录密码

<div align=center>![avatar](/uploads/xshellnavcat/7.png)



https://eveaz.com/1095.html

https://blog.csdn.net/qq_38839758/article/details/90202260