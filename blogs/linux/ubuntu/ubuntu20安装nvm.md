---
title: ubuntu20安装nvm
date: 2021-08-17 19:20:00
categories:
 - linux
tags:
- ubuntu
- nodejs
---

## 1.下载并执行脚本
```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```
## 2.重载环境配置
```bash
source ~/.bashrc
```

## 3.查看版本
执行`nvm --version`看是否打印版本号，打印出版本号则安装成功
```bash
nvm --version
```
## 4.常用命令
```bash
nvm list #查看已经安装的版本
nvm install <version> #安装指定的版本node
nvm use <version> ## 切换使用指定的版本node
nvm uninstall <version> #卸载指定版本的nodejs
```