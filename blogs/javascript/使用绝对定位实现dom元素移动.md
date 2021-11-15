---
title: 使用绝对定位实现dom元素移动
date: 2021-11-15 22:55
categories:
 - javascript
---

```javascript
drag.onmousedown = function (event) {
            event.preventDefault(); //取消默认的拖放操作
            //获取鼠标在dom元素上的坐标
            var diffX = event.clientX - drag.offsetLeft;
            var diffY = event.clientY - drag.offsetTop;
            window.onmousemove = function (event) {
                //获取鼠标在dom元素上的坐标
                var moveX = event.clientX - diffX;
                var moveY = event.clientY - diffY;
                //防止超出浏览器范围
                if (moveX < 0) {
                    moveX = 0;
                    //限制在浏览器可视区域
                } else if (moveX > window.innerWidth - drag.offsetWidth) {
                    moveX = window.innerWidth - drag.offsetWidth
                }
                //防止超出浏览器范围
                if (moveY < 0) {
                    moveY = 0;
                    //限制在浏览器可视区域
                } else if (moveY > window.innerHeight - drag.offsetHeight) {
                    moveY = window.innerHeight - drag.offsetHeight
                };
                //设置当前移动的位置
                drag.style.left = moveX + 'px';
                drag.style.top = moveY + 'px'
            };
        };
        //清空事件
        drag.onmouseup = function (e) {
            window.onmousemove = null;
            window.onmouseup = null;
        }
```

