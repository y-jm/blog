---
title: git入门
date: 2021-12-02 12:26:46
tags:
- git
---
# git总结

## 1.安装

安装网上的教程就行了🚗

## 2.环境配置

配置用户的标识

```bash
git config ---global user.name "用户名"
git config --global user.email "邮箱地址"
git config --global --list  #查看配置是否成功
```

## 3.基本概念

git本地有三个工作区域，分别是工作区（Working Directory），暂存区（Stage/Index）、资源库（Repository或Git Directory），如果在加上远程的git仓库（Remote Directory）就可以分为四个工作区域。文件在这四个区域之前的转换关系如下

- **工作区：**就是你在电脑里能看到的目录。
- **暂存区：**英文叫 stage 或 index。一般存放在 **.git** 目录下的 index 文件（.git/index）中，所以我们把暂存区有时也叫作索引（index）。
- **资源库：**工作区有一个隐藏目录 **.git**，这个不算工作区，而是 Git 的版本库。
- **远程仓库：**远程托管的服务器，如github、gitee等

git的工作流程一般是：

1. 在工作目录中添加、修改文件
2. 将需要进行版本管理的文件放入暂存区域  `git add .`
3. 将暂存区域的文件提交到git仓库 `git commit -m 'first commit'

因此，git管理的文件有三种状态：已修改（modified），已暂存（staged），已提交（committed）

## 4.文件操作

### 文件的4种状态

版本控制就是对文件的版本控制，要对文件进行修改、提交等操作，首先要知道文件当前在什么状态，不如可能会提交了现在还不想提交的文件，或者要提交的文件没提交上。

- Untracked: 未跟踪，至文件在文件夹中，但并没有加入git库，不参与版本控制，通过`git add`状态变为` staged`.
- Unmodify: 文件已经入库，未修改，即版本库中的文件快照内容和文件夹中完全一致，这种类型的文件有两种去处，如果他被修改，而变为`modified`.如果使用`git rm`移出版本库，则成为`untracked`文件
- Modified: 文件已修改，仅仅是修改，并没有进行其他的操作，这个文件也有两个去处，通过`git add` 可进入暂存`staged`状态，使用`git checkout`则丢弃修改过，返回`unmodfiy`状态，这个`git checkout`即从库中取出文件，覆盖当前修改
- Staged: 暂存状态，执行`git commit` 则将修改同步到库中，这时库中的文件和本地文件又变为一致，文件为`unmodify`状态，执行`git reset HEAD filename`取消暂存，文件状态为`modified`

可以通过下面命令查看文件的状态

```bash
git status #查看所有
git status [filename] #查看单个文件
```

## 5.Git 分支管理

```bash
git init -y # git init 默认创建一个master
```

手动创建分支命令：

```bash
git branch test  #创建一个test
```

切换分支命令：

```bash
git checkout test 
```

我们也可以使用 git checkout -b (branchname) 命令来创建新分支并立即切换到该分支下，从而在该分支中操作。

列出分支基本命令：

```bash
git branch
git branch -a #查看所有分支包括远程分支
* master  # *为当前分支
```

删除分支命令：

```bash
git branch -d (本地分支)
git push origin --delete (远程分支) #删除远程分支
```

远程分支命令：

```bash
git push origin test 
```

## 6.克隆仓库

```bash
git clone 仓库地址
```

### 本地连接远程仓库

```bash
#git初始化
git init
#设置remote地址
git remote add 仓库地址
#将全部文件加入git版本管理 .的意思是将当前文件夹下的全部文件放到版本管理中
git add .
#提交文件 使用-m 编写注释
git commit -m "fisrt commit"
#推送到远程分支
git push
```

### git首次push本地没有README文件提示pull解决

```bash
git pull --rebase origin master
```

## 7.回滚

```bash
git reset --hard HEAD^ 回退到上个版本
git reset --hard 指定commit的哈希码
```

