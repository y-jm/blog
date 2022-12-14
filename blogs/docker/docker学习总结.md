---
title: docker学习总结
date: 2021-07-18
categories:
 - linux
tags:
 - docker
 - centos
---

# docker学习总结

## 1.容器的使用

容器都是基于镜像，所以要通过一个镜像来启动容器

#### 1.获取镜像

如果我们本地没有 centos 镜像，我们可以使用 docker pull 命令来载入 centos 镜像

```shell
docker pull centos 
```

#### 2.启动容器

以下命令使用 centos 镜像启动一个容器，参数为以命令行模式进入该容器

```shell
docker run -it centos  /bin/bash
```

参数说明：

- **-it**: 进入容器开启一个终端。
- **-d**: 后台运行。
- **centos **:  镜像。
- **/bin/bash**：放在镜像名后的是命令，这里我们希望有个交互式 Shell，因此用的是 /bin/bash。


## 2.数据卷

通过挂载数据卷，避免容器停止数据被销毁

-v 源路径：目标路径

```shell
docker run  -d -P  -v /home/conf.d:/etc/nginx/conf.d --name nginx-02  nginx
```

### mysql同步数据

通过mysql镜像实现挂载数据卷，可以同步数据

-d 后台运行

-p 端口映射

-v  卷挂载

-e 环境配置

```sh
docker run -d -p 3310:3306 -v /home/mysql1/conf:/etc/mysql/conf.d -v /home/mysql1/data:/var/lib/mysql -e
MYSQL_ROOT_PASSWORD=123456 --name mysql01 mysql:5.7
```

当源路径为空时，目标路径的文件覆盖源路径

当源路径不为空时，源路径文件覆盖目标路径

### 匿名和具名挂载

```shell
# 匿名挂载 只写了容器内的路径，没有写容器外的路径
docker run -d -P --name nginx01 -v /etc/nginx nginx #创建一个nginx容器
docker volume ls  #查看数据卷
```
`docker volume ls` 回车如下：
```
DRIVER    VOLUME NAME
local     ebec36c5a058eafff723bdc74c0634b338653cf590dd78bdcb1a21ba86c0af3a
```

```bash
# 具名挂载 -v 卷名称：容器内路径 指定挂载卷的名称 
docker run -d -P --name nginx02 -v jm-nginx:/etc/nginx nginx
```
```bash
docker volume ls
```
`docker volume ls` 回车如下：
```
DRIVER    VOLUME NAME
local     ebec36c5a058eafff723bdc74c0634b338653cf590dd78bdcb1a21ba86c0af3a
local     jm-nginx 
```
```bash
# 通过  docker volume  inspect  可以查看详情信息
docker volume  inspect jm-nginx
```
`docker volume  inspect jm-nginx` 回车如下：
```
[
    {
        "CreatedAt": "2021-06-09T10:40:43+08:00",
        "Driver": "local",
        "Labels": null,
        "Mountpoint": "/var/lib/docker/volumes/jm-nginx/_data",
        "Name": "jm-nginx",
        "Options": null,
        "Scope": "local"
    }
]

```

```bash
# 通过 -v 容器内路径：ro rw 改写读写权限
#ro readonly 只读
#rw readwrite 可读可写
docker run -d -P --name nginx02 -v jm-nginx:/etc/nginx:ro nginx
# ro 说明这个路径只能在宿主机操作，不能在容器内操作
```

### 数据卷容器

通过 --volumes-from 实现数据卷共享

## 3.Dockerfile

**什么是 Dockerfile？**

Dockerfile 是一个用来构建镜像的文本文件，文本内容包含了一条条构建镜像所需的指令和说明。

- **FROM**：定制的镜像都是基于 FROM 的镜像

- **RUN**：执行的命令行命令

- **COPY**： 复制指令，从上下文目录中复制文件或者目录到容器里指定路径  

- ```shell
  COPY 源路径 目标路径
  ```

- **EXPOSE**： 暴露端口

- **CMD** ：类似于 RUN 指令，用于运行程序，但二者运行的时间点不同，CMD 在docker run 时运行，RUN 是在 docker build

- **ENV** ：设置环境变量，定义了环境变量，那么在后续的指令中，就可以使用这个环境变量。

- **WORKDIR** ：指定工作目录。

- **VOLUME** ：定义匿名数据卷。在启动容器时忘记挂载数据卷，会自动挂载到匿名卷，同步数据，避免重要的数据，因容器重启而丢失，这是非常致命的。

```shell
# FROM：基于 centos7.8.2003 的镜像
FROM centos:centos7.8.2003
RUN echo '开始构建一个centos7.8，并安装mysql、nginx、redis'
#开始构建一个centos7.8，并安装mysql、nginx、redis
RUN echo '更新及安装相关工具'
#安装依赖库
RUN yum install -y wget lsof telnet net-tools gcc gcc-c++ make pcre pcre-devel zlib zlib-devel

# 安装nginx
RUN echo '开始安装nginx'
RUN wget https://nginx.org/download/nginx-1.18.0.tar.gz
RUN tar -zxvf nginx-1.18.0.tar.gz  #解压
# 编译安装
RUN cd nginx-1.18.0 && ./configure  && make && make install
EXPOSE 80
CMD ["/usr/local/nginx/sbin/nginx","-g","daemon off;"]

# 安装redis
RUN echo '开始安装redis'
RUN yum -y install gcc automake autoconf libtool
RUN cd / 
RUN wget http://download.redis.io/releases/redis-5.0.0.tar.gz
RUN tar -zxvf redis-5.0.0.tar.gz
RUN cd redis-5.0.0 && make && make install
EXPOSE 6379
CMD ["/redis-5.0.0/src/redis-server"]
```



