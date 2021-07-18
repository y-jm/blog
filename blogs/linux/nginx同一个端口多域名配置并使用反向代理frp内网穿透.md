---
title: nginx同一个端口多域名配置并使用反向代理frp内网穿透
date: 2020-11-26 17:39:39
tags:
- nginx
---

## 1.简述

使用frp内网穿透,方便项目的调试，主要是```nginx多域名配置、反向代理frp端口```

## 1.配置多域名和反向代理

```shell
 server
{
   listen 80;
    server_name www.baidu.com; #域名配置
    location ~ /* 
{	#反向代理
	proxy_pass http://localhost:7111;
 	proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_intercept_errors on;
}
    
    access_log  /www/wwwlogs/frp.log;
    error_log  /www/wwwlogs/frp.error.log;
}
```

## 2.frps 配置

```shell
#frps.ini
[common]
bind_port = 7100 #跟客户端通信的端口号
vhost_http_port = 7111 #域名访问的端口
# auth token
token = 12345678 #验证的token

dashboard_addr = 0.0.0.0
dashboard_port = 7500

# dashboard user and passwd for basic auth protect, if not set, both default value is admin
dashboard_user = admin
dashboard_pwd = admin
```

## 3.frpc配置

```shell
# frpc.ini
[common]
server_addr = 47.111.111.111 #服务端IP地址
server_port = 7100	#跟服务端bind_port一致
token  = 12345678 #验证的token

[web_test]
type = http #类型
local_ip = 127.0.0.1 #本地
local_port = 80	#端口号
custom_domains = www.baidu.com #服务端域名
```

## 4.后台运行

```bash
nohup ./frps -c frps.ini >/dev/null 2>&1 & 
```

