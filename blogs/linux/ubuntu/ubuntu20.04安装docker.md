---
title: ubuntu20.04安装docker
date: 2022-09-09 19:30:00
categories:
 - linux
tags:
- ubuntu
- nodejs
---

## 1.卸载
卸载可能存在的或者为安装成功的Docker版本
```bash
sudo apt-get remove docker docker-engine docker-ce docker.io
```

## 2.添加阿里云的GPG密钥
```bash	
curl -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -
```

## 3.使用以下命令设置存储库
```bash
sudo add-apt-repository "deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"
```

## 4.安装最新版本的Docker(飞速安装)
```bash
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin
```

## 5.验证Docker是否安装成功
```bash
docker version
```

## 6.开机启动docker
```bash
sudo systemctl start docker  #启动docker服务
sudo systemctl stop docker  #关闭docker服务
sudo systemctl enable docker #开机运行
```