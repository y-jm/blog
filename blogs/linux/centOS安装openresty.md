---
title: openresty(一)安装
date: 2020-02-25 16:17:55
categories:
- linux
tags:
- nginx
- openresty
- centos
---

## 1.简述

使用阿里云CentOS7.4安装openresty

##  2.安装

### 1.使用官方的预编译包进行安装

在CentOS 系统中添加 `openresty` 仓库，这样就可以便于未来安装或更新我们的软件包（通过 `yum check-update` 命令）。运行下面的命令就可以添加我们的仓库

```shell
sudo yum install -y yum-utils
sudo yum-config-manager --add-repo https://openresty.org/package/centos/openresty.repo
```

然后输入下面命令安装软件包，比如 `openresty`

```shell
sudo yum install -y openresty
```

安装命令行工具 `resty`，输入下面命令安装 `openresty-resty` 包

```shell
sudo yum install -y openresty-resty
```

如果没有出现任何错误，openresty默认安装在 `usr/local/openresty`，输入下面命令进行启动

```shell
usr/local/openresty/nginx/sbin/nginx ##启动
usr/local/openresty/nginx/sbin/nginx -s stop ##关闭
usr/local/openresty/nginx/sbin/nginx -s reload ##重启
```

使用下面命令即可查看是否启动成功，成功则会返回HTML文本

```shell
 curl localhost:80
```

### 2.使用官网源码包进行安装

安装前准备，需要把` perl 5.6.1+`, `libpcre`, `libssl`这些库安装好

```shell
yum install pcre-devel openssl-devel gcc curl
```

然后使用wget下载源码包

```shell
wget https://openresty.org/download/openresty-1.15.8.1.tar.gz
```

执行下面命令进行解压

```
tar -xzvf openresty-1.15.8.1.tar.gz
```

然后`cd openresty-1.15.8.1 `进入目录下面执行，程序会被安装到/usr/local/openresty目录

```shell
./configure
```

然后出现下面的图片就是成功了

![](http://img.xiyangyang.cc/blog/20200225182542.png)

然后使用下面命令编译安装完成

```
gmake && gmake install
```

然后使用`/usr/local/openresty/nginx/sbin/nginx`启动服务器，还是使用`curl localhost`看是否启动成功，成功则返回一段HTML文本，如下图

![](http://img.xiyangyang.cc/blog/20200225183142.png)

到此openresty就全部安装完成，如果想着浏览器访问，则需要开放相对应的端口

## 3.开发端口

使用下面命令开发端口号

```
iptables -I INPUT -p tcp --dport 80 -j ACCEPT # 临时生效
/etc/init.d/iptables save # 保存到配置文件，永久生效
/etc/init.d/iptables status # 查看iptables当前状态
```

## 4.添加环境变量

### 1.方法（一）

现在每次启动都要输入相对路径，为了方便，把它加入环境变量中,执行`vim /etc/profile`,把下面添加到文件中，保存退出即可

```
PATH=/usr/local/openresty/nginx/sbin:$PATH
export PATH
```

执行`source /etc/profile` 重启一下，然后在任何目录下只要输入nginx就可以了，如下图

![](http://img.xiyangyang.cc/blog/20200225184852.png)

### 2.方法（二）

执行`vim ~/.bashrc`,把下面一行插入文件中并保存下来,然后使用`source ~/.bashrc`重启一下

```
export PATH=$PATH:/usr/local/openresty/nginx/sbin
```

