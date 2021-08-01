---
title: 开机运行shell脚本
date: 2021-07-15 17:10:11
categories:
 - linux
tags:
- shell
- centos
---

先把shell执行脚本添加可执行权限
```bash
chmod +x /usr/local/frp/run_frpc.sh
```
在centos7中，/etc/rc.d/rc.local文件的权限被降低了，开机的时候执行在自己的脚本是不能起动一些服务的，执行下面的命令可以文件标记为可执行的文件
```bash
chmod +x /etc/rc.d/rc.local
```
然后在/etc/rc.d/rc.local文件中，把你的文件路径添加进去，最后重启测试一下
```bash
#!/bin/bash
# THIS FILE IS ADDED FOR COMPATIBILITY PURPOSES
#
# It is highly advisable to create own systemd services or udev rules
# to run scripts during boot instead of using this file.
#
# In contrast to previous versions due to parallel execution during boot
# this script will NOT be run after all other services.
#
# Please note that you must run 'chmod +x /etc/rc.d/rc.local' to ensure
# that this script will be executed during boot.

touch /var/lock/subsys/local
/usr/local/frp/run_frpc.sh #添加的shell脚本路径

```

