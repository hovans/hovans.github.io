---
title: GEO和TCGA原始数据下载
tags: 生信
---


# GEO数据下载
如果有GSE号及其GSM号(GSE35156);
就可以根据GEO页面的Relations的SRA得知SRR号

Bystudy已经目录不存在！！！

<!--more--> 

在 [https://www.ncbi.nlm.nih.gov/sra](https://www.ncbi.nlm.nih.gov/sra) 找出GSM对应的SRR号(GSM862720对应SRR443883,SRR443884,SRR443885)
GSM和SRP一般是连续对应的，但可能是一对多



然后我会在GEO原始数据ftp下载链接中查找是否存在：（因为有些数据找不到原始数据）
ftp://ftp.ncbi.nlm.nih.gov/sra/sra-instant/reads/ByRun/sra/SRR/SRR+SRR号前三位+/SRR号/


需要下载的数据就再SRR目录里：
比如 ftp://ftp.ncbi.nlm.nih.gov/sra/sra-instant/reads/ByRun/sra/SRR/SRR443/SRR443883/SRR443883.sra

下载工具选择：
#### Aspera
首选：Aspera,速度最快，但不稳定；
安装和使用参考文章：[https://blog.csdn.net/likelet/article/details/8226368](https://blog.csdn.net/likelet/article/details/8226368)
[https://www.jianshu.com/p/9142911b2e15](https://www.jianshu.com/p/9142911b2e15)
[http://blog.sina.com.cn/s/blog_6465cce70102vyid.html](http://blog.sina.com.cn/s/blog_6465cce70102vyid.html)

下载链接替换：
如：
```
ascp -QT -l 100M -i ~/.aspera/connect/etc/asperaweb_id_dsa.openssh -k 1 -T -l200m anonftp@ftp-private.ncbi.nlm.nih.gov:sra/sra-instant/reads/ByRun/sra/SRR/SRR443/SRR443883/SRR443883.sra ./

```

样本数目多则可以写循环输出到一个shell脚本文件中，一行代码一个样本，这样即使某一个样本中断了也不影响其它样本的下载，再运行这个脚本；
如：
有SRR列表文件：
srrlist.txt

$cat srrlist.txt
SRR2120858
SRR2120859
SRR2120879
SRR2120880
SRR2120881
SRR2120887
SRR2120888


```
#!bin/sh
for k in $(cat $1)
do
	ascp -QT -l 100M -i ~/.aspera/connect/etc/asperaweb_id_dsa.openssh -k 1 -T -l200m anonftp@ftp-private.ncbi.nlm.nih.gov:sra/sra-instant/reads/ByRun/sra/SRR/${k:0:6}/$k/$k.sra ./
done

```
将脚本保存为:ascp.sh

运行：
```
nohup sh ascp.sh srrlist.txt &
```

#### wget
如果单一可以使用wget工具,虽然稳定但是速度慢
如：
```
wget ftp://ftp.ncbi.nlm.nih.gov/sra/sra-instant/reads/ByRun/sra/SRR/SRR443/SRR443883/SRR443883.sra
```


#### prefetch：
如果安装了aspera，并且设置好了环境变量，则会默认调用aspera；

直接prefetch+SRR号

```
prefetch SRR2079363
```

可以参考这篇文章：[https://www.cnblogs.com/ywliao/p/7356528.html](https://www.cnblogs.com/ywliao/p/7356528.html)

不生产文章，只是文章的搬运工

### fastq-dump
下载fastq文件
直接 fastq-dump -O ./ ++SRR号
-O 文件保存目录

```
fastq-dump -O ./ SRR2120881
```


# TCGA 数据下载：

主要是使用gdc-client这官方的工具；
首先下载这软件，然后去TCGA选择需要的数据，并且下载gdc_manifest;

具体教程：[https://blog.csdn.net/qq_35203425/article/details/80882988](https://blog.csdn.net/qq_35203425/article/details/80882988)

如果下载需要权限的需要秘钥token；

然后下载指令：

```
gdc-client.exe download -t gdc-user-token文件  -m  gdc_manifest文件
```

由于下载文件非常大，因此会断：
所以写了个断了之后运行可以检测哪些下载了，哪些没有下载，并且继续下载没有下载的部分的脚步；暂时没有实现自动检测

[https://github.com/honvezhang/TCGAdownload/blob/master/chongqi.py](https://github.com/honvezhang/TCGAdownload/blob/master/chongqi.py)

更改这一句：
```
fuck='gdc-client.exe download -t gdc-user-token.2017-11-21T03_56_43.562Z.txt -m '+downloadfile
```
downloadfile为mainfest文件


数据下载帖子:[http://www.biotrainee.com/thread-1696-1-1.html](http://www.biotrainee.com/thread-1696-1-1.html)