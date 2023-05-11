---
title: mysql5.7主从同步
date: 2021-07-18
categories:
 - mysql
tags:
 - centos
---

## 1.部署环境
数据库：MySQL 5.7.x  （相比5.5，5.6而言，5.7同步性能更好，支持多源复制，可实现多主一从，主从库版本应保证一致）
操作系统：CentOS 7.x

## 2.配置约束
主从库必须保证网络畅通可访问
主库必须开启binlog日志
主从库的server-id必须不同

## 3.主库配置

先进入主库，进行锁表，防止数据写入

```sql
mysql> flush tables with read lock;
```

### 3.1进行数据备份
在设置完同步之后，主库同步之前的数据不会同步到从库上面，如果需要保持主从数据完全一致，需要先把主库的数据先备份，然后恢复到从库上面

备份命令如下：
```sql
--备份所有数据库
mysqldump -u root -p --all-databases>/tmp/mysql.bak.sql
--备份多个数据库
mysqldump -u root -p --databases  dbname1 dbname2 ... > filename.sql
```

### 3.2 把mysql备份文件传到从库机器，进行数据恢复

```shell
scp mysql.bak.sql root@192.168.128.101:/tmp/
```

### 3.3 配置主库/etc/my.cnf

my.cnf默认在/etc/下

```ini
# For advice on how to change settings please see
# http://dev.mysql.com/doc/refman/5.7/en/server-configuration-defaults.html

[mysqld]
#
# Remove leading # and set to the amount of RAM for the most important data
# cache in MySQL. Start at 70% of total RAM for dedicated server, else 10%.
# innodb_buffer_pool_size = 128M
#
# Remove leading # to turn on a very important data integrity option: logging
# changes to the binary log between backups.
# log_bin
#
# Remove leading # to set options mainly useful for reporting servers.
# The server defaults are faster for transactions and fast SELECTs.
# Adjust sizes as needed, experiment to find the optimal values.
# join_buffer_size = 128M
# sort_buffer_size = 2M
# read_rnd_buffer_size = 2M
datadir=/var/lib/mysql
socket=/var/lib/mysql/mysql.sock

# Disabling symbolic-links is recommended to prevent assorted security risks
symbolic-links=0

log-error=/var/log/mysqld.log
pid-file=/var/run/mysqld/mysqld.pid

#slave-skip-errors=all #跳过所有错误

server-id=128 
master_info_repository=table
relay_log_info_repository=table	
log_bin=mysql-bin 	#开启及设置二进制日志文件名称
binlog_format=MIXED
sync_binlog=1
expire_logs_days=7 #二进制日志自动删除/过期的天数。默认值为0，表示不自动删除。

binlog-do-db = mytest 	#要同步的数据库，不设置这个，默认为同步所有的

binlog-ignore-db=mysql 	 #不需要同步的数据库 
binlog_ignore_db=information_schema
binlog_ignore_db=performation_schema
binlog_ignore_db=sys
#explicit_defaults_for_timestamp=true

```

### 3.4 创建授权用户

在主库创建授权用户

```sql
mysql> grant replication slave on *.* to 'slave'@'%' identified by '123456';
```
可能会因为密码策略太简单而失败，如果需要设置简单密码，则修改密码策略，修改密码如下：
```sql
mysql> set global validate_password_length=4; 
mysql> set global validate_password_policy=LOW; 
```

### 3.5查看master状态

在主库查看master状态

```sql
mysql> show master status \G
*************************** 1. row ***************************
             File: mysql-bin.000018
         Position: 6800
     Binlog_Do_DB: lm_policy_info
 Binlog_Ignore_DB: mysql,information_schema,performation_schema,sys
Executed_Gtid_Set: 
1 row in set (0.01 sec)
```



## 4.从库配置及操作

### 4.1 配置my.cnf

my.cnf默认在/etc/下

```ini
[client]
port = 3306
default-character-set = utf8mb4

[mysql]
port = 3306
default-character-set = utf8mb4

[mysqld]
##########################
# summary
##########################
#bind-address = 0.0.0.0
#port = 3306
#datadir=/datavol/mysql/data 	#数据存储目录

##########################
# log bin
##########################
server-id = 10345
master_info_repository      = table
relay_log_info_repository   = table		

##########################
# character set
##########################
character-set-server = utf8mb4
collation-server = utf8mb4_unicode_ci
```

### 4.2 导入主库的数据备份

```sql
mysql> stop slave;--停止从库的状态
mysql> source /tmp/mysql.bak.sql; --导入数据备份
```

