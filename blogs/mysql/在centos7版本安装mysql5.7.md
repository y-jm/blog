---
title: 在centos7版本安装mysql5.7
date: 2021-07-19
categories:
 - mysql
tags:
 - centos
---

# 安装

### 1.前提条件
先检查系统是否装有mysql，如下图，这里返回空值，说明没有，不然需要把mysql卸载干净,如果需要卸载可以参考这篇[博文](https://www.cnblogs.com/wanghuaijun/p/6398240.html)

```shell
rpm -qa | grep mysql
```



![](https://img.xiyangyang.cc/blog/20210309094319.png)

### 2.下载

由于CentOS7的yum源中没有mysql，需要到mysql的官网下载yum repo配置文件。

下载命令：

```shell
wget https://dev.mysql.com/get/mysql57-community-release-el7-9.noarch.rpm
```



### 3.安装

然后进行yum源的安装：

```shell
rpm -ivh mysql57-community-release-el7-9.noarch.rpm
```



**安装完成后，就可以使用yum命令安装mysql了：**

```shell
yum -y install mysql-server
```


**如果安装太慢，从[国内镜像网站](http://uni.mirrors.163.com/mysql/Downloads/)下载对应版本的client和server rpm包**

```shell
#  1. cd 
cd /var/cache/yum/x86_64/7/mysql57-community/packages/
# 2、把下载好的rpm文件上传到此目录
mysql-community-client-5.7.29-1.el7.x86_64.rpm
mysql-community-server-5.7.29-1.el7.x86_64.rpm

# 3、再次执行安装命令
yum -y install mysql-server
```



### 4. 启动mysql

```shell
systemctl start mysqld
```



### 5. 查看mysql状态

```shell
systemctl status mysqld
```



### 6. 获取mysql的临时密码

```shell
grep 'temporary password' /var/log/mysqld.log
```



### 7. 登录mysql

（密码为上一步骤获取的临时密码）

```bash
mysql -u root -p #此处不用输入密码，按下回车后会专门要你再输入密码的
```

### 8. 修改临时密码

登录成功后，做任何操作都会被要求先修改密码

```sql
mysql> show databases;
```



![](https://img.xiyangyang.cc/blog/20210309094424.png)



<b style='color:red;'>请注意：如果修改的密码太过简单，依然会提示error，修改失败<br>因为5.7及以上版本的数据库对密码做了强度要求，默认密码的要求必须是大小写字母数字特殊字母的组合且至少要8位长度</b>

```sql
mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY '新的密码';
```



### 9.修改密码校验策略
如果想要查看MySQL完整的初始密码规则,登陆后执行以下命令
```sql
mysql> SHOW VARIABLES LIKE 'validate_password%';
```
使用下面命令修改，默认密码要求就不必是大小写字母数字特殊字母的组合且至少要8位长度

```sql
mysql> set global validate_password_length=4;
mysql> set global validate_password_policy=LOW; 
```

## 10.刷新权限

```sql
mysql> flush privileges;
```



### 11. 执行.sql文件

进入mysql的控制台后，使用source命令执行，实例如下

```sql
source /home/s.sql
```



如果出现下面报错，需要先

- create database 我们的数据库名
- use database 我们的数据库名
- source 地址 

![](https://img.xiyangyang.cc/blog/20210309094347.png)

如果执行效果跟下图的一样，则执行成功

![](https://img.xiyangyang.cc/blog/20210309094451.png)

### 12.任意ip访问

**如果只需要本机使用，则不需要看下面的**

连接时，如果出现下面的问题

<font color='red'>1130-Host 113 247.68.57' is not allowed to connect to this mysQl server</font>

需要修改 系统表mysql 的host 字段

```sql
mysql> SELECT host  FROM user;
+-----------+
| host      |
+-----------+
| localhost |
| localhost |
| localhost |
+-----------+
3 rows in set (0.00 sec)

mysql> update user set host = '%' where user = 'root';
Query OK, 1 row affected (0.00 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> SELECT host  FROM user;
+-----------+
| host      |
+-----------+
| %         |
| localhost |
| localhost |
+-----------+
3 rows in set (0.00 sec)

mysql>flush privileges;
mysql> exit;
```
然后在其它电脑上就可以连接上了

### 13.忘记密码

1、`vi /etc/my.cnf`打开mysql的配置文件，在配置文件中添加：skip-grant-tables

2、重启mysql

```bash
systemctl restart mysqld
```

3、使用无密码登录,使用下面命令，直接回车，不用输入。

```sql
mysql -uroot -p
```
4.直接修改密码
```sql
ALTER USER 'root'@'localhost' IDENTIFIED BY '新的密码';
```
修改完成之后，把`vi /etc/my.cnf`中的<b>skip-grant-tables</b>去除掉，然后重启mysql服务
```bash
systemctl restart mysqld
```

## 14.初始化数据库
### 1.备份数据库
在<b>/etc/my.cnf</b>设置`innodb_force_recovery=6`强制启动数据库
```ini
[mysqld]
innodb_force_recovery=6
```
执行下面语句备份所有数据库
```shell
mysqldump -u root  -p --all-databases >/tmp/all.sql
```
### 2.初始化
在执行`mysqld --initialize --user=mysql`命令时，出现报错如下：<br/>
``` shell
[Warning] TIMESTAMP with implicit DEFAULT value is deprecated. Please use --explicit_defaults_for_timestamp server option (see documentation for more details).
```
解决方法,在<b>/etc/my.cnf</b> 配置文件中添加配置：
```ini
[mysqld]
explicit_defaults_for_timestamp=true
```
初始数据库完成之后，把在<b>/etc/my.cnf</b>设置的`innodb_force_recovery`和`explicit_defaults_for_timestamp`去掉，又从第六步开始。
登录成功，执行`source`恢复数据库
```sql
mysql> source /tmp/all.sql;
```