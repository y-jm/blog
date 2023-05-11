---
title: JS利用时间差模拟鼠标双击事件
date: 2020-08-13
categories: javascript
---

```javascript
var touchtime = new Date().getTime();
    $("#btn1").on("click", function(){
        if( new Date().getTime() - touchtime < 500 ){
            console.log("dblclick");
        }else{
            touchtime = new Date().getTime();
            console.log("click")
        }
    });
```

