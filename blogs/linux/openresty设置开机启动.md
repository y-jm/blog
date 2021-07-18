---
title: openresty设置开机启动
date: 2020-02-24 13:21:48
categories:
- nginx
tags: 
- openresty
---

## 1. 在系统服务目录里创建nginx.service文件

```shell
vim /lib/systemd/system/nginx.service
```

内容如下

```shell
[Unit]
Description=nginx
After=network.target
  
[Service]
Type=forking
ExecStart=/usr/local/openresty/nginx/sbin/nginx
ExecReload=/usr/local/openresty/nginx/sbin/nginx -s reload
ExecStop=/usr/local/openresty/nginx/sbin/nginx -s quit
PrivateTmp=true
  
[Install]
WantedBy=multi-user.target
```

[Unit]: 服务的说明

Description:描述服务
After:描述服务类别
[Service]服务运行参数的设置
Type=forking是后台运行的形式
ExecStart为服务的具体运行命令
ExecReload为重启命令
ExecStop为停止命令
PrivateTmp=True表示给服务分配独立的临时空间
注意：[Service]的启动、重启、停止命令全部要求使用绝对路径
[Install]运行级别下服务安装的相关设置，可设置为多用户，即系统运行级别为3

保存退出。

## 2.设置开机启动

```shell
systemctl enable nginx.service
```

## 3.其他命令

启动nginx服务

``` shell
systemctl start nginx.service
```

停止开机自启动

``` sh
systemctl disable nginx.service
```

查看服务当前状态

``` shell
systemctl status nginx.service
```

重新启动服务

```shell
systemctl restart nginx.service　
```

查看所有已启动的服务

``` shell
systemctl list-units --type=service
```

