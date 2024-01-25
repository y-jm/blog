---
title: Connect time out问题
date: 2024-01-25
categories:
 - android
tags: android
---

## 1.错误信息
在刚开始使用Android Studio新建项目，或者在使用别人的项目时报错Connect time out

## 2.解决办法
1、在gradle目录下面找到gradle-wrapper.properties，查看gradle版本
```
distributionUrl=https\://services.gradle.org/distributions/gradle-6.9-bin.zip
```
2、然后去https://services.gradle.org/distributions/官网下载对应的gradle版本
下载好之后找到当前用户如下目录，进入对应版本的目录，在进入一个随机名称目录，把zip包复制进入

![截图](http://pic.xiyangyang.cc/i/2024/01/25/65b1bc7345682.png)

![截图](http://pic.xiyangyang.cc/i/2024/01/25/65b1bd684a34f.png)

3、然后回到安卓项目点击`Try Again`


