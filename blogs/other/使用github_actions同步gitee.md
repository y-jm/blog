---
title: 使用github_actions完成github仓库和gitee仓库同步
date: 2022-08-31
tags:
- github
- gitee
- actions
---
## 1.简述
使用github actions完成github仓库和gitee仓库同步
## 2.生成密钥
输入`ssh-keygen`命令生成密钥，文件带`.pub`为公钥，不带就是私钥
```bash
ssh-keygen
```
```bash
➜  ~ ll
-rw-------  1 y  staff   2.5K Aug 31 23:21 id_rsa
-rw-r--r--  1 y  staff   576B Aug 31 23:21 id_rsa.pub
```
## 3.添加公钥
**github和gitee两边都需要配置公钥**

登录gitee，点击个人头像下的设置，添加个人公钥（仓库的公钥只能读取），github也差不多
![](https://img.xiyangyang.cc/blog/%E6%88%AA%E5%B1%8F2022-08-31%20%E4%B8%8B%E5%8D%8810.26.44.png)
![](https://img.xiyangyang.cc/blog/%E6%88%AA%E5%B1%8F2022-08-31%20%E4%B8%8B%E5%8D%8810.30.07.png)
## 4.添加私钥
在github项目仓库设置中添加
![添加私钥截图](https://img.xiyangyang.cc/blog/20220831224839.png)
![](https://img.xiyangyang.cc/blog/20220831225215.png)

## 5.acitons
点击`new workflows`，在点击`set up a workflow yourself `，最后出现一个模版，完善你的工作流程，最后点击右边的`start commit`按钮保存
![](https://img.xiyangyang.cc/blog/20220831225929.png)
![](https://img.xiyangyang.cc/blog/20220831230032.png)
![](https://img.xiyangyang.cc/blog/20220831230228.png)

由于是监听的`push`,所以它会马上触发一次，出现绿色图标则说明执行成功，红色则执行失败

![](https://img.xiyangyang.cc/blog/20220831231302.png)
## 6.示例
```yml
name: sync_to_gitee
# 监听push 
on: push
jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - uses: wearerequired/git-mirror-action@master
        env:
        # 添加的私钥
          SSH_PRIVATE_KEY: ${{ secrets.GETEE_KEY }}
        with:
          #github ssh仓库地址
          source-repo: "git@github.com:****/blog.git"
          # gitee ssh仓库地址
          destination-repo: "git@gitee.com:****/blog.git"
```
