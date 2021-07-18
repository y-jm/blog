---
title: 多个SSHKey配置
date: 2021-04-26 11:26:46
tags:
- git
---

## 简述

配置SSH公钥，避免每次使用git推送都需要输入账号和密码

## 设置git的用户名和密码

设置git的用户名和密码，如果已经设置则忽略

```bash
git config ---global user.name "用户名"
git config --global user.email "邮箱地址"
```

## 生成公钥

复制命令`ssh-keygen -t rsa -C 'xxxxx@xx.com' -f ~/.ssh/blog_id_rsa`生成一个`blog`的`SSH Key`，一路回车就可以了(把邮箱改成你自己的)。可以看到`.ssh`文件夹下面多了两个文件。

```shell
y@DESKTOP-SFLMN83 MINGW64 ~/.ssh
$ ssh-keygen -t rsa -C "1159370654@qq.com"  -f ~/.ssh/blog_id_rsa
Generating public/private rsa key pair.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /c/Users/y/.ssh/blog_id_rsa
Your public key has been saved in /c/Users/y/.ssh/blog_id_rsa.pub
The key fingerprint is:
SHA256:z2xFv53zyiFn+ivIHqnul535wJ03YRV3ZVcZSEu6X4A 1159370654@qq.com
The key's randomart image is:
+---[RSA 3072]----+
|            .o.o%|
|            +..o=|
|           E.o  .|
|           .... .|
|        S  .. .+ |
|         + +..o+o|
|         .B+++B+o|
|         o=.=B o+|
|       o+o. .+*o.|
+----[SHA256]-----+

```

![](https://19-blog.oss-cn-shenzhen.aliyuncs.com/20210426112955.png)

## 在coding.net上面添加公钥

进入个人账户设置，点击侧边栏SSH公钥，再点击新增公钥弹出配置弹窗，如下图

![](https://19-blog.oss-cn-shenzhen.aliyuncs.com/20210426114137.png)

![](https://19-blog.oss-cn-shenzhen.aliyuncs.com/20210426114253.png)

![](https://19-blog.oss-cn-shenzhen.aliyuncs.com/20210426114537.png)

使用记事本打开blog_id_rsa.pub，复制里面的公钥，然后添加进去，确认保存

![](https://19-blog.oss-cn-shenzhen.aliyuncs.com/20210426113614.png)

## 生成config文件

使用命令`touch ~/.ssh/config`，在`~/.ssh`文件夹下添加config文件，可以看到文件夹下面多了一个config文件，然后打开config进行编辑。

```shell
# 其中Host和HostName填写git服务器的域名，IdentityFile填写私钥的路径。
Host e.coding.net
HostName e.coding.net
PreferredAuthentications publickey
IdentityFile ~/.ssh/blog_id_rsa
```

使用下面命令测试看是否添加成功，这样你就可以不需要每次输入用户名和密码了（第一次还是需要的）

```shell
$ ssh -T git@e.coding.net
CODING 提示: Hello y, You've connected to coding.net via SSH. This is a Personal Key.
y，你好，你已经通过 SSH 协议认证 coding.net 服务，这是一个个人公钥.
公钥指纹：19:b9:96:2a:2f:2a:6f:c6:6c:10:8f:a1:90:3c:7f:e2
```

## remote-ssh 配置

在vscode安装remote-ssh插件，本地公钥和上面一样，主要需要配置remote-ssh连接的服务器

### 服务器配置

创建.ssh并赋予权限，有就不需要创建了

```bash
mkdir -p ~/.ssh 

chmod 700 ~/.ssh 

vim ~/.ssh/authorized_keys #把blog_id_rsa.pub中的内容复制进去
chmod 600 ~/.ssh/authorized_keys 
```

