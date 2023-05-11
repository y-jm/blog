---
title: js计算getLocalImgData返回的base64大小
date: 2021-12-02
tags:
- javascript
- html
- 微信公众号
categories: 前端
---
## Base64简介
base64中每6位为一个单元，对应一个打印字符。2的6次方为64，所以base64共64个打印字符，A-Z、a-z、0-9共62个字符，其余两个字符不同的系统中一般有所不同。但是，我们经常所说的Base64另外2个字符是“+/”。64个字符为“A-Za-z0-9+/”。3个字符为一组，不足3个字符的使用=号填充。

一个字节为8位，但base64中6位组成一个字符，所以base64的大小为真实大小的4/3。
```javascript
function imageSize(base64Str) {
    var str=base64Str.length * 0.75;
     // 由字节转换为KB
    return (str/1024).toFixed(2);
}
```
