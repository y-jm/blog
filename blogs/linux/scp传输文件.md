---
title: 使用scp传输文件
date: 2022-06-16 14:47:00
categories:
- linux
---
## 1.上传
```bash
scp mysql.bak.sql root@192.168.128.101:/tmp/ # 传到主机
```
## 2.下载
### 2.1单个下载
```bash
scp "root@192.168.1.128:/usr/tmp/12.cnf" ./
```
### 2.2多个下载
```bash
scp "root@192.168.1.128:/usr/tmp/*.cnf" ./
```