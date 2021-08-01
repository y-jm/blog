(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{553:function(s,a,n){"use strict";n.r(a);var t=n(6),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h3",{attrs:{id:"_1-安装依赖"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装依赖"}},[s._v("#")]),s._v(" 1.安装依赖")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("yum -y "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" zlib zlib-devel gcc-c++ libtool  openssl openssl-devel\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"_2-下载解压"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-下载解压"}},[s._v("#")]),s._v(" 2.下载解压")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://nginx.org/download/nginx-1.18.0.tar.gz\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf nginx-1.18.0.tar.gz\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h3",{attrs:{id:"_3-配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置"}},[s._v("#")]),s._v(" 3.配置")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("./configure\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"_4-编译安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-编译安装"}},[s._v("#")]),s._v(" 4.编译安装")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("查找安装路径：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZwz9g1c3fleilwng44esiZ nginx-1.18.0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# whereis nginx")]),s._v("\nnginx: /usr/local/nginx\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h3",{attrs:{id:"_5-启动或停止"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-启动或停止"}},[s._v("#")]),s._v(" 5.启动或停止")]),s._v(" "),n("p",[s._v("使用"),n("code",[s._v("whereis nginx")]),s._v("找到nignx安装路径")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("/usr/local/nginx/sbin/nginx "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启动")]),s._v("\n/usr/local/nginx/sbin/nginx -s quit "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#停止")]),s._v("\n/usr/local/nginx/sbin/nginx -s reload "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重启")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"_6-使用systemd来开机自启"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-使用systemd来开机自启"}},[s._v("#")]),s._v(" 6.使用systemd来开机自启")]),s._v(" "),n("p",[s._v("使用vim来创建编辑")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /usr/lib/systemd/system/nginx.service\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#[Unit] 表示这是基础信息")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Description 是描述")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Description")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("nginx\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#After 是在那个服务后面启动，一般是网络服务启动后启动")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("After")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("network.target\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#[Service]服务运行参数的设置")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Type=forking是后台运行的形式")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Type")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("forking\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ExecStart 是启动服务的命令")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/nginx/sbin/nginx\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ExecReload 是重启服务的命令")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecReload")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/nginx/sbin/nginx -s reload\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ExecStop 是停止服务的命令")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStop")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/nginx/sbin/nginx -s quit\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#表示给服务分配独立的临时空间")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PrivateTmp")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true  \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#表示这是是安装相关信息")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Install"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#WantedBy 是以哪种方式启动：multi-user.target表明当系统以多用户方式")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WantedBy")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("multi-user.target\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])]),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("systemctl daemon-reload "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#刷新配置文件")]),s._v("\n\nsystemctl "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" nginx  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#加入开机启动，先执行这个")]),s._v("\nsystemctl start nginx  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#开启nginx服务")]),s._v("\nsystemctl restart nginx  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重启nginx服务")]),s._v("\nsystemctl stop nginx  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#停止nginx服务")]),s._v("\nsystemctl status nginx  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看nginx运行状态")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h3",{attrs:{id:"_7-反向代理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-反向代理"}},[s._v("#")]),s._v(" 7.反向代理")]),s._v(" "),n("p",[s._v("使用"),n("code",[s._v("proxy_pass")]),s._v("做反向代理")]),s._v(" "),n("div",{staticClass:"language-nginx line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-nginx"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#代理其它IP")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" /api/get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_pass")]),s._v(" http://172.24.78.78/api/get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#代理其它域名")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" /get/baidu")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_pass")]),s._v(" http://www.baidu.com")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#代理自己其它端口")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" /api/getinfo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_pass")]),s._v(" http://127.0.0.1:8080")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);