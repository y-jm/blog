---
title: linux查看端口占用
date: 2023-03-13 12:53:09
categories:
- linux
---
1.使用 netstat 命令：

```shell
netstat -tunlp | grep 端口号
```

示例：查看占用 80 端口的进程

```shell
netstat -tunlp | grep :80
```

2.使用 lsof 命令：

```shell
lsof -i :端口号
```

示例：查看占用 80 端口的进程

```shell
lsof -i :80
```