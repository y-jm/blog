(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{553:function(s,a,t){"use strict";t.r(a);var e=t(6),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"_1-安装依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装依赖"}},[s._v("#")]),s._v(" 1.安装依赖")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("yum -y "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" zlib zlib-devel gcc-c++ libtool  openssl openssl-devel\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_2-使用wget下载redis压缩包安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用wget下载redis压缩包安装"}},[s._v("#")]),s._v(" 2. 使用wget下载redis压缩包安装")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://download.redis.io/releases/redis-5.0.0.tar.gz\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_3-解压"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-解压"}},[s._v("#")]),s._v(" 3.解压")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf redis-5.0.0.tar.gz \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_4-编译"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-编译"}},[s._v("#")]),s._v(" 4.编译")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" redis-5.0.0\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"_5-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-安装"}},[s._v("#")]),s._v(" 5.安装")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_6-启动服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-启动服务"}},[s._v("#")]),s._v(" 6.启动服务")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZwz9g1c3fleilwng44esiZ redis-5.0.0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd src")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZwz9g1c3fleilwng44esiZ src"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ./redis-server")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7121")]),s._v(":C "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(" Feb "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":35:26.136 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7121")]),s._v(":C "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(" Feb "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":35:26.136 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Redis version=5.0.0, bits=64, commit=00000000, modified=0, pid=7121, just started")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7121")]),s._v(":C "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(" Feb "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":35:26.136 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Warning: no config file specified, using the default config. In order to specify a config file use ./redis-server /path/to/redis.conf")]),s._v("\n                _._                                                  \n           _.-`"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("__ "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("-._                                             \n      _.-"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("_.  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("-._           Redis "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.0")]),s._v(".0 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("00000000/0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" bit\n  .-"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v(" .-"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("`"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("`"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("/    _.,_ "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("-._                                   \n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("    '      ,       .-"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v(",    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("     Running "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" standalone mode\n "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("-._"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("-"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".-"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" __"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".-.`"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("-._"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("'"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" _.-"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'|     Port: 6379\n |    `-._   `._    /     _.-'")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     PID: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7121")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("-._    "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("-._  "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("-./  _.-"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'    _.-'")]),s._v("                                   \n "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("-._"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("-._    "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("-.__.-"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'    _.-'")]),s._v("_.-"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'|                                  \n |    `-._`-._        _.-'")]),s._v("_.-"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'    |           http://redis.io        \n  `-._    `-._`-.__.-'")]),s._v("_.-"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'    _.-'")]),s._v("                                   \n "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("-._"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("-._    "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("-.__.-"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'    _.-'")]),s._v("_.-'"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                                  \n "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("-._"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("-._        _.-"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'_.-'")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                                  \n  "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("-._    "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("-._"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("-.__.-"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'_.-'")]),s._v("    _.-"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'                                   \n      `-._    `-.__.-'")]),s._v("    _.-"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'                                       \n          `-._        _.-'")]),s._v("                                           \n              `-.__.-'                                                      \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br")])]),t("h3",{attrs:{id:"_7-使用nohup来后台运行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-使用nohup来后台运行"}},[s._v("#")]),s._v(" 7.使用nohup来后台运行")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZwz9g1c3fleilwng44esiZ src"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nohup ./redis-server &")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("13148")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("13148 是redis-server进程标识，可以使用"),t("code",[s._v("kill -9 13148")]),s._v(" 来停止redis服务")]),s._v(" "),t("h3",{attrs:{id:"_8-使用systemd来开机自启"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-使用systemd来开机自启"}},[s._v("#")]),s._v(" 8.使用systemd来开机自启")]),s._v(" "),t("p",[s._v("使用nohup可以后台运行，但是不能开机自启，所以使用systemd")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/systemd/system/redis.service\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("ExecStart和ExecStop")]),s._v("为redis目录")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#[Unit] 表示这是基础信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Description 是描述")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Description")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Redis\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#After 是在那个服务后面启动，一般是网络服务启动后启动")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("After")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("network.target\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##[Service]服务运行参数的设置")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ExecStart 是启动服务的命令")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redis-server路径和配置文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/root/redis-5.0.0/src/redis-server /root/redis-5.0.0/redis.conf  --daemonize no\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ExecStop 是停止服务的指令")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redis-cli")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStop")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/root/redis-5.0.0/src/redis-cli -h "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("shutdown")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#表示这是是安装相关信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Install"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#WantedBy 是以哪种方式启动：multi-user.target表明当系统以多用户方式")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WantedBy")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("multi-user.target\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("p",[s._v("编辑完后保存")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("systemctl daemon-reload "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#刷新配置文件")]),s._v("\n\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" redis  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#加入开机启动，先执行这个")]),s._v("\nsystemctl start redis  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#开启redis服务")]),s._v("\nsystemctl stop redis  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#停止redis服务")]),s._v("\nsystemctl status redis  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看redis运行状态")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h3",{attrs:{id:"_9-加入环境变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-加入环境变量"}},[s._v("#")]),s._v(" 9.加入环境变量")]),s._v(" "),t("p",[s._v("全局模式")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/profile\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#添加下面两句 REDIS_HOME是redis所在目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("REDIS_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/root/redis-5.0.0/\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$REDIS_HOME")]),s._v("/src\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#加载环境变量使其生效")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);