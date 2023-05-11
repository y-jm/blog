---
title: 使用webhook自动更新远程git仓库
date: 2021-12-08
tags:
- git
- nodejs
- linux
---
## 1.简介

通过webhook自动更新git远程仓库

## 2.安装

```shell
yarn add  express -S #搭建web服务器
yarn add  child_process -S #执行shell命令
```

## 3.对.sh赋予可执行权限

`update.sh`内容如下：

```sh
cd /usr/local/blog && git pull
```

```bash
chmod u+x update.sh #赋予可执行权限
```

## 4.构建web服务器

通过web服务器接收请求，执行shell脚本，达到自动更新仓库效果

```javascript
const express=require("express");
const app = express();
const child_process = require('child_process');
// 自定义跨域中间件
var allowCors = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
};
app.use(allowCors); //使用跨域中间件
app.use(express.urlencoded({
    extended: false
}))
app.use(express.json());


app.get("/blog/update",function(req,res){
    console.log("update start");
    child_process.exec('sh update.sh', function(err, sto) {
        console.log("update end");
    })
    res.status=200;
    res.send();
})
app.listen(10000);
```

