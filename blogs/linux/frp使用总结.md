---
title: frp使用总结
date: 2021-06-11 09:41:10
tags:
- frp
- centos
- windows
---

## 简述

使用frp内网穿透,方便本地项目的开发和测试，使用frp的前提条件必需要有一个公网服务器

## 下载

在[releases](https://github.com/fatedier/frp/releases)下载对应的系统版本，如果你的系统是window版本就下载window版本，linux版本就下载linux版本

## 在公网服务器配置frps

### 解压

使用tar -zxvf 解压

```shell
[root@localhost ~]# tar -zxvf frp_0.33.0_linux_amd64.tar.gz
```

### frps.ini 配置

`local_ip` 和 `local_port` 配置为本地需要暴露到公网的服务地址和端口。`remote_port` 表示在 frp 服务端监听的端口，访问此端口的流量将会被转发到本地服务对应的端口

```bash
#基础配置
[common]
bind_port = 7100 #跟客户端通信的端口号
vhost_http_port = 7111 #域名访问的端口 可通过nginx 80 代理 7111,这样域名后面就不用加端口号了
# auth token
token = 12345678 #验证的token


#设置dashboard可远程通过页面观看frp运行请求（可以不用配置这个）
dashboard_addr = 0.0.0.0 #访问地址
dashboard_port = 7500 #访问端口
dashboard_user = admin #访问账号
dashboard_pwd = admin #访问密码
```

### 运行

```bash
[root@localhost ~]#  ./frps -c frps.ini
```

如果运行起来没有问题，可以通过nohup在后台访问，这样就不需要开一个终端专门运行它

**有nohup.out文件**

```sh
[root@localhost ~]# nohup ./frps -c frps.ini  &
```

**没有nohup.out文件**

```shell
[root@localhost ~]# nohup ./frps -c frps.ini >/dev/null 2>&1 &
```

### 停止

通过 `ps -aux|grep frp| grep -v grep`找出进程ID，然后使用 kill -9  杀死进程

![](http://img.xiyangyang.cc/blog/20210611095125.png)

```sh
[root@localhost ~]# ps -aux|grep frp| grep -v grep
[root@localhost ~]# kill -9 6720
```

## 本地配置frpc

在window下直接使用解压工具解压到本地，如果是在linux就需要使用**tar**命令进行解压

### frpc.ini 配置

`local_ip` 和 `local_port` 配置为本地需要暴露到公网的服务地址和端口。`remote_port` 表示在 frp 服务端监听的端口，访问此端口的流量将会被转发到本地服务对应的端口，`custom_domains`配置可通过域名访问到本地服务

```SH
# frpc.ini
[common]
server_addr = 47.111.111.111 #运行frps公网服务器的IP
server_port = 7100	#和frps.ini bind_port 一致
token  = 12345678 #和frps.ini 的 token 一致

# 配置web服务
[web_test] #运行的名称，可以随便起
type = http #类型   
local_ip = 127.0.0.1 #本地
local_port = 80	#端口号
custom_domains = www.baidu.com #运行frps公网服务器的域名
```

### 运行

### window 运行

```shell
D:\frp_0.33.0_windows_386>.\frpc.exe -c frpc.ini
```

### linux运行

```sh
[root@localhost ~]# ./frpc -c frpc.ini
```

## 设置window 开机启动

### 打开任务计划程序

![](http://img.xiyangyang.cc/blog/20210611102040.png)

### 创建任务

![](http://img.xiyangyang.cc/blog/20210611102153.png)

### 【常规】选项卡设置

在常规选项卡设置，填写名称，选择’不管用户是否登录都要运行‘、’使用最高权限运行‘、‘隐藏’

![常规选项卡设置页面](http://img.xiyangyang.cc/blog/20210611104313.png)

### 【触发器】选项卡设置

![触发器选项卡设置页面](http://img.xiyangyang.cc/blog/20210611102745.png)

### 【操作】选项卡设置

![操作选项卡设置页面](http://img.xiyangyang.cc/blog/20210611103126.png)

**点击确定之后，输入电脑密码就可以了，然后就可以开机试一下**

![](http://img.xiyangyang.cc/blog/20210611103750.png)



## nginx反向代理

如果你的80端口被占用，你就可以通过nginx反向代理

```shell
 server
{
   listen 80;
    server_name www.baidu.com; #域名配置
    location ~ /* 
{	#反向代理
	proxy_pass http://localhost:7111; #需要代理的端口号
 	proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_intercept_errors on;
}
    
    access_log  /www/wwwlogs/frp.log;
    error_log  /www/wwwlogs/frp.error.log;
}
```

