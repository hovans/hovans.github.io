---
title: NFC模拟门禁
tags: NFC
---

NFC模拟门禁卡，只是提供技术教程，请不要用于违法犯罪行为！

需要事先购买ACR122U,读卡和写卡也可以使用有NFC功能的手机：使用软件Mifare clasic tools这个软件读取和写入卡；
前面部分可以自己购买UID空白卡，读取破解出卡的信息之后直接写入空白卡就可以；
只是写入小米手环麻烦点，因为目前小米手环和小米手机的门禁卡模拟功能，不支持直接模拟加密卡，因此需要先模拟未加密的卡，需要先读取出需要模拟的卡数据，清除加密的数据，变成未加密的，然后使用小米手环三NFC版模拟；再写入加密数据；


<!--more--> 

  <div align=center>![avatar](/uploads/menjin/1.png)


### 1.先使用破解软件读卡，放入卡片，点击开始破解，得到dump文件，为linshika.dump

  <div align=center>![avatar](/uploads/menjin/2.png)
  <div align=center>![avatar](/uploads/menjin/3.png)


### 2. 然后放入UID卡，点击Initial connect ，打开刚才读取的dump文件，记下key,直接点击编辑key改为F，这样制作无密码的dump文件，另存为123.dump

  <div align=center>![avatar](/uploads/menjin/4.png)

### 3.打开写卡工具：放入新的空白卡，UID卡，点击初始化，连接，选择123.Dump文件，写入卡中；从而得到无密码的卡
  <div align=center>![avatar](/uploads/menjin/5.png)


### 4.然后使用小米手环模拟这个未加密的卡；

### 5.使用英文版本的写卡工具：普通卡复制工具.exe，放入手环到写卡工具上，导入一开始用读卡工具读取的要复制的卡的dump文件，linshika.dump，写卡到手环，使用读卡读取手环内文件，看是否与一开始的一样；如果不成功，反复多次写，
  <div align=center>![avatar](/uploads/menjin/6.png)


厂商信息：0块0区后面部分不一样，没有影响；
只需要后面的一样；

但是手环仍然无法读卡开门；
将写入到手环的数据再读取出来写入新的UID卡中，发现可以开门；因此怀疑和读卡设备机器有关；但是数据是已经写入到手环中了的；

部分软件百度网盘链接：
链接: https://pan.baidu.com/s/1G58728J0lU3mNdYT2riUhQ 提取码: b9hr 