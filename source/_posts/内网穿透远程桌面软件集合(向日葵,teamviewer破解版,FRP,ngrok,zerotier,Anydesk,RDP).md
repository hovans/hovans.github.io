
---
title: 内网穿透远程桌面软件集合(向日葵/ teamviewer破解版/ ngrok/ FRP/ RDP/ zerotier/ Anydesk)
tags: 远程桌面
---

总结：
充值可加速！
不管有无公网vps,都可以使用：todesk,向日葵，teamviewer破解版
有公网vps：使用frp,ngrok等自己搭建搭配mstsc RDP，比较安全
无公网vps：使用natfrp，zerotier，小米云ngrok等第三方提供的公网ip

速度：
teamviewer破解版>向日葵>自建frp内网搭配RDP>natfrp>小米云ngrok>zerotier>Anydesk 


<!--more--> 

### todesk

这个软件是新发现的，还挺流畅的，主要是免费，缺点是个国内小公司的，不知道安全性如何。
https://www.todesk.com/download.html



### teamviewer 突破商业限制破解版(貌似失效了)

1)俄罗斯大神破解版,安全性自测：[https://lrepacks.ru/](https://lrepacks.ru/)
2)[fxxkmakeding](www.fxxkmakeding.xyz/)
3)[Mac/Windows TeamViewer 破解版，解除被检测出商业用途限制(5 min)](https://github.com/itgoyo/TeamViewer-5min)



### 有公网vps,使用frp,ngrok等自己搭建搭配RDP
推荐mstsc RDP主要是windows自带，而且速度很好

具体参考上篇文章；[frp,ngrok搭配shadowsocks内网穿透与RPD远程桌面](https://honven.xyz/2019/12/07/frp,ngrok%E5%86%85%E7%BD%91%E7%A9%BF%E9%80%8F/#more)

可以同时搭配shadowsocks实现搭建内网vpn

### 无公网ip vps,使用frp,ngrok等自己搭建搭配RDP

#### 1. [natfrp](www.natfrp.com)
可以白嫖的基于frp的内网穿透，还提供了图形操作软件。

注册后：
1)新建隧道：端口填写3389，自选服务器
<div align=center>![avatar](/uploads/RDP/1.png)
2)下载官方客户端，【用户信息】，那里获取密钥，填写进去点击开启就可以了，用它的ip远程
<div align=center>![avatar](/uploads/RDP/2.png)
<div align=center>![avatar](/uploads/RDP/3.png)

#### 2. [小米球ngrok](http://ngrok.ciqiuwl.cn/)
具体参考上篇文章；[frp,ngrok搭配shadowsocks内网穿透与RPD远程桌面](https://honven.xyz/2019/12/07/frp,ngrok%E5%86%85%E7%BD%91%E7%A9%BF%E9%80%8F/#more)

### 3.[zerotier](https://www.zerotier.com/)

可以把两台电脑练成内网，但是服务器在国外，延迟比较大。可以使用vps自建moons

1)注册后，点进去networks,给你一个免费的id
<div align=center>![avatar](/uploads/RDP/4.jpg)

2）两台电脑下载客户端，把id填进去
<div align=center>![avatar](/uploads/RDP/5.png)

3)点进去id,给两台电脑的ip，打勾允许授权。右边的两个ip分别是它给你的两台电脑分配的ip
<div align=center>![avatar](/uploads/RDP/6.jpg)

然后就可以用它给你的ip地址远程桌面了。


