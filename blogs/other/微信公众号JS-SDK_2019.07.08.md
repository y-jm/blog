---
title: 微信公众号JS-SDK
date: 2019-07-08 12:00:00
tags: 
- 微信公众号
- nodeJS
---

## 1.简介

​		微信JS-SDK ( JavaScript Software Development Kit )是微信公众平台面向网页开发者提供的基于微信内的网页开发工具包。

## 2.功能

​		通过使用微信JS-SDK，网页开发者可借助微信高效地使用拍照、选图、语音、位置等手机系统的能力，同时可以直接使用微信分享、扫一扫、卡券、支付等微信特有的能力，为微信用户提供更优质的网页体验。

​		简单来说，使用JS-SDK我们可以引入外部网页。

## 3.使用步骤

### 		3.1绑定域名

由于配置必须要一个域名，我这里使用[natapp](https://natapp.cn/)内网穿透用于测试，怎么配置请看配置说明

![1562232359293](https://img.xiyangyang.cc/blog/1562232359293.png)

<font color="red"> 	注：JS接口域名前面不能加http或者https,不然报路径错误 </font>

### 3.3引入JS文件

​		在需要调用JS接口的页面引入如下JS文件，（支持https）：http://res.wx.qq.com/open/js/jweixin-1.4.0.js

### 3.2 通过config接口注入权限验证配置

​		所有需要使用JS-SDK的页面必须先注入配置信息，否则将无法调用（同一个url仅需调用一次，对于变化url需要动态获取配置），配置信息由后台根据微信提供的签名算法生成。

```javascript
wx.config({
    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: '', // 必填，公众号的唯一标识
    timestamp: , // 必填，生成签名的时间戳
    nonceStr: '', // 必填，生成签名的随机串
    signature: '',// 必填，签名
    jsApiList: [] // 必填，需要使用的JS接口列表
});
```



### 3.4通过ready接口处理成功验证

```javascript
wx.ready(function(){    // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
});
```

### 3.5通过error接口处理失败验证

```javascript
wx.error(function(res){    // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
});
```

#### 接口调用说明

所有接口通过wx对象(也可使用jWeixin对象)来调用，参数是一个对象，除了每个接口本身需要传的参数之外，还有以下通用参数：

1.success：接口调用成功时执行的回调函数。

2.fail：接口调用失败时执行的回调函数。

3.complete：接口调用完成时执行的回调函数，无论成功或失败都会执行。

4.cancel：用户点击取消时的回调函数，仅部分有用户取消操作的api才会用到。

5.trigger: 监听Menu中的按钮点击时触发的方法，该方法仅支持Menu中的相关接口。

备注：不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回。

以上几个函数都带有一个参数，类型为对象，其中除了每个接口本身返回的数据之外，还有一个通用属性errMsg，其值格式如下：

调用成功时："xxx:ok" ，其中xxx为调用的接口名

用户取消时："xxx:cancel"，其中xxx为调用的接口名

调用失败时：其值为具体错误信息

其它接口详情请看：https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115

## 4.nodeJS配置后台服务器

### 4.1使用express框架搭建服务器

#### 4.1.1安装

使用npm install express -S 安装express

#### 4.1.2使用

app.js

```javascript
const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
```

使用node app.js运行，访问localhost:3000即可访问。

### 4.2生成js-sdk签名

生成签名之前必须先了解一下jsapi_ticket，jsapi_ticket是公众号用于调用微信JS接口的临时票据。正常情况下，jsapi_ticket的有效期为7200秒，通过access_token来获取。

#### 4.2.1获取access_token

access_token是公众号的全局唯一接口调用凭据，公众号调用各接口时都需使用access_token。开发者需要进行妥善保存。access_token的存储至少要保留512个字符空间。access_token的有效期目前为2个小时，需定时刷新，重复获取将导致上次获取的access_token失效。

公众平台的API调用所需的access_token的使用及生成方式说明：

1、建议公众号开发者使用中控服务器统一获取和刷新access_token，其他业务逻辑服务器所使用的access_token均来自于该中控服务器，不应该各自去刷新，否则容易造成冲突，导致access_token覆盖而影响业务；

2、目前access_token的有效期通过返回的expire_in来传达，目前是7200秒之内的值。中控服务器需要根据这个有效时间提前去刷新新access_token。在刷新过程中，中控服务器可对外继续输出的老access_token，此时公众平台后台会保证在5分钟内，新老access_token都可用，这保证了第三方业务的平滑过渡；

3、access_token的有效时间可能会在未来有调整，所以中控服务器不仅需要内部定时主动刷新，还需要提供被动刷新access_token的接口，这样便于业务服务器在API调用获知access_token已超时的情况下，可以触发access_token的刷新流程。

公众号和小程序均可以使用AppID和AppSecret调用本接口来获取access_token。AppID和AppSecret可在“微信公众平台-开发-基本配置”页中获得（需要已经成为开发者，且帐号没有异常状态）。**调用接口时，请登录“微信公众平台-开发-基本配置”提前将服务器IP地址添加到IP白名单中，点击查看设置方法，否则将无法调用成功。**小程序无需配置IP白名单。

**接口调用请求说明**

```
https请求方式: GEThttps://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET
```

nodeJS获取access_token代码如下：

```javascript
//使用promise异步处理请求，返回promise对象
//config.appID config.appSecret 测试号的appID和appsecret
getaccessToken(){
const url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${config.appID}&secret=${config.appSecret}`
        //发送请求
        return new Promise((resolve, reject) => {
            rp({
                method: 'GET',
                url,
                json: "true"
            }).then(res => {
                console.log(res)
                /*成功返回如下JSON：
                { access_token:
                  '22_Z_qEv9jVwEpdMmXER8pRNFBDQbDgw1wvkE0nrAZaRbRHfnJ_qvIlS16vgMir8ozJG_3bogp7vWyJcrfbeu5knIMeTPEpxyKVYMp4BVebRPzBgnR3j3MuqCZFfyp6AmjQi7fHuebQ-zv2CGr1ONSjAHAAZE',
                   expires_in: 7200 }*/
                res.expires_in = Date.now() + (res.expires_in - 300) * 1000;
                resolve(res);
            }).catch(err => {
                reject("获取getAccessKoten失败" + err)
            })
        })
}
```

#### 4.1.2获取jsapi_ticket

用4.2.1拿到的access_token 采用http GET方式请求获得jsapi_ticket（有效期7200秒，开发者必须在自己的服务全局缓存jsapi_ticket）：https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=ACCESS_TOKEN&type=jsapi

```javascript
 getTicket() {
        ////使用promise异步处理请求，返回promise对象
        return new Promise(async (resolve, reject) => {
            //定义请求地址
            //https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=ACCESS_TOKEN&type=jsapi
            const data = await this.getaccessToken();
            const url = `https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=${data.access_token}&type=jsapi`
            rp({
                method: 'GET',
                url: url,
                json: "true"
            }).then(res => {
                /*成功返回如下JSON：
                { access_token:
                    '22_Z_qEv9jVwEpdMmXER8pRNFBDQbDgw1wvkE0nrAZaRbRHfnJ_qvIlS16vgMir8ozJG_3bogp7vWyJcrfbeu5knIMeTPEpxyKVYMp4BVebRPzBgnR3j3MuqCZFfyp6AmjQi7fHuebQ-zv2CGr1ONSjAHAAZE',
                   expires_in: 7200 }*/
                // res.expires_in=Date.now()+(res.expires_in-300)*1000;
                resolve({
                    ticket: res.ticket,
                    expires_in: Date.now() + (res.expires_in - 300) * 1000
                });
            }).catch(err => {
                reject("获取getTicket失败" + err)
            })
        })

    }
```

获得jsapi_ticket之后，就可以生成JS-SDK权限验证的签名了。

#### 4.1.3生成JS-SDK权限验证的签名

签名生成规则如下：参与签名的字段包括noncestr（随机字符串）, 有效的jsapi_ticket, timestamp（时间戳）, url（当前网页的URL，不包含#及其后面部分） 。对所有待签名参数按照字段名的ASCII 码从小到大排序（字典序）后，使用URL键值对的格式（即key1=value1&key2=value2…）拼接成字符串string1。这里需要注意的是所有参数名均为小写字符。对string1作sha1加密，字段名和字段值都采用原始值，不进行URL 转义。

即signature=sha1(string1)。 示例：

```
noncestr=Wm3WZYTPz0wzccnW
jsapi_ticket=sM4AOVdWfPE4DxkXGEs8VMCPGGVi4C3VM0P37wVUCFvkVAy_90u5h9nbSlYy3-Sl-HhTdfl2fzFy1AOcHKP7qg
timestamp=1414587457
url=http://mp.weixin.qq.com?params=value
```

步骤1. 对所有待签名参数按照字段名的ASCII 码从小到大排序（字典序）后，使用URL键值对的格式（即key1=value1&key2=value2…）拼接成字符串string1：

```
jsapi_ticket=sM4AOVdWfPE4DxkXGEs8VMCPGGVi4C3VM0P37wVUCFvkVAy_90u5h9nbSlYy3-Sl-HhTdfl2fzFy1AOcHKP7qg&noncestr=Wm3WZYTPz0wzccnW&timestamp=1414587457&url=http://mp.weixin.qq.com?params=value
```

步骤2. 对string1进行sha1签名，得到signature：

```
0f9de62fce790f9a083d5c99e95740ceb90c27ed
```

具体代码如下：

sign.js

```javascript
var createNonceStr = function () {
  return Math.random().toString(36).substr(2, 15);
};

var createTimestamp = function () {
  return parseInt(new Date().getTime() / 1000) + '';
};

var raw = function (args) {
  var keys = Object.keys(args);
  keys = keys.sort()
  var newArgs = {};
  keys.forEach(function (key) {
    newArgs[key.toLowerCase()] = args[key];
  });

  var string = '';
  for (var k in newArgs) {
    string += '&' + k + '=' + newArgs[k];
  }
  string = string.substr(1);
  console.log(string)
  return string;
};

/**
* @synopsis 签名算法 
*
* @param jsapi_ticket 用于签名的 jsapi_ticket
* @param url 用于签名的 url ，注意必须动态获取，不能 hardcode
*
* @returns
*/
var sign = function (jsapi_ticket, url) {
  var ret = {
    jsapi_ticket: jsapi_ticket,
    nonceStr: createNonceStr(),
    timestamp: createTimestamp(),
    url: url
  };
  var string = raw(ret);
      jsSHA = require('jssha');
      shaObj = new jsSHA(string, 'TEXT');
  ret.signature = shaObj.getHash('SHA-1', 'HEX');

  return ret;
};

module.exports = sign;

```

#### 4.1.4测试

使用微信开发工具测试，成功如下图：

![1562549568548](https://img.xiyangyang.cc/blog/20190708/1562549568548.png)

#### 4.1.5缓存access_token和jsapi_ticket

由于access_token和jsapi_ticke有效期7200秒，开发者必须在自己的服务全局缓存jsapi_ticket，我缓存为txt文件，具体代码如下：

wechat.js

```javascript
const config = require("./config.json")
const rp = require('request-promise-native');
const path=require('path');
const {
    writeFile,
    readFile
} = require("fs");
class Wechat {
    /**
     * 获取access_token
     */
    getAccessToken() {
        //定义请求地址
        //https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET
        const url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${config.appID}&secret=${config.appSecret}`
        //发送请求
        return new Promise((resolve, reject) => {
            rp({
                method: 'GET',
                url,
                json: "true"
            }).then(res => {
                console.log(res)
                /*返回的结果对象
                { access_token:
                    '22_Z_qEv9jVwEpdMmXER8pRNFBDQbDgw1wvkE0nrAZaRbRHfnJ_qvIlS16vgMir8ozJG_3bogp7vWyJcrfbeu5knIMeTPEpxyKVYMp4BVebRPzBgnR3j3MuqCZFfyp6AmjQi7fHuebQ-zv2CGr1ONSjAHAAZE',
                   expires_in: 7200 }*/
                res.expires_in = Date.now() + (res.expires_in - 300) * 1000;
                resolve(res);
            }).catch(err => {
                reject("获取getAccessKoten失败" + err)
            })
        })

    }
    /**
     * 读取access_token
     */
    readAccessToken() {
        return new Promise((resolve, reject) => {
            readFile(path.resolve(__dirname,"accessToken.txt"), (err, data) => {
                if (!err) {
                    console.log("读取成功");
                    data = JSON.parse(data)
                    resolve(data);
                } else {
                    reject("读取access——token报错" + err);
                }
            })
        })
    }
    /**
     * 用来检测access_token是否有效
     */
    isVaildAccessToken(data) {
        if (!data && !data.accessToken && !data.expires_in) {
            return false;
        }
        return data.expires_in > Date.now();
    }
    /*
     * 保存access_token
     * */
    saveAccessToken(accessToken) {
        return new Promise((resolve, reject) => {
            accessToken = JSON.stringify(accessToken)
            writeFile(path.resolve(__dirname,"accessToken.txt"), accessToken, err => {
                if (!err) {
                    console.log("保存成功");
                    resolve();
                } else {
                    reject("保存access——token报错" + err);
                }
            })
        })
    }
    /**
     * 用来获取没有过期的access_token
     */
    fetchAccessToken() {
        if (this.access_token && this.expires_in && this.isVaildAccessToken(this)) {
            //说明之前保存过access_token,并且它是有效的，直接使用
            return Promise.resolve({
                access_token: this.access_token,
                expires_in: this.expires_in
            })
        }
        return this.readAccessToken()
            .then(async res => {
                //本地有文件
                //判断是否过期
                if (this.isVaildAccessToken(res)) {
                    //有效
                    return Promise.resolve(res);
                } else {
                    //过期了
                    //发送请求获取access_token
                    const res = await this.getAccessToken();
                    //保存为本地文件
                    await this.saveAccessToken(res);
                    return Promise.resolve(res);
                }
            })
            .catch(async err => {
                //没有本地文件
                //发送请求获取access_token
                const res = await this.getAccessToken();
                //保存为本地文件
                await this.saveAccessToken(res);
                return Promise.resolve(res);
            })
            .then(res => {
                this.access_token = res.access_token;
                this.expires_in = res.expires_in;
                return Promise.resolve(res)
            })
    }
    /**
     * @description: 获取jsapi_ticket
     * @param {type}
     * @return:
     */
    getTicket() {
        //发送请求
        return new Promise(async (resolve, reject) => {
            //定义请求地址
            //https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=ACCESS_TOKEN&type=jsapi
            const data = await this.fetchAccessToken();
            const url = `https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=${data.access_token}&type=jsapi`
            rp({
                method: 'GET',
                url: url,
                json: "true"
            }).then(res => {
                /*{ access_token:
                    '22_Z_qEv9jVwEpdMmXER8pRNFBDQbDgw1wvkE0nrAZaRbRHfnJ_qvIlS16vgMir8ozJG_3bogp7vWyJcrfbeu5knIMeTPEpxyKVYMp4BVebRPzBgnR3j3MuqCZFfyp6AmjQi7fHuebQ-zv2CGr1ONSjAHAAZE',
                   expires_in: 7200 }*/
                // res.expires_in=Date.now()+(res.expires_in-300)*1000;
                resolve({
                    ticket: res.ticket,
                    expires_in: Date.now() + (res.expires_in - 300) * 1000
                });
            }).catch(err => {
                reject("获取getTicket失败" + err)
            })
        })

    }

    /**
     * 获取ticket
     */
    saveTicket(Ticket) {
        return new Promise((resolve, reject) => {
            Ticket = JSON.stringify(Ticket)
            writeFile(path.resolve(__dirname,"ticket.txt"), Ticket, err => {
                if (!err) {
                    console.log("保存成功");
                    resolve();
                } else {
                    reject("保存ticket报错" + err);
                }
            })
        })
    }
    /**
     * 读取jsapi_ticket
     */
    readTicket() {
        return new Promise((resolve, reject) => {
            readFile(path.resolve(__dirname,"ticket.txt"), (err, data) => {
                if (!err) {
                    console.log("读取成功");
                    data = JSON.parse(data)
                    resolve(data);
                } else {
                    reject("读取ticket——token报错" + err);
                }
            })
        })
    }

    /**
     * 用来检测ticket是否有效
     */
    isVaildTicket(data) {
        if (!data && !data.ticket && !data.expires_in) {
            return false;
        }
        return data.expires_in > Date.now();
    }
    /**
     * 用来获取没有过期的ticket
     */
    fetchTicket() {
        if (this.ticket && this.ticket_expires_in && this.isVaildTicket(this)) {
            //说明之前保存过access_token,并且它是有效的，直接使用
            return Promise.resolve({
                ticket: this.ticket,
                ticket_expires_in: this.ticket_expires_in
            })
        }
        return this.readTicket()
            .then(async res => {
                //本地有文件
                //判断是否过期
                if (this.isVaildTicket(res)) {
                    //有效
                    return Promise.resolve(res);
                } else {
                    //过期了
                    //发送请求获取access_token
                    const res = await this.getTicket();
                    //保存为本地文件
                    await this.saveTicket(res);
                    return Promise.resolve(res);
                }
            })
            .catch(async err => {
                //没有本地文件
                //发送请求获取access_token
                const res = await this.getTicket();
                //保存为本地文件
                await this.saveTicket(res);
                return Promise.resolve(res);
            })
            .then(res => {
                this.ticket = res.ticket;
                this.ticket_expires_in = res.expires_in;
                return Promise.resolve(res)
            })
    }
}
module.exports = Wechat;
```

