---
title: js分页算法
date: 2021-01-30 12:32:38
tags: JS
---

int pagesize // 每页记录数

int recordcount // 总记录数

int pagecount // 总页数

**pagecount=(recordcount+pagesize-1)/pagesize**

此方法得出的结果为实际页码

**pagecount=(recordcount-1)/pagesize**

此方法得出的结果为实际页码-1

注:两个整数相除的结果始终是整数。例如：5除以2的结果为2。若要确定5除以2的余数，请使用modulo运算符(%)。若要获取作为有理数或分数的商，应将被除数或除数设置为float或double型。可以通过在数字后添加一个小数点来隐式执行此操作。

原文来源于：[简书](https://www.jianshu.com/p/3f92bc897b5a)