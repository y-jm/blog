---
title: 多个SSHKey配置
date: 2021-07-26 21:40:46
tags:
- git
---

## 简述

配置SSH公钥，避免每次使用git推送都需要输入账号和密码

## 查看git本地配置
执行下面命令，如果打印为空说明没有设置
```bash
git config --list
```

## 设置git的用户名和密码

设置git的用户名和密码，如果已经设置则忽略

```bash
git config --global user.name "用户名"
git config --global user.email "邮箱地址"
```

## 生成公钥

复制下面命令，会生成一个`blog`的`SSH Key`，
```bash
ssh-keygen -t rsa -C '你的邮箱' -f ~/.ssh/blog_id_rsa
```
一路回车就可以了(把邮箱改成你自己的)。可以看到`.ssh`文件夹下面多了两个文件。


![](http://img.xiyangyang.cc/blog/20210426112955.png)

## 在coding.net上面添加公钥

进入个人账户设置，点击侧边栏SSH公钥，再点击新增公钥弹出配置弹窗，如下图

![](http://img.xiyangyang.cc/blog/20210426114137.png)

![](http://img.xiyangyang.cc/blog/20210426114253.png)

![](http://img.xiyangyang.cc/blog/20210426114537.png)

使用记事本打开blog_id_rsa.pub，复制里面的公钥，然后添加进去，确认保存

![](http://img.xiyangyang.cc/blog/20210426113614.png)

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
**要使用ssh链接clone仓库，不能使用https拉取**

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

### 遇到的问题
#### 问题一
使用ssh每次拉取还是出现下面这种请求，使用`ssh-keygen -p`
```bash
[root@VM-4-7-centos blog]# git pull
Enter passphrase for key '/root/.ssh/blog_id_rsa': 
```

```bash
[root@VM-4-7-centos blog]# ssh-keygen -p
Enter file in which the key is (/root/.ssh/id_rsa): /root/.ssh/blog_id_rsa #输入id_rsa的路径
Enter old passphrase: #密码
Enter new passphrase (empty for no passphrase): #直接回车
Enter same passphrase again: #直接回车
Your identification has been saved with the new passphrase.
```

