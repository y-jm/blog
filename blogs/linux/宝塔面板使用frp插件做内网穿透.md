---
title: 宝塔面板使用frp插件做内网穿透
date: 2020-09-02
tags: frp
---

## 1.简述

在宝塔面板下载frp插件做web内网穿透，服务端和客户端需要版本一致，以下安装版本为0.33.0

## 2.安装

![](https://img.xiyangyang.cc/blog/f0Yl6Y7fYF.png)

点击截图1软件商店，截图2搜索，选择截图3服务端进行配置，可以需要登录才能安装

## 3.服务端配置

![](https://img.xiyangyang.cc/blog/2CmDYrr8Cm.png)

截图1需要设置和frpc.ini客户端配置文件中server_port的值一致，截图2密钥也要和frpc.ini中的token一致，最后点击保存配置

![](https://img.xiyangyang.cc/blog/image-20200702144713181.png)

截图1需要设置http端口不然无法在浏览器中正常访问，<font color='red'>最后记得启动frps</font>

## 4.客户端配置

### 4.1 http配置

在https://github.com/fatedier/frp/releases下载对应系统的压缩包，然后打开frpc.ini文件进行配置

![](https://img.xiyangyang.cc/blog/image-20200702145702417.png)

![](https://img.xiyangyang.cc/blog/image-20200702145910158.png)

![](https://img.xiyangyang.cc/blog/image-20200702150457574.png)

截图1配置服务端参数，server_addr = 服务器ip，server_port 和tcp端口一致，token = 之前设置的验证密钥

截图2配置客户端参数，local_port 要穿透的端口号，custom_domains= 服务端域名

在终端输入下面的命令行启动，如果跟下面截图中差不多就成功了

```shell
./frpc -c ./frpc.ini
```

![](https://img.xiyangyang.cc/blog/image-20200702151827377.png)

### 4.2 SSH配置

remote_port 你连接的端口号

![](https://img.xiyangyang.cc/blog/20200902135149.png)

## 5.frp开机自启

### 5.1 使用systemctl来控制启动

执行`vim /lib/systemd/system/frpc.service`，frps和frpc一样，把frpc改成frps就行了

```shell
[Unit]
Description=fraps service
After=network.target syslog.target
Wants=network.target

[Service]
Type=simple
#启动服务的命令（此处写你的frps的实际安装目录）
ExecStart=/usr/frp/frpc -c /usr/frp/frpc.ini

[Install]
WantedBy=multi-user.target
```
### 5.2 开启服务命令
```shell
# 更新服务文件
systemctl daemon-reload

# 开启
systemctl start frps

# 关闭
systemctl stop frps

# 重启
systemctl restart frps

# 查看状态
systemctl status frps

# 设置开机启动
systemctl enable frps

# 设置开机不启动
systemctl disable frps
```



<font color='red'>注意：</font>

<font color='red'>不能代理80端口，其它端口可以</font>