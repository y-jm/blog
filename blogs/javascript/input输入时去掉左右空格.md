---
title: input输入时去掉左右空格
date: 2021-11-11 19:11:14
tags:
- javascript
- html
categories: 前端
---
```html
oninput="this.value=this.value.replace(/^\s|\s$/g,'')"
```



