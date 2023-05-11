---
title: Centos7.8安装redis
date: 2021-04-30
tags:
- redis
- centos
---

### 1.安装依赖

```shell
yum -y install make zlib zlib-devel gcc-c++ libtool  openssl openssl-devel
```

### 2. 使用wget下载redis压缩包安装

```shell
wget http://download.redis.io/releases/redis-5.0.0.tar.gz
```

### 3.解压

```shell
tar -zxvf redis-5.0.0.tar.gz 
```

### 4.编译

```shell
cd redis-5.0.0
make
```

### 5.安装

```shell
make install
```

### 6.启动服务

```shell
[root@iZwz9g1c3fleilwng44esiZ redis-5.0.0]# cd src
[root@iZwz9g1c3fleilwng44esiZ src]# ./redis-server
7121:C 16 Feb 2021 11:35:26.136 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
7121:C 16 Feb 2021 11:35:26.136 # Redis version=5.0.0, bits=64, commit=00000000, modified=0, pid=7121, just started
7121:C 16 Feb 2021 11:35:26.136 # Warning: no config file specified, using the default config. In order to specify a config file use ./redis-server /path/to/redis.conf
                _._                                                  
           _.-``__ ''-._                                             
      _.-``    `.  `_.  ''-._           Redis 5.0.0 (00000000/0) 64 bit
  .-`` .-```.  ```\/    _.,_ ''-._                                   
 (    '      ,       .-`  | `,    )     Running in standalone mode
 |`-._`-...-` __...-.``-._|'` _.-'|     Port: 6379
 |    `-._   `._    /     _.-'    |     PID: 7121
  `-._    `-._  `-./  _.-'    _.-'                                   
 |`-._`-._    `-.__.-'    _.-'_.-'|                                  
 |    `-._`-._        _.-'_.-'    |           http://redis.io        
  `-._    `-._`-.__.-'_.-'    _.-'                                   
 |`-._`-._    `-.__.-'    _.-'_.-'|                                  
 |    `-._`-._        _.-'_.-'    |                                  
  `-._    `-._`-.__.-'_.-'    _.-'                                   
      `-._    `-.__.-'    _.-'                                       
          `-._        _.-'                                           
              `-.__.-'                                                      
```

### 7.使用nohup来后台运行

```shell
[root@iZwz9g1c3fleilwng44esiZ src]# nohup ./redis-server &
[1] 13148
```

13148 是redis-server进程标识，可以使用`kill -9 13148` 来停止redis服务

### 8.使用systemd来开机自启

使用nohup可以后台运行，但是不能开机自启，所以使用systemd

```shell
vim /etc/systemd/system/redis.service
```

**ExecStart和ExecStop**为redis目录

```shell
#[Unit] 表示这是基础信息
[Unit]
#Description 是描述
Description=Redis
#After 是在那个服务后面启动，一般是网络服务启动后启动
After=network.target

##[Service]服务运行参数的设置
[Service]
#ExecStart 是启动服务的命令
# redis-server路径和配置文件
ExecStart=/root/redis-5.0.0/src/redis-server /root/redis-5.0.0/redis.conf  --daemonize no
#ExecStop 是停止服务的指令
# redis-cli
ExecStop=/root/redis-5.0.0/src/redis-cli -h 127.0.0.1 -p 6379 shutdown
#表示这是是安装相关信息
[Install]
#WantedBy 是以哪种方式启动：multi-user.target表明当系统以多用户方式
WantedBy=multi-user.target
```

编辑完后保存

```shell
systemctl daemon-reload #刷新配置文件

systemctl enable redis  #加入开机启动，先执行这个
systemctl start redis  #开启redis服务
systemctl stop redis  #停止redis服务
systemctl status redis  #查看redis运行状态
```

### 9.加入环境变量

全局模式

```shell
vim /etc/profile
#添加下面两句 REDIS_HOME是redis所在目录
export REDIS_HOME=/root/redis-5.0.0/
export PATH=$PATH:$REDIS_HOME/src
```

```shell
source /etc/profile  #加载环境变量使其生效
```