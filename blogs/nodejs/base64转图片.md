---
title: base64转图片
date: 2021-12-10 21:04
categories:
 - nodejs
---
```javascript
var fs = require('fs');
//去掉前缀
var base64 = base64Url.replace(/^data:image\/\w+;base64,/, "");
//把base64码转成buffer对象
var dataBuffer = Buffer.from(base64, 'base64'); 
//用fs写入文件
//path='images/qqwe21232.png'
fs.writeFile(path,dataBuffer,function(err){
    if(err){
            console.error(err);
    }else{
         console.log('写入成功！');
    }
});
```

