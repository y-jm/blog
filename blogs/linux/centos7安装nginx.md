---
title: Centos7.8安装nginx
date: 2021-02-18 17:16:11
categories:
 - linux
tags:
- nginx
- centos
---

### 1.安装依赖


```shell
yum -y install make zlib zlib-devel gcc-c++ libtool  openssl openssl-devel
```


### 2.下载解压


```shell
wget https://nginx.org/download/nginx-1.18.0.tar.gz
tar -zxvf nginx-1.18.0.tar.gz
```


### 3.配置


```shell
./configure
```


### 4.编译安装


```shell
make
make install
```


查找安装路径：


```shell
[root@iZwz9g1c3fleilwng44esiZ nginx-1.18.0]# whereis nginx
nginx: /usr/local/nginx
```


### 5.启动或停止


使用`whereis nginx`找到nignx安装路径


```shell
/usr/local/nginx/sbin/nginx #启动
/usr/local/nginx/sbin/nginx -s quit #停止
/usr/local/nginx/sbin/nginx -s reload #重启
```


### 6.使用systemd来开机自启


使用vim来创建编辑


```shell
vim /usr/lib/systemd/system/nginx.service
```


```shell
#[Unit] 表示这是基础信息
[Unit]
#Description 是描述
Description=nginx
#After 是在那个服务后面启动，一般是网络服务启动后启动
After=network.target

#[Service]服务运行参数的设置
[Service]
#Type=forking是后台运行的形式
Type=forking
#ExecStart 是启动服务的命令
ExecStart=/usr/local/nginx/sbin/nginx
#ExecReload 是重启服务的命令
ExecReload=/usr/local/nginx/sbin/nginx -s reload
#ExecStop 是停止服务的命令
ExecStop=/usr/local/nginx/sbin/nginx -s quit
#表示给服务分配独立的临时空间
PrivateTmp=true  

#表示这是是安装相关信息
[Install]
#WantedBy 是以哪种方式启动：multi-user.target表明当系统以多用户方式
WantedBy=multi-user.target
```


```shell
systemctl daemon-reload #刷新配置文件

systemctl enable nginx  #加入开机启动，先执行这个
systemctl start nginx  #开启nginx服务
systemctl restart nginx  #重启nginx服务
systemctl stop nginx  #停止nginx服务
systemctl status nginx  #查看nginx运行状态
```


### 7.反向代理


使用`proxy_pass`做反向代理


```nginx
#代理其它IP
location /api/get {
		proxy_pass http://172.24.78.78/api/get;
 }
 #代理其它域名
location /get/baidu {
		proxy_pass http://www.baidu.com;
 }
 #代理自己其它端口
location /api/getinfo {
		proxy_pass http://127.0.0.1:8080;
 }
```

