---
title: express使用
date: 2021-12-27 22:10
categories:
 - nodejs
tags:
 - express
---
### 1.安装

```shell
yarn add express
```

### 2.基本配置

```javascript
const express=require("express");
const app=express();
//配置路由
app.get("/",(req,res)=>{
  res.json({status:0,msg:"请求成功"})
   //res.send({status:0,msg:"请求成功"})
});
//指定端口
app.listen(10000);
```

一个简单的web服务就出来了