```shell
docker build -t nginx:centos .
```

## 4.自定义网络

查看所有网络，如下：

```bash
docker network ls 
```
```
NETWORK ID     NAME      DRIVER    SCOPE
a96a7e4968ca   bridge    bridge    local
893312e161d7   host      host      local
4be7d99d5248   none      null      local
```

### 网络模式

- bridge : 桥接 docker（默认，自己创建也使用bridge模式）
- none：不配置网络
- host：和容器机共享网路
- contaniner：容器网路连通（用的少！局限很大）

```shell
#我们直接启动命令，有默认的参数，只是省略掉了 --net bridge,而这个就是我们的docker0
docker run -d -P --name nginx01 --net bridge nginx
```

### 创建

```shell
docker network create --driver bridge --subnet 192.168.1.0/16 --gateway 192.168.1.0 mynet
解析：
--driver bridge 表示使用桥接模式
--subnet 192.168.1.0/16 表示子网ip 可以分配 192.168.1.2 到 192.168.255.255
--gateway 192.168.1.0 表示网关
mynet 表示网络名
```

### 网络连通

使用 docker network connect 连通不同网段的容器

![](https://img.xiyangyang.cc/blog/20210609140505.png)

```sh
# docker network connect 自定义网络名 容器名
docker network connect mynet tomcat-test
# 连通之后就是把tomcat-test放到mynet下
# 一个容器两个IP地址
```

![](https://img.xiyangyang.cc/blog/20210609140750.png)

## 5.自定义一个centos镜像

通过Dockerfile构建镜像，具体内容如下：

```sh
# FROM：基于 centos7.8.2003 的镜像
FROM centos:centos7.8.2003
RUN echo '开始构建一个centos7.8，并安装mysql、nginx、redis'
#开始构建一个centos7.8，并安装mysql、nginx、redis
RUN echo '更新及安装相关工具'

#安装依赖库
RUN yum install -y wget lsof telnet net-tools gcc gcc-c++ make pcre pcre-devel zlib zlib-devel

# 安装mysql
RUN wget https://dev.mysql.com/get/mysql57-community-release-el7-9.noarch.rpm
RUN rpm -ivh mysql57-community-release-el7-9.noarch.rpm
RUN yum -y install mysql-server
CMD ["systemctl","start","mysqld"]

# 安装nginx
RUN echo '开始安装nginx'
RUN wget https://nginx.org/download/nginx-1.18.0.tar.gz
RUN tar -zxvf nginx-1.18.0.tar.gz  #解压

# 编译安装
RUN cd nginx-1.18.0 && ./configure  && make && make install
EXPOSE 80
CMD ["/usr/local/nginx/sbin/nginx","-g","daemon off;"]

# 安装redis
RUN echo '开始安装redis'
RUN yum -y install gcc automake autoconf libtool
RUN cd / 
RUN wget http://download.redis.io/releases/redis-5.0.0.tar.gz
RUN tar -zxvf redis-5.0.0.tar.gz
RUN cd redis-5.0.0 && make && make install
EXPOSE 6379
CMD ["/redis-5.0.0/src/redis-server"]
```

### 报错

### ssh登录

#### 需要安装依赖

```sh
yum install -y openssh-server
#查看是否启动22端口 
    netstat -antp | grep sshd
```

#### 修改sshd_config 为密码登录

```sh
vi /etc/ssh/sshd_config
#打开注释 PermitRootLogin yes, 允许密码登录,保存退出
```

 #### 设置root密码

```sh
[root@201f4fa9f59f /]# passwd root
```

Failed to get D-Bus connection: Operation not permitted

Docker的设计理念是在容器里面不运行后台服务，容器本身就是宿主机上的一个独立的主进程，也可以间接的理解为就是容器里运行服务的应用进程。一个容器的生命周期是围绕这个主进程存在的，所以正确的使用容器方法是将里面的服务运行在前台。

**特权模式运行容器**

`--privileged=true`

```shell
docker run -d --name centos01 --privileged=true centos-close-3 /usr/sbin/init
```



```sh
docker run -d -P --name docker-1 -v /home/docker1/etc/ssh:/etc/ssh --privileged=true docker-test /bash
```

## 6. docker-compose

### 版本检查

```bash
docker-compose --version
```

### 创建 

创建默认配置文件 docker-compose.yml，可通过`docker-compose up -d`运行，示例如下

### 示例

```yaml
#yaml 配置
version: '3' # 表示该 Docker-Compose 文件使用的是 Version 2 file
services:
  nginx: #指定服务名称
    container_name: nginx  #容器的名称
    restart: always  #开机运行
    image: nginx  #镜像文件
    ports: #指定端口映射
     - '80:80'
     - '1000:1000'
    volumes: # 数据卷
      - /home/nginx/html:/usr/share/nginx/html
      - /home/nginx/conf:/etc/nginx/conf.d
```

### 常见命令如下：

- **ps: **列出所有运行容器

  ```bash
  docker-compose  ps
  ```

  

- **up**：构建、启动容器

  ```bash
  docker-compose  up 
  ```

- **-d**：后台运行

  ```bash
  docker-compose  up -d
  ```

- **logs**：查看服务日志输出

  ```bash
  docker-compose   logs
  ```

- **build**：构建或者重新构建服务

  ```bash
  docker-compose  build
  ```

