---
title: 使用pkg打包
date: 2021-12-27 21:04
categories:
 - nodejs
tags:
 - pkg
---
### 1.安装

```shell
yarn add pkg -D
```

### 2.package.json配置

```json
"scripts": {
    "pkg": "pkg . --out-path=dist/" //打包到指定目录
  },
  "pkg": {
    "assets": ["views/**/*"]  //打包的静态文件
    "targets": [	// 打包指定的版本
  	"node12.22.7-win-x64",
     "node12.22.7-macos-x64",
     "node12.22.7-linux-x64"
		],
  },
```

### 3.可能遇到问题

第一次打包的时候，会遇到下包很慢很可能超时的问题

到https://github.com/zeit/pkg-fetch/releases下载对应的包，然后包移动到~/.pkg-cache/v3.2目录下
