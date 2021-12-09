---
title: 使用express的常见问题
date: 2021-12-09 22:18
categories:
 - nodejs
tags:
 - express
---
## 1.cors

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

## 2.解析post请求数据

### 2.1 application/www-form-urlencoded

express4.17.1版本解析post现在内置解析请求体

设置下面两行代码即可解析，然后通过

```javascript
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
```

### 2.2 application/json

通过`application/json`提交参数，参数需要JSON.stringify转换一下，其它设置同上
