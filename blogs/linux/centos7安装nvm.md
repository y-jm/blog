---
title: Centos7安装nvm
date: 2021-08-17 19:16:11
categories:
 - linux
tags:
- nodejs
---

### 1.使用镜像源

由于官方源下载太慢，使用镜像源
```bash
git clone https://gitee.com/abeir/nvm.git
```
验证安装
```bash
command -v nvm
```
设置nvm自动运行
```bash
echo "source ~/nvm/nvm.sh" >> ~/.bashrc
source ~/.bashrc
```
查询Node.js版本

```bash
nvm list-remote
```
### 2.安装nodejs
```bash
nvm install v12.0.0
```
切换版本
```bash
nvm use v8.6.0
```