
---
title: 使用vultr搭建shadowsocks教程
tags: 翻墙
---

目前不建议自己搭建了，自用稳定高速机场推荐：https://hongwan.xyz/2019/08/30/%E7%A7%91%E5%AD%A6%E4%B8%8A%E7%BD%91%E6%96%B9%E6%B3%95%E6%B1%87%E6%80%BB(%E5%85%8D%E8%B4%B9%E4%B8%8E%E4%BB%98%E8%B4%B9)/#more

搬瓦工购买:https://bandwagonhost.com/aff.php?aff=34663
vultr：https://www.vultr.com/?ref=7277683

<!--more--> 

上篇文章已经有如何使用谷歌的简单教程： 谷歌访问助手插件 或者 蓝_灯这个软件，但是如果喜欢折腾，可以自己动手搭建；网上已经有大把教程，但是我有时候换一次就得搜一次，比较麻烦，写下来备份；

主要是三步：
**租国外vps-安装shadowsocks-加速-电脑客户端配置**



### 租国外vps

目前比较常用的是搬瓦工和vultr，都用过，搬瓦工（https://bandwagonhost.com/）简单很多甚至不需要命令行操作；后面换主机再写吧；
现在主要写vultr的，按使用时长收费，但是这两天发现很多ip 登录不上，非常惨；昨天发现2.5刀的没有了，5美刀/月起步；

首先测试不同主机地址速度：
http://www.vultrkvm.com/test-vultr-speed/



下载第三列文件查看各个地址下载速度如何；
以及ping 第二列地址查看丢包情况：



我这里选择日本的节点


购买

先去注册https://www.vultr.com/，然后选择billing页面充值，支持支付宝！选择Alipay，


选择servers页面——右上角Deploy New Server

选择主机地址——系统选择centOS 6——选择价格，不同内存和硬盘，价格不同，一般最小的也够用；——Deploy Now,等待系统安装,显示为running表示安装成功；



系统安装完成后会有邮件
如图，点击进入：

查看服务器账号密码：

----------

### 安装shadowsocks

推荐使用xshell，点击：文件-新建-输入主机ip-确定-输入用户名-确定-密码-确定，还不会登录的百度下；


ss安装指令:

```
wget --no-check-certificate https://raw.githubusercontent.com/teddysun/shadowsocks_install/master/shadowsocks.sh
chmod +x shadowsocks.sh
./shadowsocks.sh 2>&1 | tee shadowsocks.log
```

设置密码，端口和加密方式，后两个可以回车选择默认跳过




然后按回车开始安装
安装成功页面：


----------

### 内核更换：
CentOS6内核更换为：2.6.32-504.3.3.el6.x86_64
```
rpm -ivh http://soft.91yun.org/ISO/Linux/CentOS/kernel/kernel-firmware-2.6.32-504.3.3.el6.noarch.rpm
rpm -ivh http://soft.91yun.org/ISO/Linux/CentOS/kernel/kernel-2.6.32-504.3.3.el6.x86_64.rpm --force
reboot
```
重启后重新连接

### 安装锐速加速
```
wget -N --no-check-certificate https://raw.githubusercontent.com/91yun/serverspeeder/master/serverspeeder-all.sh && bash serverspeeder-all.sh
```
成功页面：

----------

### 电脑客户端配置
下载：
Windows版：https://github.com/shadowsocks/shadowsocks-windows/releases
苹果mac os版：https://github.com/shadowsocks/ShadowsocksX-NG/releases/

请填入对应的ip、端口、密码、加密方式等；

右键ss图标:选择PAC模式；



# 恭喜开眼看世界


更多详细文章参考：
[自己搭建ss/ssr服务器教程（很详细，适合初学者）](https://github.com/getlantern/forum/issues/5620)

[科学上网的终极姿势-在-vultr-vps-上搭建-shadowsocks](https://medium.com/@zoomyale/%E7%A7%91%E5%AD%A6%E4%B8%8A%E7%BD%91%E7%9A%84%E7%BB%88%E6%9E%81%E5%A7%BF%E5%8A%BF-%E5%9C%A8-vultr-vps-%E4%B8%8A%E6%90%AD%E5%BB%BA-shadowsocks-fd57c807d97e)







