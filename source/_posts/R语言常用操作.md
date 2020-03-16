---
title: R语言常用操作
tags: R
---

R语言常用操作

<!--more--> 

### 按照样本排序
```
colName= factor(colnames(mydata),levels=NMF_cluster[,1])
mydata<-mydata[,order(colName)]  #按照不同类自己排序
```

### 取消科学计数法
options(scipen=3)

### 保存文件为pdf,png


#### png格式
```
options(bitmapType = "cairo")
png(file="myplot.png", bg="transparent")
dev.off()
```

#### jpeg格式
```
jpeg(file="myplot.jpeg")
dev.off()
```

#### pdf格式
```
pdf(file="myplot.pdf")
dev.off()
```

### 清空变量
```
rm(list=ls())
```
### 分割 
```
strsplit(x，split,fixed=F)
```
### 提取替换
```
substr(x,start,stop)
```
### 
###搜索
```
grep()fixed=T，正则
```
###连接字符串
```
paste()
```
### linux 脚本传参数

首先需要在file文件中的第一行加入：
```
Args <- commandArgs()
```
然后按照以下格式执行

Rscript *.R 参数1 参数2 ...

在file脚本中，可以引用参数Args，
```
Args[1]= "/usr/local/lib64/R/bin/exec/R"
Args[2]= "--slave"
Args[3]= "--no-restore"
Args[4]="--file=a.r"
Args[5]="--args"
Args[6]==参数1
Args[7]==参数2
```
可见输入的参数从第六个和第七个开始、

### R语言中调用其它R语言
```
source('D:\\R\\heatmap.R')
```

### requrie&library 加载包
```
pack='tsne'
if(require('tsne')){
  print (" package is loaded correctly")
}else{
  print ("trying to install")
  install.packages(tsne)
  if(require('tsne')){
    print("package is install and loaded")
  }else{
    print ("install failed")
    source("http://bioconductor.org/biocLite.R")
    biocLite('tsne')
    if(require('tsne')){
      print("package is install and loaded")
    }else{
      print ("install failed again")
    }
  }
}
```
### 移除NA
```
na.rm=TRUE 
```

### read.table
```
check.names = F   变量名会原封不动的读出来
stringsAsFactors = F  是否字符转化成因子
quote=F  quote用来指定是否为字符型变量添加双引号

fill=T   并且在缺失的地方自动补充了“NA”,
默认：fill=！blank.lines.skip，所以当表中有空白存在，又没有定义fill=T，就不会被读出来。
blank.lines.skip=F，  读出了空白行并且用“NA”填补

header是指定是否原文件是否包含列名, read.table默认值为FALSE
skip=N 从文件第几行开始读入数据
nrows=N 读入的最大行数
```

### 调色
```
library("RColorBrewer")
cluster= brewer.pal(6, "Dark2")
```

### 新建文件夹、判断文件（夹）是否存在
```
dir.create(paste(GSE_name,"_",mygene,"_",log_num,"_",up_down,sep=""))
file.exists(myfile)
```
### 写入excell
```
library(xlsx)    
write.xlsx(x = Enrichment_res, file = "all.xlsx",sheetName =paste("cluster",num,sep = ""),row.names =F,append=TRUE)
```
append可以在同一个文件写入不同的sheet

### 全部注释
ctr+shift+c

### 查看类型

class( )可获取一个数据对象所属的类，它的参数是对象名称。 
str( )可获取数据对象的结构组成，这很有用。 
mode( )和storage.mode( )可获取对象的存储模式。 
typeof( )获取数据的类型或存储模式。 

### lapply sapply apply tapply mapply
 apply : 用于遍历数组中的行或列，并且使用指定函数来对其元素进行处理。
 lapply : 遍历列表向量内的每个元素，并且使用指定函数来对其元素进行处理。返回列表向量。
 sapply : 与lapply基本相同，只是对返回结果进行了简化，返回的是普通的向量。
 mapply: 支持传入两个以上的列表。  
 tapply: 接入参数INDEX，对数据分组进行运算，就和SQL中的by group一样。
 