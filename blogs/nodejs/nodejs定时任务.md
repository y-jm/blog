---
title: nodejs定时任务
date: 2022-08-29
categories: nodejs
---

## 1.安装
```bash
npm install node-schedule --save
```
## 2.用法
使用`schedule.scheduleJob`便可创建一个定时任务
```javascript
const schedule = require('node-schedule');

const  scheduleTest = ()=>{
    //每分钟的第10秒定时执行一次:
      schedule.scheduleJob('10 * * * * *',()=>{
          console.log('scheduleTest:' + new Date());
      });
  }
scheduleTest();
```

时间数值按下表表示
6个占位符从左到右分别代表：秒、分、时、日、月、周几
 \*   \*   \*   \*   \*   \*
\┬ \┬ \┬ \┬ \┬ \┬
 │     │   │    │    │    |
 │     │   │    │    │   └ 星期几，取值：0 - 7，其中 0 和 7 都表示是周日
 │     │   │    │   └─── 月份，取值：1 - 12
 │     │   │  └────── 日期，取值：1 - 31
 │     │ └───────── 时，取值：0 - 23
 │   └──────────── 分，取值：0 - 59
└─────────────── 秒，取值：0 - 59（可选）
 对象文本语法定时器
```javascript
const schedule = require('node-schedule');
//dayOfWeek 星期几
//month 月份
//dayOfMonth 日期
//hour  时
//minute 分
//second 秒
    //每周一的下午16：11分触发，其它组合可以根据我代码中的注释参数名自由组合
var j=schedule.scheduleJob({hour: 16, minute: 11, dayOfWeek: 1}, function(){
    console.log('scheduleTest:' + new Date());
});
//取消定时任务
j.cancel();
```