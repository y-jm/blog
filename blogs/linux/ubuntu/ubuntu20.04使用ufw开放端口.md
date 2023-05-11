---
title: ubuntu使用ufw开启端口
date: 2023-02-04
categories: ubuntu
---
ubuntu版本为20.04
## 1.查看防火墙状态
```bash
sudo ufw status # 打印状态
Status: active #开启
Status: inactive #关闭
```
## 2.开启、重启、关闭防火墙
```bash
sudo ufw enable #开启
sudo ufw disable #关闭
sudo ufw reload #重启
```
## 3.添加开启、关闭端口
```bash
sudo ufw allow 3306 #开启3306端口
sudo ufw delete allow 3306 #关闭3306端口
```

## 4.开启、关闭规定协议的端口
```bash
sudo ufw allow 8080/tcp #指定开启8001的tcp协议
sudo ufw delete allow 8080/tcp #关闭21端口
```
## 5.开启、关闭指定ip所有操作
```bash
sudo ufw allow from 192.168.1.10 #开启指定ip为192.168.1.10的计算机操作所有端口
sudo ufw delete allow from 192.168.1.10 #关闭指定ip为192.168.1.10的计算机操作所有端口
```
## 6.开启、关闭指定ip对应端口操作
```bash
sudo ufw allow from 192.168.1.11 to any port 3306 #开启指定ip为192.168.1.11的计算机访问本机的3306端口
sudo ufw delete allow from 192.168.1.11 to any port 3306 #关闭指定ip为192.168.1.11的计算机对本机的3306端口的操作
```
