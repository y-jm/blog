---
title: 原生JS手势判断
date: 2021-07-18
categories: javascript
---
# 原生JS手势判断

```javascript
// 开始按下手机的起点坐标
    var startPoint = null;
    document.addEventListener("touchstart",function(e){
    	var e = e||window.event;
    	startPoint = e.touches[0];
    })
    document.addEventListener("touchend",function(e){
    		var e=e||window.event;
    		//e.changedTouches能找到离开手机的手指，返回的是一个数组
    		var endPoint = e.changedTouches[0];
    		//计算终点与起点的差值
    		var x = endPoint.clientX - startPoint.clientX;
    		var y = endPoint.clientY - startPoint.clientY;
    		//设置滑动距离的参考值
    		var d = 10;
    		if(Math.abs(x)>d){
    			if(x>0){
    			console.log("向右滑动");
    			}else{
    			console.log("向左滑动");
    			}
    		}
    		if(Math.abs(y)>d){
    			if(y>0){
    			console.log("向下滑动");
    			}else{
    			console.log("向上滑动");
    			}
    		}
    	
    })
```

来源自：https://blog.csdn.net/gg451516921/article/details/79133416

