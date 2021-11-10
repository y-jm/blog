---
title: 做一个简单的vue
date: 2019-08-12 11:55:05
categories: javascript
tags:
- 前端
- Vue
---

#### 1.简述：

根据vue原理做一个简单的vue

#### 2.原理

vue实现双向绑定基于下面的三大模块：

1. **Observer**：能够对数据对象的所有属性进行监听，如有变动可拿到最新值并通知订阅者

2. **Compile**：对每个元素节点的指令进行扫描和解析，根据指令模板替换数据，以及绑定相应的更新函数

3. **Watcher**：作为连接Observer和Compile的桥梁，能够订阅并收到每个属性变动的通知，执行指令绑定的相应回调函数，从而更新视图

#### Observer

Observer的核心是通过`Obeject.defineProperty()`来监听数据的变动，这个函数内部可以定义`setter`和`getter`，每当数据发生变化，就会触发`setter`。这时候`Observer`就要通知订阅者，订阅者就是`Watcher`。

```javascript
function Observe(data) {
        for (let key in data) {
            let val = data[key];
            observe(val); //递归给每个数据绑定get和set函数
            Object.defineProperty(data, key, {
                enumerable: true,
                get() {
                    return val;
                },
                set(newVal) { //更改值
                    if (newVal === val) return; //如果设置的值一样就中断
                    val = newVal;
                    observe(val); //如果赋值的是对象，继续递归给每个数据绑定get和set函数
                }
            })
        }
    }
 function observe(data){
        if(typeof data!=="object") return ; //如果不是对象，就中断
        return new Observe(data);
    }
```



#### Compile

`Compile`主要做的事情是解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图。

#### Watcher

`Watcher`订阅者作为`Observer`和`Compile`之间通信的桥梁，主要做的事情是：

1. 在自身实例化时往属性订阅器(dep)里面添加自己
2. 自身必须有一个`update()`方法
3. 待属性变动`dep.notice()`通知时，能调用自身的update()方法，并触发`Compile`中绑定的回调