---
title: openresty(二)使用lua开发
date: 2020-02-26 16:12:48
categories:
- liunx
tags:
- nginx
- openresty
- linux
- CentOS
---

## 1.简述

在openresty中使用lua开发

### 2.直接使用content_by_lua响应

在`/usr/local/openresty/nginx/conf/nginx.conf`，修改文件配置，把下面的添加到要访问的location中

```
		default_type text/html;
            content_by_lua '
                ngx.say("<p>Hello, World!</p>")
            ';
```

添加之后就和下面一样了

```
location / {
           # root   html;
           # index  index.html index.htm;
           default_type text/html;
            content_by_lua '
                ngx.say("<p>Hello, World!</p>")
            ';
        }
```

### 3.使用content_by_lua_file引入lua脚本文件

如果lua脚本行数写的太多，使用content_by_lua_file引入lua文件，便于维护，路径基于/usr/local/openresty/nginx目录下

```
content_by_lua_file lua
location / {
           # root   html;
           # index  index.html index.htm;
           default_type text/html;
           content_by_lua_file lua/test.lua;
        }
```