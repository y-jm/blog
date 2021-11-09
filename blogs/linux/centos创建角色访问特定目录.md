---
title: centos创建角色访问特定目录
date: 2021-11-08 20:49
categories:
 - linux
tags:
 - centos
---
## 1.新建用户

使用`useradd`创建一个qq账号

```shell
useradd qq
```

## 2.设置用户密码

```shell
passwd qq
```

## 3.禁止用户SSH登录

```shell
usermod -s /bin/false qq
```

## 4.修改登入目录

设置默认进入目录

```bash
usermod -d /usr/local/web qq
```

## 5.赋某个文件夹操作的权限

```bash
chown -R qq /usr/local/web/html
chmod -R 775 /usr/local/web/html
```

