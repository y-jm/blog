---
title: 使用mysql2连接数据库
date: 2022-08-29
categories: nodejs
---
## 1.安装
```bash
npm install mysql2 -S
```

## 2.连接
```javascript
const mysql = require('mysql2');
 
const connections = mysql.createPool({
    host: "",     //主机地址
    database: "", //数据库
    port: "",    //端口
    user: "",    //用户名
    password: "" //密码
})
 
 
// 测试数据库是否连接成功
connections.getConnection((err, conn) => {
    conn.connect((err) => {
        if (err) {
            console.log('连接失败~');
        } else {
            console.log('连接成功~');
        }
    })
})
 
module.exports = connections.promise();
```