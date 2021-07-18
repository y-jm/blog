---
title: VMware 虚拟机扩充硬盘空间
date: 2021-07-18 23:53
categories:
 - linux
tags:
 - VMware
 - 虚拟机
---

## VMware 扩展磁盘容量

## 1.虚拟机设置

先关闭虚拟机，右键虚拟机设置，选择扩展，如果不关闭，则如下，无法点击扩展按钮，点击提示有快照就需要把快照删除

![](https://19-blog.oss-cn-shenzhen.aliyuncs.com/20210701160612.png)

## 2.虚拟机操作

启动VMware环境下的Linux操作系统,需要root账号身份登陆

```bash
[root@localhost ~]# fdisk -l
```

显示现在只有两个分区，说明新创建的分区是sda3

![](https://19-blog.oss-cn-shenzhen.aliyuncs.com/20210701160846.png)

### 2.1 管理sda磁盘

输入 `fdisk /dev/sda`

输入命令【n】添加新分区。

输入命令【p】创建主分区。

输入【回车】，选择默认大小，这样不浪费空间

输入【回车】，选择默认的start cylinder。

输入【w】，保持修改

```bash
[root@localhost ~]# fdisk /dev/sda
欢迎使用 fdisk (util-linux 2.23.2)。

更改将停留在内存中，直到您决定将更改写入磁盘。
使用写入命令前请三思。


命令(输入 m 获取帮助)：
```

接着进行重启，必须进行重启，否则无法格式化分区sda4

## 3.添加新LVM到已有的LVM组，实现卷扩容

```bash
lvm　　　　　　　　　　　　           #进入lvm管理

lvm>pvcreate /dev/sda3　　           #这是初始化刚才的分区4

lvm>vgextend centos /dev/sda3     #将初始化过的分区加入到虚拟卷组centos (卷和卷组的命令可以通过 vgdisplay )

lvm>vgdisplay -v或者vgdisplay查看free PE /Site

lvm>lvextend -l+1279 /dev/mapper/centos-root　　#扩展已有卷的容量（1279 是通过vgdisplay查看free PE /Site的大小）

lvm>pvdisplay #查看卷容量，这时你会看到一个很大的卷了

lvm>quit 　#退出
```

## 4.文件系统的扩容

以上只是做成了卷扩容，接下来做文件系统的真正扩容
centos7执行
`xfs_growfs /dev/mapper/centos-root`
centos6执行
`resize2fs /dev/mapper/centos-root`
/dev/mapper/centos-root是执行df -h时根目录的挂载点。
然后`df -h`查看磁盘空间

原文链接：https://blog.csdn.net/qq_44297579/article/details/107318096