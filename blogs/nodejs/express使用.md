---
title: express使用
date: 2021-12-27 22:10
categories:
 - nodejs
tags:
 - express
---
## 1.安装

```shell
yarn add express
```

## 2.基本配置

```javascript
const express=require("express");
const app=express();
//配置路由
app.get("/",(req,res)=>{
  res.json({status:0,msg:"请求成功"})
   //res.send({status:0,msg:"请求成功"})
});
//指定端口
app.listen(8080,()=>{console.log("running in http://127.0.0.1:8080")});
```

一个简单的web服务就出来了

## 3.解析post请求数据
### 3.1 application/www-form-urlencoded

express4.17.1版本解析post现在内置解析请求体
```javascript
app.use(express.urlencoded({ extended: false }))
```
### 3.2 application/json
```javascript
app.use(express.json())
```

### 3.3 multipart/form-data
使用multiparty中间件
#### 1.安装
```bash
npm install multiparty -S
```
#### 2.示例
```javascript
const multiparty = require('multiparty');

app.post("/api/msg/send",(req,res)=>{
    let form = new multiparty.Form();
    form.parse(req, function(err,fields,file){
        if(err){
            console.log(err);
        }
        console.log(fields);
    })
    res.send("数据已接收")
})
```
## 4.解决跨域
安装cors中间件
```bash
yarn add cors -S
```
然后在通过下面配置好就解决了

```javascript
var express = require("express");
var app = express();
const cors = require("cors");
app.use(cors());
```
