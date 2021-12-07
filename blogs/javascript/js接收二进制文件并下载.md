---
title: js接收二进制文件并下载
date: 2021-12-07 23:06:14
categories: 前端
tags:
- javascript
---
## 简介

通过XMLHttpRequest接收后端返回的二进制文件并下载，代码如下：

```javascript
var xhr=new XMLHttpRequest();
        xhr.open("get","http://localhost:8080/file");
        xhr.responseType = 'blob';
        xhr.setRequestHeader("Content-Type","application/octet-stream");
        xhr.send();
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4 && xhr.status==200){
                //Content-Disposition 需要后端配合暴露出来，不然接收不到
               let fileName=decodeURIComponent(xhr.getResponseHeader("Content-Disposition").split(";")[1].split("filename=")[1]);
                let content=xhr.response;
                let type = 'application/octet-stream'
                let blob = new Blob([content], {type: type});
                let src = window.URL.createObjectURL(blob);
                if(src){
                    let a = document.createElement('a');
                        a.setAttribute('href', src);
                        a.setAttribute("download",fileName);
                        a.click();
                }
            }
        }
```
