
---
title: frp,ngrok搭配shadowsocks内网穿透与RPD远程桌面
tags: 内网穿透
---

内网穿透可以让我们在外网访问校内网资源，相当于一个非官方的vpn


<!--more--> 
## 一.frp

### 1.需要一台外网服务器，可以购买阿里云，腾讯云，华为云等

### 安装设置
参考官方文件：
[https://github.com/fatedier/frp/blob/master/README_zh.md](https://github.com/fatedier/frp/blob/master/README_zh.md) 

总之就是：
外网服务器运行：frps，设置frps.ini
内网服务器运行：frc，设置frpc.ini

### 多客户端设置frpc.ini

```
[common]
server_addr = 外网ip
server_port = 7000
log_file = /data1/Public/Software/frpc.log
log_level = info
log_max_days = 3

[ssh_$servername]  
type = tcp
local_ip = 127.0.0.1
local_port = 22
remote_port = 外网端口

;windows使用3389端口可以做成内网，使用windows RDP远程桌面功能
[rpd_7002]
type = tcp
local_port = 3389
local_ip = 127.0.0.1
use_encryption = true
use_gzip = false
pool_count = 10
remote_port = 外网端口

```

主要在于同一个内网机器的中括号名字不能一样；
不同内网机器：端口号remote_port需要不一样

### run

提交到后台

```
nohup ./frpc -c ./frpc.ini &
```

### 访问ssh：命令登录或xshell访问
```
ssh -oPort=[ssh port]  username@ip
```

### RDP远程桌面
被远程电脑需要设置为可被远程
<div align=center>![avatar](/uploads/frp/4.png)
<div align=center>![avatar](/uploads/frp/5.png)


## shadowsocks隧道设置
如果觉得每台机器都要分别设置太麻烦，可以使用shadowsocks进行统一接管；
### 1.同上，内网机器，安装frpc

frpc.ini
```
;开启SSH
[ssh]
type = tcp
local_ip = 127.0.0.1
local_port = 22
remote_port = 外网端口

;开启SSR,名字不能重复
[SSR]
type = tcp
;本地的对接端口,可以改
local_port = 外网端口
;服务器的对接端口,可以改
remote_port = 外网端口
;服务器的对接IP
custom_domains = 填入ip

```

### 2内网机器安装shadowsocks服务端
#### 1)windows版本
下载编译好的，如shadowsocks-libqss-v2.0.2-win64.7z
[https://github.com/shadowsocks/libQtShadowsocks/releases](https://github.com/shadowsocks/libQtShadowsocks/releases)

解压后，在目录下创建config.json：
server_port与frpc设置一样

```
{ 
  "server":"0.0.0.0",
  "server_port":外网端口, 
  "local_address":"127.0.0.1", 
  "local_port":1080, 
  "password":"mimamima",
  "timeout":600, 
  "method":"aes-256-cfb", 
  "auth": false
}
```

目录下创建启动脚本start.bat:
```
@echo off
Shadowsocks-libqss -c config.json -S
```
#### 2)linux(centos)版本



##### C++版本：
```
cd /etc/yum.repos.d/
curl -O https://copr.fedorainfracloud.org/coprs/librehat/shadowsocks/repo/epel-7/librehat-shadowsocks-epel-7.repo

yum install shadowsocks-libev

```
修改配置文件：/etc/shadowsocks-libev/config.json

使用命令systemctl enable shadowsocks-libev将ss加入开机启动，
之后执行systemctl start shadowsocks-libev启动。
命令systemctl status shadowsocks-libev可以查看ss服务的状态。

参考：[centOS上安装shadowsocks server](https://www.wisedream.net/2017/12/06/tricks/deploy-ss-in-centos/)



##### python版本：

pip install shadowsocks安装；
然后vi /etc/shadowsocks.json编辑ss配置文件
通过which ssserver查找ssserver位置，运行指令：
```
ssserver -c /etc/shadowsocks.json
```
运行如果报EVP_CIPHER_CTX_cleanup错误，则需要修改dist-packages/shadowsocks/crypto/openssl.py这个文件里的 cleanup 替换为reset.参考：[shadowsocks2.8.2启动报未定义符号：EVP_CIPHER_CTX_cleanup错误](ttps://www.iteye.com/blog/haohetao-2423078)
然后可以放到开机自启命令中，参考[https://www.4spaces.org/install-shadowsocks-on-centos-7/](https://www.4spaces.org/install-shadowsocks-on-centos-7/)

#### 防火墙记得开放端口！

### 3.需要操作的电脑装shadowsocks客户端



#### ss客户端：
[在CENTOS 7上建造Shadowsocks图文教程](https://github.com/shadowsocks/shadowsocks-windows/releases)
<div align=center>![avatar](/uploads/frp/1.png)
ip填入frpc的公网IP地址，其它按照json配置填写。

ssr开启全局模式，同时如果要访问192.*，127.*这些网址，需要去掉ss规则里面:user.rule文件最后，删除对应行
同时，如果内网机器有其它代理软件也要去除绕过局域网的规则

#### clash客户端:
<div align=center>![avatar](/uploads/frp/1.1.png)

点击General的Genaral YML，编辑配置文件去除绕过局域网的规则
<div align=center>![avatar](/uploads/frp/2.png)

如果不想全局模式，则可以使用clash分流：
具体使用教程参考另外一篇博客：Clash各版本(win,mac,linux)使用教程(增加规则,搭配Proxy SwitchyOmega)：  http://hongwan.xyz/2019/11/28/clash%E4%BD%BF%E7%94%A8%E6%95%99%E7%A8%8B(%E6%90%AD%E9%85%8DProxy%20SwitchyOmega)/#more


### 使用xshell连接服务器，需要设置代理：
<div align=center>![avatar](/uploads/frp/3.png)
clash的socks5端口为7891





参考文章：[https://github.com/shadowsocks/libQtShadowsocks/releases](https://github.com/shadowsocks/libQtShadowsocks/releases)

与[http://baijiahao.baidu.com/s?id=1657652322074739908](http://baijiahao.baidu.com/s?id=1657652322074739908)





##  二.小米球ngrok
如果没有云服务器，那就用别人的了
官方的ngrok 服务器在国外，卡；小米球ngrok 在国内，速度比官方好点，可以用于做内网网站的演示

官方的[https://ngrok.com/](https://ngrok.com/)也很简单：解压--设置authtoken--运行 

### 官网：http://ngrok.ciqiuwl.cn/

#### 1. 注册得到token
#### 2. 下载文件，填入token
#### 3.运行

第一次运行查看分配的端口
```
./ngrok -config ngrok.conf -log=ngrok.log start  sshtun httptun
```

提交ngrok到后台：
** 使用nohup ** 
需要添加-log=stdout,这样屏幕才不会输入
```
nohup ./ngrok -config=ngrok.conf -log=stdout start  sshtun httptun  &
```

** 使用screen ** 

先输入
```
sudo screen -S ngrok 
```
( -S后面的名字可以随便取)
然后输入
```
./ngrok -config ngrok.conf -log=ngrok.log start  sshtun httptun
```

最后按快捷键
ctrl+A+D
