---
title: 备份hexo源文件
date: 2020-02-24 12:58:28
tags:
- hexo
---

## 1.使用分支备份源文件

在gitee上创建hexo分支，然后设置为默认分支，然后clone到本地

把clone下来的文件除了.git文件夹之外都删了，然后把源文件都复制过去

然后执行以下命令即可

```shell
git add .
git commit -m "初始化"
git push origin hexo
```

## 2.更换主题

### 1.克隆主题文件

```shell
git clone https://github.com/sabrinaluo/hexo-theme-replica.git themes/replica
```

### 2.设置_config.yml

找到 theme: landscape 更换成 theme: replica

## 3.创建categories、tags选项

生成“分类”页并添加tpye属性,进入博客目录。执行命令下方命令

```shell
hexo new page categories
```

categories文件夹下会有index.md这个文件，打开后默认内容是这样的：

``` shell
---
title: categories
date: 2020-02-24 14:00:22
---
```

添加type: "categories"到内容中，添加后是这样的：

```shell
---
title: categories
date: 2020-02-24 14:00:22
type: categories
---
```

tags也是如此

## 4.bug

如果使用 `git add .`出现下面的问题，则需要把themes/replica中的.git给删除掉

```shell
warning: adding embedded git repository: themes/replica
```