### 4.3 设置【主库】信息

使用`show slave status \G`查看，如果已有连接参数， 可以使用`reset slave all`来重置所有连接，或者使用`reset slave for channel '300'`来指定重置某人连接 

`mysql -uroot -p`登录，进入mysql命令行

```sql
mysql> stop slave;
Query OK, 0 rows affected

mysql> CHANGE MASTER TO 
MASTER_HOST='192.168.10.212',  #主库的ip
MASTER_PORT=4300,  #主库的端口
MASTER_USER='slave', #创建的有同步复制权限授权用户
MASTER_PASSWORD='123456',  #创建的有同步复制权限授权用户密码
#【关键处】从主库的该log_bin文件开始读取同步信息，主库show master status返回结果
MASTER_LOG_FILE='mysql-bin.0000018', 
#【关键处】从文件中指定位置开始读取，主库show master status返回结果
MASTER_LOG_POS=438 #和主库的Position项一致
for channel '300'; #通道名称
Query OK, 0 rows affected


mysql>  start slave;
Query OK, 0 rows affected (0.00 sec)
```

### 4.4 查看同步信息

在从库执行`show slave status \G`

```sql
mysql>  show slave status \G
*************************** 1. row ***************************
               Slave_IO_State: Waiting for master to send event
                  Master_Host: 192.168.1.128
                  Master_User: slave
                  Master_Port: 3306
                Connect_Retry: 60
              Master_Log_File: mysql-bin.000018
          Read_Master_Log_Pos: 6800
               Relay_Log_File: localhost-relay-bin-300.000002
                Relay_Log_Pos: 320
        Relay_Master_Log_File: mysql-bin.000018
             Slave_IO_Running: Yes
            Slave_SQL_Running: Yes
              Replicate_Do_DB: 
          Replicate_Ignore_DB: 
           Replicate_Do_Table: 
       Replicate_Ignore_Table: 
      Replicate_Wild_Do_Table: 
  Replicate_Wild_Ignore_Table: 
                   Last_Errno: 0
                   Last_Error: 
                 Skip_Counter: 0
          Exec_Master_Log_Pos: 6800
              Relay_Log_Space: 535
              Until_Condition: None
               Until_Log_File: 
                Until_Log_Pos: 0
           Master_SSL_Allowed: No
           Master_SSL_CA_File: 
           Master_SSL_CA_Path: 
              Master_SSL_Cert: 
            Master_SSL_Cipher: 
               Master_SSL_Key: 
        Seconds_Behind_Master: 0
Master_SSL_Verify_Server_Cert: No
                Last_IO_Errno: 0
                Last_IO_Error: 
               Last_SQL_Errno: 0
               Last_SQL_Error: 
  Replicate_Ignore_Server_Ids: 
             Master_Server_Id: 128
                  Master_UUID: b806bdaa-5ad7-11eb-9ddd-000c29ff7584
             Master_Info_File: mysql.slave_master_info
                    SQL_Delay: 0
          SQL_Remaining_Delay: NULL
      Slave_SQL_Running_State: Slave has read all relay log; waiting for more updates
           Master_Retry_Count: 86400
                  Master_Bind: 
      Last_IO_Error_Timestamp: 
     Last_SQL_Error_Timestamp: 
               Master_SSL_Crl: 
           Master_SSL_Crlpath: 
           Retrieved_Gtid_Set: 
            Executed_Gtid_Set: 8f9e146f-0a18-11e7-810a-0050568833c8:1-4
                Auto_Position: 0
         Replicate_Rewrite_DB: 
                 Channel_Name: 300
           Master_TLS_Version: 
1 row in set (0.00 sec)

ERROR: 
No query specified

```

可以看见设置三个的主从同步通道的所有状态信息。
只有【Slave_IO_Running】和【Slave_SQL_Running】都是Yes，则同步是正常的。
如果是No或者Connecting都不行，可查看mysql-error.log，以排查问题。

```sql
mysql>  show variables like 'log_error%';
+---------------------+---------------------+
| Variable_name       | Value               |
+---------------------+---------------------+
| log_error           | /var/log/mysqld.log |
| log_error_verbosity | 3                   |
+---------------------+---------------------+
2 rows in set (0.01 sec)
```

配置完成，则【从库10345】开始自动同步。

若需要单独启动或停止某个同步通道，可使用如下命令：
start slave for channel '300';   //启动名称为300的同步通道
stop slave for channel '300';   //停止名称为300的同步通道
