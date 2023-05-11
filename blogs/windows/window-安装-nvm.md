---
title: window 安装 nvm
date: 2021-02-02
categories: windows
tags: nodejs
---

## 1.下载

从https://github.com/coreybutler/nvm-windows/releases下载nvm-setup.zip安装包版本（如下图）

![](https://img.xiyangyang.cc/blog/20210309095944.png)

## 2. 安装

打开exe之后，一路点击Next下一步，只到如下图，选择nvm安装目录，第二张图是选择node的安装目录

![](https://img.xiyangyang.cc/blog/20210309100010.png)

![](https://img.xiyangyang.cc/blog/20210309100050.png)

## 3.设置镜像

由于国外下载很慢，所以需要设置国内镜像下载，在settings.txt 文件中追加下面两行代码，效果如下图

` node_mirror:npm.taobao.org/mirrors/node/`
`npm_mirror:npm.taobao.org/mirrors/npm/`

![](https://img.xiyangyang.cc/blog/20210309100113.png)

## 4. 常用命令

```shell
nvm list　　//查看目前已经安装的版本
nvm list available //显示可下载版本的部分列表
nvm install 10.15.0 //安装指定的版本的nodejs
nvm use 10.15.0 //使用指定版本的nodejs
npm install -g cnpm --registry=https://registry.npm.taobao.org  //使用淘宝镜像
```

