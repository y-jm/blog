---
title: centos挂载u盘
date: 2021-07-18 23:49
categories:
 - linux
tags:
 - centos
---

## 1.挂载

1. 首先使用命令：`fdisk -l`，查看系统硬盘和分区情况。
2. 插入U盘，再次用`fdisk -l`命令查看，并确认自己的U盘。此时系统中多了一个硬盘/dev/sdb和它的一个分区/dev/sdb1
3. 使用命令：`mkdir -p /mnt/usb`，在mnt目录下创建目录usb来作挂接点。
4. 挂载U盘，使用命令：`mount -o iocharset=cp936 /dev/sdb1 /mnt/usb`
   其中，-o iocharset是设定字符集，保证能够正常显示中文
5. 成功挂载后，可以使用命令：`ls /mnt/usb`进行查看U盘中的内容。

## 2.解除挂载

```shell
umount /dev/sdb1
```

**挂载不成功的解决办法**

1. 当挂载不成功时，如出现如下报错的提示：
```shell
mount: 未知的文件系统类型“ntfs”
```
2. 因ntfs不是Linux的文件系类型，我们可安装一个工具包：ntfs-3g。
3. ntfs-3g下载时注意按照自己的系统版本软件架构下载对应的二进制RPM包，以免安装完了，挂载出错。
4. 将安装包上传到系统中，只需： yum -y install ntfs-3g-2017.3.23-6.el7.x86_64.rpm 一条命令就安装好了；然后再按照上面的步骤就可以成功挂载到U盘了