---
title: 使用hexo和码云免费搭建个人博客
date: 2019-08-09 14:17:49
tags:
- hexo
- 码云
---

### 1.搭建环境

node.js

npm

如果使用npm安装较慢，使用cnpm进行替代安装，安装命令如下：

`npm install -g cnpm --registry=https://registry.npm.taobao.org`

Git（window系统使用cmd也行）

安装完成之后，使用cnpm全局安装hexo-cli

`cnpm install -g hexo-cli`

### 2.上码云创建仓库

在码云上新建一个创建无论是否公开还是私用的（私用的仓库使用pages服务，静态页面也会被公开的）

![](https://img.xiyangyang.cc/blog/QQ%E6%88%AA%E5%9B%BE20190808165530.png)

![](https://img.xiyangyang.cc/blog/QQ%E6%88%AA%E5%9B%BE20190808170049.png)

![](https://img.xiyangyang.cc/blog/QQ%E6%88%AA%E5%9B%BE20190808170400.png)

复制上图生成的链接，接下来需要在_config.yml设置url，不然引入文件路径找不到

### 3.创建hexo项目

`hexo init blog` (blog 自定义项目名)

`cd blog` 移动到blog

`cnpm install` 安装hexo依赖包

`hexo s`启动项目，使用localhost:4000即可访问 （4000是启动默认的端口）

```shell
hexo new  文章名
```

执行之后，文件在source/_post目录下，使用markdown编辑工具打开编写文章

安装hexo编译上传工具 `cnpm install hexo-deployer-git --save`

打开_config.yml文件，配置码云仓库地址

```
deploy:
	type: git
    repo: https://gitee.com/Y_J_M/hexo.git
    barnch: master
```

使用 `hexo deploy` 编译部署

编辑完成之后，可以在个人主页看到项目推送消息

### 5.安装hexo主题

打开[官网主题页面](https://hexo.io/themes/)

下载[NexT主题](http://theme-next.iissnan.com/getting-started.html)

```shell
cd blog
git clone https://github.com/iissnan/hexo-theme-next themes/next
```

然后在_config.yml找到theme属性，修改它的值（next）,和你下载主题重命名一样

###  报错

在_config.yml设置属性，要空一格，不然报错（title:	我的博客）

使用之前开始pages生成的链接可以访问，结果一些绝对路径引入的文件报错，找不到，解决方法如下：

再次打开_config.yml文件,url使用pages生成的链接，root设置仓库名

```
url: http://y_j_m.gitee.io/hexo/ 
root: /hexo/
```

图片使用腾讯云cos储存