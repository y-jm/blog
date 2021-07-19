---
title: JS数组常用的属性和方法
date: 2020-07-16 11:11:14
categories: javascript
---
##### length 属性判断数组的长度

```javascript
var arr=[11,22,33];
console.log(arr.length);
//打印 3
```

##### indexOf() 返回所找元素的索引，没有则返回-1

```javascript
var arr=[11,22,33];
console.log(arr.indexOf(22)) 
// 打印 1
var arr=[11,22,33];
console.log(arr.indexOf(6666)) 
// 打印 -1
```

##### toString()把数组转换成字符串

```javascript
var arr=[11,22,33];
console.log(arr.toString());
// 打印 11,22,33
```

##### join类似 toString(),但是还可以规定分隔符

```javascript
var arr=[11,22,33];
console.log(arr.join(""));
// 打印 112233
console.log(arr.join("*")); //用*分隔
// 打印 11*22*33
```

##### unshift() 方法（在开头）向数组添加新元素

```javascript
var arr=[11,22,33];
var len=arr.unshift("zero");//返回添加后新数组的长度
console.log(arr);
// 打印 ["zero", 11, 22, 33]
```

##### push() 方法在数组结尾处添加一个新的元素

```javascript
 var arr=[11,22,33];
 var len= arr.push(66); //返回添加后新数组的长度
console.log(arr);
// 打印 [11, 22, 33, 66]
```

##### shift() 方法删除数组中第一个元素

```javascript
var arr=[11,22,33];
var  r = arr.shift();//方法返回删除的值
console.log(arr);
// 打印 [22,33]
```

##### pop() 方法从数组中删除最后一个元素

```javascript
var arr=[11,22,33];
var  r =arr.pop(); //方法返回删除的值
console.log(arr);
// 打印 [11, 22]
```

##### 更改元素

通过对应的索引更改对应的值

数组*索引（下标）*以 0 开始。[0] 是第一个数组元素，[1] 是第二个，以此类推

```javascript
var arr=[11,22,33];
    arr[0]=888
console.log(arr);
// 打印 [888, 22, 33]
```

##### 删除元素

使用 JavaScript delete 运算符来删除

```javascript
var arr=[11,22,33];
    delete arr[1];
console.log(arr);
// 打印  [11, empty, 33]
// 使用 delete 会在数组留下未定义的空洞。请使用 pop() 或 shift() 取而代之。
```

##### 使用splice() 方法插入新元素

第一个参数（2）定义了应添加新元素的位置（拼接）。

第二个参数（0）定义应删除多少元素。

其余参数（“Lemon”，“Kiwi”）定义要添加的新元素。

splice() 方法返回一个包含已删除项的数组：

```javascript
var arr=[11,22,33];
var r=arr.splice(2,0,"abc"); //返回删除的元素 
console.log(arr);
// 打印 [11, 22, "abc", 33]
```

##### 使用splice删除元素

splice() 在数组中不留“空洞”的情况下移除元素

```javascript
var arr=[11,22,33];
var r =arr.splice(0,1); //返回删除的元素
console.log(arr);
//打印 [22,33]
```



##### concat() 方法组合一个新的数组

```javascript
var arr=[1,2,3];
var arr1=[3,4,6];
var x=arr.concat(arr1); //返回一个新数组
console.log(x);
// 打印 [1, 2, 3, 3, 4, 6]
```

##### slice() 截取数组中部分元素

```javascript
var arr=["a","b","c"];
var r=arr.slice(0,2); //返回截取的元素，从索引0开始，到索引2结束,但是不包括索引2
arr.slice(2); //从索引2到结束，包含索引2
console.log(r); //打印 ["a", "b"]
//如果不给slice()传递任何参数，它就会从头到尾截取所有元素。
```

##### sort() 可以对当前Array进行排序，它会直接修改当前Array的元素位置

```javascript
var arr=[34,123,2,3];
var abc=["apple","door","zip","block"];
abc.sort();
arr.sort(); //[123, 2, 3, 34],sort通过首位字符进行比对，所以“123”比”2“小
//可以通过比值函数来修正此问题
console.log(arr.sort(function(a,b){return a-b}));
//打印 [2, 3, 34, 123]
```

##### reverse() 反转数组

```javascript
var abc=["apple","door","zip","block"];
console.log(abc.reverse());
// 打印 ["block", "zip", "door", "apple"]
```

##### filter() 过滤方法返回的是数组中每一个元素都符合条件的元素,组成了一个新的数组

```javascript
var arr = [10, 20, 30, 40, 50];
    var newArr = arr.filter(function (ele) {//ele---每个元素
      return ele > 40;
    });
    console.log(newArr); //打印 50
```

注：

slice() 、concat()、filter()会返回新数组。而其他方法会改变数组。