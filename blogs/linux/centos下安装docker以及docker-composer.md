---
title: centos下安装docker以及docker-composer
date: 2020-04-30
categories: linux
tags:
- centos
- docker
---

## 1.简述

Docker是一个开源的应用容器引擎，让开发者可以打包他们的应用以及依赖包到一个可移植的容器中，然后发布到任何流行的Linux机器上，也可以实现虚拟化，容器是完全使用沙箱机制，相互之间不会有任何接口。

## 2.安装

### 2.1卸载旧版本

```shell
sudo yum remove docker \
         docker-client \
         docker-client-latest \
         docker-common \
         docker-latest \
         docker-latest-logrotate \
         docker-logrotate \
         docker-engine
```



### 2.2安装依赖

```shell
yum install -y yum-utils device-mapper-persistent-data lvm2
```

### 2.3添加docker-ce yum仓库

因为在阿里云的ecs机器上面，yum镜像使用的阿里云的，找不到docker的镜像，所以需要第一步的安装基础工具之后使用yum-config-manager来添加对应的yum仓库，执行如下命令

```shell
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```

### 2.4安装docker-ce

```shell
yum install docker-ce
```

### 2.5安装docker-compose

安装docker-compose相对比较简单，可以直接去[https://github.com/docker/com...](https://github.com/docker/compose/releases) 下载然后选择相应的版本，或者直接执行如下命令安装，安装完后docker-compose会被安装到/usr/local/bin目录下

```shell
curl -L https://github.com/docker/compose/releases/download/1.24.0-rc1/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
```

### 2.6设置docker-compose可执行

```shell
sudo chmod +x /usr/local/bin/docker-compose
```

## 3.启动、停止docker服务 

```shell
systemctl start docker  #启动docker服务
systemctl stop docker  #关闭docker服务
systemctl enable docker #开机运行
```

## 4.查看docker-compose是否安装成功

```shell
docker-compose --version
```

出现版本号，表示已安装成功