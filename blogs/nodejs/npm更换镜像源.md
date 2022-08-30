---
title: npm更换镜像源
date: 2022-08-29 23:15
categories:
 - nodejs
tags:
 - npm
---
## 1.查看镜像源
```bash
npm config get registry
```
## 2.更换镜像源
更换镜像源有两个方法，更改配置文件，或者使用nrm
### 2.更改npm配置文件
```bash
npm config set registry https://registry.npmmirror.com
```
### 3.nrm切换镜像
#### 1.安装
```bash
npm install -g nrm
```
#### 2.查看镜像源
```bash
nrm ls
```
#### 3.切换
```bash
nrm use taobao
```
