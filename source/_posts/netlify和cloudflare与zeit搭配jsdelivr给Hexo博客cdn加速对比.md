---
title: netlify和cloudflare与zeit搭配jsdelivr给Hexo博客cdn加速对比
tags: cdn加速
---

hexo默认github page,比较慢；目前大家使用的做法主要有coding，github 双部署，netlify，cloudflare，zeit和jsdelivr等方法；
我主要选择zeit，速度快且可以让百度爬虫收录。


<!--more--> 
## 一、分类：
zeit与netlify都属于copy一份你github的博客文件，然后在它给你的空间新开一个page博客页面，同时提供cdn加速。
部署比较简单，用GitHub登陆授权后一直往下点就行了。然后改dns配置域名。

###  1.zeit：
参考这篇文章：[解决百度爬虫无法爬取 Github Pages 个人博客的问题](https://zpjiang.me/2020/01/15/let-baidu-index-github-page)；请求的是台湾的服务器

### 2.netlify：
参考这篇文章:
[将 Hexo 静态博客部署到 Netlify](https://io-oi.me/tech/deploy-static-site-to-netlify)；请求的是新加坡的服务器


### 3.cloudflare
cloudflare,直接给你的网速cdn加速。
只需要去官网添加博客网站，然后去域名网站改DNS。

### 4.jsdelivr
jsdelivr也是cdn加速商。我博客用的next主题内置了。直接去[next主题配置文件](https://www.cnblogs.com/lfri/p/12221963.html)把注释去掉就可以使用了。但只是静态资源


## 二、[博客](http://dwz.date/wdx)打开速度对比



#### 下午:
左边原github page，右边zeit
<div align=center>![avatar](/uploads/cdn/1.png)

netlify
<div align=center>![avatar](/uploads/cdn/2.png)

####  晚上：
左边原github page，右边zeit
<div align=center>![avatar](/uploads/cdn/3.png)

netlify
<div align=center>![avatar](/uploads/cdn/4.png)

#### 早上：

原cloudflare
<div align=center>![avatar](/uploads/cdn/8.png)

左边cloudflare+jsdelivr，右边zeit+jsdelivr

<div align=center>![avatar](/uploads/cdn/7.png)

另一个测速网站打开速度对比
zeit搭配jsdelivr：
<div align=center>![avatar](/uploads/cdn/6.png)

cloudflare：
<div align=center>![avatar](/uploads/cdn/5.png)

本地F12,联通打开速度对比：netlify 1.6s; zeit:1.8s;CF：2.25s


总结：总体zeit搭配jsdelivr速度最好，同时可以让百度收录，但是流量不多，适合我们这类小博客；
netlify站长之家速度不咋地，但是我这网络打开可以。与cloudflare速度一般，但是也够用。流量多。