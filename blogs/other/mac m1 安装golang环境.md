---
title: mac m1 安装golang环境
date: 2022-04-03 22:18:28
tags:
- golang
- mac
---

## 1.安装包下载
下载地址: https://golang.google.cn/dl/,下载下图选中的安装包

![](http://img.xiyangyang.cc/blog/%E6%88%AA%E5%B1%8F2022-04-03%20%E4%B8%8B%E5%8D%8810.26.25.png)

**安装**

打开下载的go1.18.darwin-arm64.pkg 双击打开，然后一路继续

## 2.配置环境
使用vim编辑配置信息
```shell
vim ~/.zshrc
```
增加golang配置
```ini
export GOBIN=/usr/local/go/bin
export PATH=$PATH:$GOBIN
```

对配置文件执行`source`让新修改的配置文件生效
```shell
source ~/.zshrc
````
使用`go version`,查看是否安装配置成功，成功如下：
```shell
➜  ~ go version
go version go1.18 darwin/arm64
```

## 3.卸载golang
```shell
sudo rm -rf /usr/local/go
sudo rm /etc/paths.d/go
```
