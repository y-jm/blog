---
title: JS常用函数
date: 2021-11-10
categories: 前端
tags:
- javascript
---
## 1.根据身份证17位判断性别

```javascript
/**
 * @description: 根据身份证第17位判断性别 偶数为女性 奇数为男性
 * @param {*} decardno 身份证号
 * @return {*}
 */
function getSex(cardno) {
    var sex = cardno.substring(16, 17);
    if (sex % 2 == 0) {
        return "女"
    } else {
        return "男";
    }
}
```

### 2.获取月份、日期、周几

```javascript
/**
 * @description: 获取月份、日期、周几
 * @param {*}  
 * @return {*}
 */
function getTimeDay() {
    var nowDate = new Date();
    var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1)
        : nowDate.getMonth() + 1;
    var day = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate
        .getDate();
    var week = nowDate.getDay();
    var dayArr = ["一", "二", "三", "四", "五", "六", "日"];
    return month + "月" + day + "日 周" + dayArr[week - 1];
};
```

### 3.获取年月日

```javascript
/**
 * @description: 获取年月日
 * @param {*}  
 * @return {*}
 */
function getTime() {
    var nowDate = new Date();
    var year = nowDate.getFullYear();
    var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1)
        : nowDate.getMonth() + 1;
    var day = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate
        .getDate();
    return year + "年" + month + "月" + day + "日";
};
```

### 4.格式化货币输出式样

```javascript
/**
 * @description: 格式化货币输出式样
 * @param {*} number 需要格式化的金额
 * @param {*} places 保留小数点
 * @param {*} symbol 金额的符号
 * @param {*} thousand 千位分隔符号
 * @param {*} decimal 小数点分隔的符号
 * @return {*}
 */
function formatMoney(number, places, symbol, thousand, decimal) {
    number = number || 0;
    number.toFixed(2);
    number = number / 100;
    places = !isNaN(places = Math.abs(places)) ? places : 2;
    symbol = symbol !== undefined ? symbol : "$";
    thousand = thousand || ",";
    decimal = decimal || ".";
    var negative = number < 0 ? "-" : "",
        i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
}
```

### 5.获取URL参数

```javascript
/**
 * @description: 获取URL参数
 * @param {*} variable 
 * @return {*}
 */
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return (false);
}
```

### 6.去掉字段所有空格

```javascript
/**
 * 去掉所有空格
 * @param data 参数
 * @return 返回去空格的参数
 */
function removeAllSpace(data) {
    if (data) {
        return data.replace(/\s+/g, "");
    } else {
        return "";
    }
}
```

### 7.封装异步post请求

```javascript
/**
 * @description: 封装post，异步请求
 * @param {*} config 请求配置参数
 * @return {*}
 */
function api_port(url, params) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: url,
            type: 'post',
            data: params,
            success: function (res) {
                if (res.errcode == 0) {
                    resolve(res.result);
                } else {
                    reject(res);
                    weui.topTips("系统忙，请稍后再试，[0x" + res.errcode + "]");
                    throw JSON.stringify(params) + res.errmsg;
                }
            }, error: function (err) {
                weui.topTips("系统忙，请稍后再试。");
                throw err.statusText;
            }
        });
    })
}
```

