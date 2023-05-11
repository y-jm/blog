---
title: 使用docker搭建kms服务器
date: 2022-09-16
tags:
- kms
- windows
---

## 1.拉取镜像
```bash
sudo docker pull mogeko/vlmcsd 
```

## 2.启动容器
```bash
sudo docker run -d -p 1688:1688 --restart=always --name vlmcsd mogeko/vlmcsd
```
-d 后台运行
-p 指定端口
--restart=always 开机自启
--name 指定容器名

## 3.查看当前Windows是否支持KMS激活
命令提示符（管理员）执行：`slmgr /dlv`
出现的弹窗有“VOLUME”字样就是VOL版，即支持KMS激活
![](https://img.xiyangyang.cc/blog/20220916195220.png)

## 4.指定KMS服务器
`slmgr /skms ip` ip是x.x.x.x的ip地址

## 5.安装密钥
```bash
 slmgr /ipk W269N-WFGWX-YVC9B-4J6C9-T83GX
```
密钥大全地址:https://docs.microsoft.com/zh-cn/windows-server/get-started/kms-client-activation-keys

## 6.立即激活Windows
输入`slmgr /ato`回车，出现成功激活弹窗说明

![](https://img.xiyangyang.cc/blog/WX20220916-140914@2x.png)

## 7.其它slmgr命令

查看激活剩余时间
```bash
slmgr /xpr
```

查看激活的详细信息
```bash
slmgr /dlv
```
> 默认情况下，会激活 180天，然后每 10080 分钟自动续期一次（只要KMS服务器可用）



