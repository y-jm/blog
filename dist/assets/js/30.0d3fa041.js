(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{558:function(s,a,t){"use strict";t.r(a);var n=t(6),r=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"简述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简述"}},[s._v("#")]),s._v(" 简述")]),s._v(" "),t("p",[s._v("使用frp内网穿透,方便本地项目的开发和测试，使用frp的前提条件必需要有一个公网服务器")]),s._v(" "),t("h2",{attrs:{id:"下载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载"}},[s._v("#")]),s._v(" 下载")]),s._v(" "),t("p",[s._v("在"),t("a",{attrs:{href:"https://github.com/fatedier/frp/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("releases"),t("OutboundLink")],1),s._v("下载对应的系统版本，如果你的系统是window版本就下载window版本，linux版本就下载linux版本")]),s._v(" "),t("h2",{attrs:{id:"在公网服务器配置frps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在公网服务器配置frps"}},[s._v("#")]),s._v(" 在公网服务器配置frps")]),s._v(" "),t("h3",{attrs:{id:"解压"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解压"}},[s._v("#")]),s._v(" 解压")]),s._v(" "),t("p",[s._v("使用tar -zxvf 解压")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tar -zxvf frp_0.33.0_linux_amd64.tar.gz")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"frps-ini-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frps-ini-配置"}},[s._v("#")]),s._v(" frps.ini 配置")]),s._v(" "),t("p",[t("code",[s._v("local_ip")]),s._v(" 和 "),t("code",[s._v("local_port")]),s._v(" 配置为本地需要暴露到公网的服务地址和端口。"),t("code",[s._v("remote_port")]),s._v(" 表示在 frp 服务端监听的端口，访问此端口的流量将会被转发到本地服务对应的端口")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#基础配置")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("common"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nbind_port "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7100")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#跟客户端通信的端口号")]),s._v("\nvhost_http_port "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7111")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#域名访问的端口 可通过nginx 80 代理 7111,这样域名后面就不用加端口号了")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# auth token")]),s._v("\ntoken "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12345678")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#验证的token")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置dashboard可远程通过页面观看frp运行请求（可以不用配置这个）")]),s._v("\ndashboard_addr "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#访问地址")]),s._v("\ndashboard_port "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7500")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#访问端口")]),s._v("\ndashboard_user "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" admin "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#访问账号")]),s._v("\ndashboard_pwd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" admin "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#访问密码")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h3",{attrs:{id:"运行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[s._v("#")]),s._v(" 运行")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  ./frps -c frps.ini")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如果运行起来没有问题，可以通过nohup在后台访问，这样就不需要开一个终端专门运行它")]),s._v(" "),t("p",[t("strong",[s._v("有nohup.out文件")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nohup ./frps -c frps.ini  &")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("没有nohup.out文件")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nohup ./frps -c frps.ini >/dev/null 2>&1 &")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"停止"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#停止"}},[s._v("#")]),s._v(" 停止")]),s._v(" "),t("p",[s._v("通过 "),t("code",[s._v("ps -aux|grep frp| grep -v grep")]),s._v("找出进程ID，然后使用 kill -9  杀死进程")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://19-blog.oss-cn-shenzhen.aliyuncs.com/20210611095125.png",alt:""}})]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ps -aux|grep frp| grep -v grep")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kill -9 6720")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"本地配置frpc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本地配置frpc"}},[s._v("#")]),s._v(" 本地配置frpc")]),s._v(" "),t("p",[s._v("在window下直接使用解压工具解压到本地，如果是在linux就需要使用"),t("strong",[s._v("tar")]),s._v("命令进行解压")]),s._v(" "),t("h3",{attrs:{id:"frpc-ini-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frpc-ini-配置"}},[s._v("#")]),s._v(" frpc.ini 配置")]),s._v(" "),t("p",[t("code",[s._v("local_ip")]),s._v(" 和 "),t("code",[s._v("local_port")]),s._v(" 配置为本地需要暴露到公网的服务地址和端口。"),t("code",[s._v("remote_port")]),s._v(" 表示在 frp 服务端监听的端口，访问此端口的流量将会被转发到本地服务对应的端口，"),t("code",[s._v("custom_domains")]),s._v("配置可通过域名访问到本地服务")]),s._v(" "),t("div",{staticClass:"language-SH line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# frpc.ini")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("common"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nserver_addr "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("47.111")]),s._v(".111.111 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#运行frps公网服务器的IP")]),s._v("\nserver_port "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7100")]),s._v("\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#和frps.ini bind_port 一致")]),s._v("\ntoken  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12345678")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#和frps.ini 的 token 一致")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置web服务")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("web_test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#运行的名称，可以随便起")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" http "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#类型   ")]),s._v("\nlocal_ip "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#本地")]),s._v("\nlocal_port "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#端口号")]),s._v("\ncustom_domains "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" www.baidu.com "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#运行frps公网服务器的域名")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h3",{attrs:{id:"运行-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行-2"}},[s._v("#")]),s._v(" 运行")]),s._v(" "),t("h3",{attrs:{id:"window-运行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#window-运行"}},[s._v("#")]),s._v(" window 运行")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("D:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("frp_0.33.0_windows_38"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("6")]),s._v(">")]),s._v("."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("frpc.exe -c frpc.ini\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"linux运行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux运行"}},[s._v("#")]),s._v(" linux运行")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ./frpc -c frpc.ini")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"设置window-开机启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置window-开机启动"}},[s._v("#")]),s._v(" 设置window 开机启动")]),s._v(" "),t("h3",{attrs:{id:"打开任务计划程序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#打开任务计划程序"}},[s._v("#")]),s._v(" 打开任务计划程序")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://19-blog.oss-cn-shenzhen.aliyuncs.com/20210611102040.png",alt:""}})]),s._v(" "),t("h3",{attrs:{id:"创建任务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建任务"}},[s._v("#")]),s._v(" 创建任务")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://19-blog.oss-cn-shenzhen.aliyuncs.com/20210611102153.png",alt:""}})]),s._v(" "),t("h3",{attrs:{id:"【常规】选项卡设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#【常规】选项卡设置"}},[s._v("#")]),s._v(" 【常规】选项卡设置")]),s._v(" "),t("p",[s._v("在常规选项卡设置，填写名称，选择’不管用户是否登录都要运行‘、’使用最高权限运行‘、‘隐藏’")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://19-blog.oss-cn-shenzhen.aliyuncs.com/20210611104313.png",alt:"常规选项卡设置页面"}})]),s._v(" "),t("h3",{attrs:{id:"【触发器】选项卡设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#【触发器】选项卡设置"}},[s._v("#")]),s._v(" 【触发器】选项卡设置")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://19-blog.oss-cn-shenzhen.aliyuncs.com/20210611102745.png",alt:"触发器选项卡设置页面"}})]),s._v(" "),t("h3",{attrs:{id:"【操作】选项卡设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#【操作】选项卡设置"}},[s._v("#")]),s._v(" 【操作】选项卡设置")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://19-blog.oss-cn-shenzhen.aliyuncs.com/20210611103126.png",alt:"操作选项卡设置页面"}})]),s._v(" "),t("p",[t("strong",[s._v("点击确定之后，输入电脑密码就可以了，然后就可以开机试一下")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://19-blog.oss-cn-shenzhen.aliyuncs.com/20210611103750.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"nginx反向代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx反向代理"}},[s._v("#")]),s._v(" nginx反向代理")]),s._v(" "),t("p",[s._v("如果你的80端口被占用，你就可以通过nginx反向代理")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v(" server\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   listen "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    server_name www.baidu.com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#域名配置")]),s._v("\n    location ~ /* \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#反向代理")]),s._v("\n\tproxy_pass http://localhost:7111"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#需要代理的端口号")]),s._v("\n \tproxy_set_header Host "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$host")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    proxy_set_header X-Real-IP "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$remote_addr")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    proxy_set_header X-Forwarded-For "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$proxy_add_x_forwarded_for")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    proxy_intercept_errors on"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    \n    access_log  /www/wwwlogs/frp.log"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    error_log  /www/wwwlogs/frp.error.log"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);