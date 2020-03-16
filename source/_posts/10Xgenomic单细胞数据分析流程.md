---
title: 10Xgenomic单细胞数据分析流程
tags: 生信
---

10Xgenomic单细胞数据分析流程整理，虽然官网已经很详细，但是还是备份下



<!--more--> 
# 一、bcl2转fastq

安装 bcl2fastq，cellranger

下载bcl2fastq https://support.illumina.com/sequencing/sequencing_software/bcl2fastq-conversion-software/documentation.html

#### 解压：
```
unzip bcl2fastq2-v2-20-0-linux-x86-64.zip
rpm -ivh bcl2fastq2-v2.20.0.422-Linux-x86_64.rpm
```
####  mkfastq 转格式：
```
cellranger mkfastq --id=tiny-bcl2(结果目录命名) --run=/disk/zhw/zuo/10xGenomic/cellRanger/example/cellranger-tiny-bcl-1.2.0(解压目录) --csv=cellranger-tiny-bcl-simple-1.2.0.csv (输入文件)
```

cellranger-tiny-bcl-simple-1.2.0.csv：
<div align=center>![avatar](/uploads/singlecell/1.1.png)

结果目录：tiny-bcl2：

cellranger-tiny-bcl-simple-1.2.0.csv：
<div align=center>![avatar](/uploads/singlecell/1.2.png)


fastq结果：


# 二、fastq分析

```
/disk/soft/cellranger-2.1.0/cellranger count --id=sample34(结果文件夹命名) --transcriptome=/disk/database/10xgenomic/refdata-cellranger-GRCh38-1.2.0（referent文件夹目录） --fastqs=/disk/zhw/zuo/10xGenomic/cellRanger/example/tiny-bcl2/outs/fastq_path(fastq文件目录) --sample=test_sample(可选，指定哪些样本的前缀) --expect-cells=1000 (期望回收细胞数量）
```
--chemistry threeprime （）


```
cellranger count --id=SC-3_mm10 --localcores=20 --transcriptome=/disk/database/10xgenomic/refdata-cellranger-mm10-1.2.0 --fastqs=/disk/zhw/zhou/Zhou_10XGenomic_1801/0-FASTQ/SC-3 --chemistry threeprime
```
```
cellranger count --id=neurons --localcores 5 --transcriptome=/disk/database/10xgenomic/refdata-cellranger-mm10-1.2.0 --fastqs=/disk/zhw/zhou/Zhou_10XGenomic_1801/test --expect-cells=900
```

```
/disk/soft/cellranger-2.1.0/cellranger count --id=SC-3-count --transcriptome=/disk/database/10xgenomic/refdata-cellranger-GRCh38-1.2.0 --fastqs=/disk/zhw/zhou/Zhou_10XGenomic_1801/0-FASTQ/SC-3 --sample=SC-3（fastq前缀）
```

--sample：
cellranger-tiny-bcl-simple-1.2.0.csv：
<div align=center>![avatar](/uploads/singlecell/2.1.png)
<div align=center>![avatar](/uploads/singlecell/2.2.png)

sample34/outs，web_summary.html为网页结果。
<div align=center>![avatar](/uploads/singlecell/2.3.png)

<div align=center>![avatar](/uploads/singlecell/2.4.png)

<div align=center>![avatar](/uploads/singlecell/2.5.png)





filtered_gene_bc_matrices为稀疏矩阵，转可以为普通矩阵

# 三、 再分析reanalyze
```
cellranger reanalyze --id=SC-4 --matrix=/disk/zhw/zhou/Zhou_10XGenomic_1801/2_cellranger_count/SC-4-count-mm10/outs/filtered_gene_bc_matrices_h5.h5
```
<div align=center>![avatar](/uploads/singlecell/3.1.png)

<div align=center>![avatar](/uploads/singlecell/3.2.png)

<div align=center>![avatar](/uploads/singlecell/3.3.png)

<div align=center>![avatar](/uploads/singlecell/3.4.png)

# 四、 cellrangerRkit R包第二步分析


稀疏矩阵转为密集矩阵：
````
pbmc.data_SC4 <- Read10X(data.dir = "/disk/zhw/zhou/Zhou_10XGenomic_1801/1-MAPPING/sample_SC-4/outs/filtered_gene_bc_matrices/mm10")
pbmc.data_SC4=as.matrix(pbmc.data_SC4)
SC4_full_matrix=pbmc.data_SC4
save(SC4_full_matrix,file="/disk/zhw/zhou/Zhou_10XGenomic_1801/5-RCA/SC4_full_matrix.Rdata")
````


#### 第一步cellranger mkfastq分析之后第二步分析，主要是tsne,PCA,k-means聚类,差异表达分析和热图

cellrangerRkit



# 五、R包Seurat分析

参考生信技能树的这篇文章：

[https://mp.weixin.qq.com/s?__biz=MzAxMDkxODM1Ng==&mid=2247485844&idx=1&sn=5341e1dd7d08d9e061747b3d0731e6e8&chksm=9b48492fac3fc0394ebc6869f582914916073bac03cdb0ba24ef574e52eb7d1a407d54219bee&scene=0#rd](https://mp.weixin.qq.com/s?__biz=MzAxMDkxODM1Ng==&mid=2247485844&idx=1&sn=5341e1dd7d08d9e061747b3d0731e6e8&chksm=9b48492fac3fc0394ebc6869f582914916073bac03cdb0ba24ef574e52eb7d1a407d54219bee&scene=0#rd)

# 六、建reference

如果不想用官方的ref,可以自己建立
需要提供fa文件和gtf文件
不可以直接改
需要用cellrager

单个物种：
```
cellranger mkref --nthreads=40 --genome=ref-mm10-hg38-HBB2 --fasta=/disk/database/10xgenomic/mm10-hg38-HBB-data/fasta/genome_mm10_humanHBB.fa --genes=/disk/database/10xgenomic/mm10-hg38-HBB-data/genes/gene.gtf
```
两个物种：
```
cellranger mkref --genome=hg38  --fasta=/disk/database/mouse/UCSC-mm10/mm10.fa --genes=/disk/database/mouse/gencode.vM10.annotation.gtf  --genome=mm10 --fasta=/disk/database/human/hg38/Gencode/genome.fa --genes=/disk/database/human/hg38/Gencode/gencode.v25.annotation.gtf
```
