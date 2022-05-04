---
title: iptable安装
date: 2021-07-18 23:45
categories:
 - linux
tags:
 - iptable
 - centos
---

## iptable安装

CentOS7 默认使用firewalld防火墙，如果想换回iptables防火墙，可关闭firewalld并安装iptables。

### 关闭firewall

```bash
systemctl stop firewalld.service
systemctl disable firewalld.service
```

### 查看默认防火墙状态（关闭后显示not running，开启后显示running）

```bash
firewall-cmd --state
```

### 开始安装iptables-services

```bash
yum install iptables-services
```

## 修改防火墙配置文件

```bash
vi /etc/sysconfig/iptables 
```

### 添加8080端口

![image-20210617150854676](http://img.xiyangyang.cc/blog/image-20210617150854676.png)

## 重启防火墙使配置生效

```
systemctl restart iptables.service
```

### 设置防火墙开机启动

```bash
systemctl enable iptables.service
```

### 问题

如果使用docker的话，重启防火墙，需要重启docker
