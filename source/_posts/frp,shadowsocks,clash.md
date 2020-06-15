---
title: 使用clash对frp与shadowsocks内网穿透分流
tags: 内网穿透
---

只适用于在外部，在内网别设置！

[上回说到使用frp搭配shadowsocks搭建内网穿透通道](https://hongwan.xyz/2019/12/07/frp,ngrok%E5%86%85%E7%BD%91%E7%A9%BF%E9%80%8F/)

现在则需要使用clash进行分流，从而可以同时科学上网与内网穿透，这也是clash的优点

内网以192.168为例子

** 需要把系统内网ip不走代理的设置为走代理，以及设置ssh客户端走代理 **


总体分为三步：
把线路选择到内网穿透那条--去掉系统192.168不走代理的设置，让连接192.168走代理--让ssh连接软件也走代理


<!--more--> 


## 一、windows设置： 

### 1.选择clash的vpn线路

<div align=center>![avatar](/uploads/clashFrpSs/1.png)

###  2.系统内网ip不走代理的设置为走代理：点击General YML，找到cfw-bypass，注释掉192.168.开头的那行


<div align=center>![avatar](/uploads/clashFrpSs/2.png)

打不开就是你电脑没有默认打开yml文件格式的编辑器，直接去编辑
C:\User\你的用户\.config\clash\config.yml 
比如我的用户名是红丸就是：
<div align=center>![avatar](/uploads/clashFrpSs/3.png)

<div align=center>![avatar](/uploads/clashFrpSs/4.png)

 此时可以打开192.168开始等内网的网页，包括Rstudio页面

####  如果要用xshell 连接内网服务器！！！
###  3.设置ssh客户端走代理：对单独某个服务器设置：xshell选中要连接的那个服务器，



<div align=center>![avatar](/uploads/clashFrpSs/5.png)

 选择左边的代理，然后点击浏览
<div align=center>![avatar](/uploads/clashFrpSs/6.png)
 
 点击添加，如图添加信息：，然后选择vpn，点击确定!
 <div align=center>![avatar](/uploads/clashFrpSs/7.png)

 
<div align=center>![avatar](/uploads/clashFrpSs/8.png)
 
 此时可以使用 **原本的服务器的ip** ：(192.168开头的，而不是内网穿透的ip) 访问了：
 
<div align=center>![avatar](/uploads/clashFrpSs/9.png)
 
<div align=center>![avatar](/uploads/clashFrpSs/10.png)
 
 
 ## 二、mac设置
 
 ### 1.选择clssh的vpn线路

<div align=center>![avatar](/uploads/clashFrpSs/11.png)
 
 
 先去除系统内部的让192.168默认全部不走代理的选项
 
### 2.系统内网ip不走代理的设置为走代理：

** 系统偏好设置-网络-高级-代理  --"忽略这些主机与域的代理设置--" 把192.168开始的删了  **
 
<div align=center>![avatar](/uploads/clashFrpSs/12.png)
 
 现在可以使用网页打开内网的页面了，比如Rstudio页面
 
#### 如果要用xshell 连接内网服务器！！！
### 3.设置ssh客户端teminal走代理：
 
进入 ssh 配置目录
```
cd ~/.ssh
```
编辑 config 文件,如果没有那就新建一个 config 文件
```
touch config
vi config
```

直接添加这两行：

```
Host *    
ProxyCommand nc -X 5 -x localhost:7891 %h %p
```


参考 ：  [https://www.xbug.me/post/60589.html](https://www.xbug.me/post/60589.html)

<div align=center>![avatar](/uploads/clashFrpSs/13.png)

