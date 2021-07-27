---
title: mac m1 安装oh-my-zsh
date: 2021-07-27 22:20
categories:
 - macos
tags:
 - python
---
### 1.简述
官方的镜像源下载太慢了，只好更换国内镜像源

### 2.创建配置文件
在~/.pip下面新建一个pip.conf，如果没有.pip就mkdir .pip
``` bash
touch ~/.pip/pip.conf
```

```ini
[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
[install]
trusted-host=pypi.tuna.tsinghua.edu.cn
```

