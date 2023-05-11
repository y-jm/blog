---
title: linux创建角色授权
date: 2021-11-08
categories:
 - linux
tags:
 - centos
 - mysql
---
### 1.用户组管理

```shell
cat /etc/group |grep service_group //检查mysql用户及组是否存在
```

#### 1.创建组

创建一个`service_group`组

```shell
groupadd service_group
```

#### 2.添加用户进组

把wang添加进`service_group`组

```shell
usermod –g service_group wang
```

#### 3.退组

```shell
gpasswd –d wang service_group 
```



### 2.用户账号管理

#### 1.添加用户

##### 命令：

```bash
useradd 选项 用户名
```

参数说明：

- 选项:

  - -c comment 指定一段注释性描述。
  - -d 目录 指定用户主目录，如果此目录不存在，则同时使用-m选项，可以创建主目录。
  - -g 用户组 指定用户所属的用户组。
  - -G 用户组，用户组 指定用户所属的附加组。
  - -s Shell文件 指定用户的登录Shell，/sbin/nologin代表用户不能登录系统
  - -u 用户号 指定用户的用户号，如果同时有-o选项，则可以重复使用其他用户的标识号。

- 用户名:

  指定新账号的登录名。 

##### 实例：

```shell
useradd -g  service_group yuan 
```

#### 2.添加密码

```shell
passwd 用户名
```



#### 3.删除用户

##### 命令：

```shell
userdel 选项 用户名
```

##### 实例：

 **-r**，它的作用是把用户的主目录一起删除。 

```bash
# userdel -r sam
```

#### 4.修改账号

```shell
usermod 选项 用户名
```

 常用的选项包括`-c, -d, -m, -g, -G, -s, -u以及-o等`，这些选项的意义与`useradd`命令中的选项一样 



## 2.Mysql

### 1.创建用户

#### 命令：

```sql
CREATE USER 'username'@'host' IDENTIFIED BY 'password';
```

#### 说明：

- username：你将创建的用户名
- host：指定该用户在哪个主机上可以登陆，如果是本地用户可用localhost，如果想让该用户可以从任意远程主机登陆，可以使用通配符%
- password：该用户的登陆密码，密码可以为空，如果为空则该用户可以不需要密码登陆服务器

#### 实例：

```sql
CREATE USER 'yuan'@'localhost' IDENTIFIED BY '123456';
CREATE USER 'yuan'@'%' IDENTIFIED BY '';
CREATE USER 'yuan'@'%';
```

### 2.授权:

#### 命令

```sql
GRANT privileges ON databasename.tablename TO 'username'@'host'
```

#### 说明:

- privileges：用户的操作权限，如`SELECT`，`INSERT`，`UPDATE`等，如果要授予所的权限则使用`ALL` 

- databasename：数据库名

- tablename：表名，如果要授予该用户对所有数据库和表的相应操作权限则可用`*`表示，如`*.*`

#### 实例:

```sql
GRANT SELECT,INSERT ON test.* TO 'yuan'@'%';
GRANT ALL ON *.* TO 'yuan'@'%';
```

### 3.设置与更改用户密码

```sql
SET PASSWORD FOR 'username'@'host' = PASSWORD('newpassword');
```

 如果是当前登陆用户用: 

```sql
SET PASSWORD = PASSWORD("newpassword");
```

### 4.撤销用户权限

```sql
REVOKE privilege ON databasename.tablename FROM 'username'@'host';
```

#### 说明：

privilege, databasename, tablename：同授权部分

#### 实例:

```sql
REVOKE SELECT ON *.* yuan 'yuan'@'%';
```

### 5.删除用户

```sql
DROP USER 'username'@'host';
```

### 6.刷新权限

  使用该命令，刷新权限，使设置生效 

```sql
flush privileges;
```
