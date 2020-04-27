---
title: 如何在搬瓦工KVM上安装影梭和锐速
tags: 翻墙
---

目前不建议自己搭建了，自用稳定高速机场推荐：https://hongwan.xyz/2019/08/30/%E7%A7%91%E5%AD%A6%E4%B8%8A%E7%BD%91%E6%96%B9%E6%B3%95%E6%B1%87%E6%80%BB(%E5%85%8D%E8%B4%B9%E4%B8%8E%E4%BB%98%E8%B4%B9)/#more


搬瓦工购买:https://bandwagonhost.com/aff.php?aff=34663
vultr：https://www.vultr.com/?ref=7277683

<!--more--> 
偶尔需要重装搬瓦工的vps,搭建ss,部分指令备份；

### 注意：BBR或锐速安装其中一个就可以了，同时安装效果不会叠加。

# 一、系统重装
	### 1. 登录KiwiVM后台，选择Main control栏，点击STOP关掉VPS。
  <div align=center>![avatar](/uploads/banwagong/rs1.png)

	### 2. 选择Install new OS栏，选择centos-6-x86_64后点击reload重装系统。
    <div align=center>![avatar](/uploads/banwagong/rs2.jpg)

	### 3. 记下root密码及ssh端口号。
    <div align=center>![avatar](/uploads/banwagong/rs3.png)

	### 4. 下载XShell并登录，xshell是你在自己电脑上用来控制vps的工具。
  #### (1) XShell5下载：windows版: http://rj.baidu.com/soft/detail/15201.html?aldMac安装方法: http://www.linuxidc.com/Linux/2015-04/116463.htm
  
  #### (2) 安装完新建会话属性，点击连接，填入该VPS的IP和刚才记下的ssh端口号。

<div align=center>![avatar](/uploads/banwagong/rs4.jpg)

  #### (3) 点击用户身份验证，用户名为root,密码为刚才记下的密码。
  
  <div align=center>![avatar](/uploads/banwagong/rs5.jpg)

  #### （4）填好后就可以连接服务器了，看到下面代码出现时就说明连接成功了，在它后面复制粘贴代码并回车，服务器就可以执行你的命令。[root@localhost ~]#Tips1：用鼠标粘贴，不要用键盘，粘贴错了，可以按ctrl+U清除，如果要输入什么东西，注意切换成英文输入。Tips2：要一行一行复制粘贴代码并回车。意思就是复制粘贴回车一行代码后，看到服务器执行完命令，又看到[root@localhost ~]#，才能再复制粘贴代码并回车下一行代码。

# 二、更换系统内核
	### 1. SSH连接搬瓦工KVM后，将内核更换为2.6.32-504.3.3.el6.x86_64。先粘贴回车以下代码：
  
```
  rpm -ivh http://soft.91yun.org/ISO/Linux/CentOS/kernel/kernel-firmware-2.6.32-504.3.3.el6.noarch.rpm
```


  然后再粘贴回车以下代码：

```
  rpm -ivh http://soft.91yun.org/ISO/Linux/CentOS/kernel/kernel-2.6.32-504.3.3.el6.x86_64.rpm --force --nodeps
```

  ### 2. 输入以下代码查看内核是否安装成功。

  ```
  rpm -qa | grep kernel
  ```

  显示的信息中包含kernel-2.6.32-504.3.3.el6.x86_64即为成功。

	### 3. 输入以下代码重启VPS

  ```
  reboot
  ```

	### 4. 重新连接后输入以下代码查看内核。

  ```
  uname -r
  ```

  显示为kernel-2.6.32-504.3.3.el6.x86_64即为成功。

# 三、安装锐速
	### 1. 首先需要安装wget

  ```yum install wget
  ```

	### 2. 复制粘贴下面全部代码：

  ```
  wget --no-check-certificate -O appex.sh https://raw.githubusercontent.com/0oVicero0/serverSpeeser_Install/master/appex.sh && chmod +x appex.sh && bash appex.sh install
  ```


# 四、安装shadowsocks
	### 1. 下拉页面到左下角可以看到shadowsocks server，点进去一键安装。

  <div align=center>![avatar](/uploads/banwagong/rs6.jpg)

	### 2. 安装后页面会显示密码类型（encryption），影梭端口（port），密码（password）等信息，可以在各种设备上填入使用了。
  
  <div align=center>![avatar](/uploads/banwagong/rs7.png)


