---
title: mac m1 安装oh-my-zsh
date: 2021-07-19 00:04
categories:
 - macos
tags:
 - zsh
---
## 简述

mac  m1 安装oh-my-zsh，使用autosuggestion插件，可以在命令行根据历史输入指令记录即时提示，能提高在终端的效率

## 安装

```bash
git clone git://github.com/robbyrussell/oh-my-zsh.git ~/.oh-my-zsh
```

### 导入模版配置

```shell
cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc
vi ~/.zshrc #看看是否已经拷贝进去
source ~/.zshrc #更新zsh 看是不是已经生效
```

## 安装autosuggestion

```bash
git clone git://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions
source ~/.zshrc #更新zsh 看是不是已经生效
```

编辑~/.zshrc文件,找文件中找到plugins这一项添加

```bash
vi ~/.zshrc
#plugins=(git) 改成 plugins=(git zsh-autosuggestions)
source ~/.zshrc #更新zsh 看是不是已经生效
```

