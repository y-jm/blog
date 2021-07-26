(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{545:function(s,t,a){"use strict";a.r(t);var e=a(6),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("p",[s._v("基于python2使用yum安装")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" supervisor\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("systemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" supervisord "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#开机启动")]),s._v("\nsystemctl start supervisord "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启动")]),s._v("\nsystemctl status supervisord "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看状态")]),s._v("\nsystemctl stop supervisord "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#停止")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"supervisorctl管理命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supervisorctl管理命令"}},[s._v("#")]),s._v(" supervisorctl管理命令")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v(" supervisorctl status      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 状态")]),s._v("\n supervisorctl stop nginx    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#关闭 nginx")]),s._v("\n supervisorctl start nginx    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启动 nginx")]),s._v("\n supervisorctl restart nginx    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重启 nginx")]),s._v("\n supervisorctl reload             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重启全部")]),s._v("\n supervisorctl update     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#更新配置")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"配置redis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置redis"}},[s._v("#")]),s._v(" 配置redis")]),s._v(" "),a("p",[s._v("配置redis， 执行"),a("code",[s._v("touch /etc/supervisord.d/redis.ini")]),s._v("创建一个redis配置文件，配置内容如下：")]),s._v(" "),a("div",{staticClass:"language-ini line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v("program:redis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/root/redis-5.0.0/src/redis-server /root/redis-5.0.0/redis.conf  ;程序启动命令")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("autostart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("true ;在supervisord启动的时候也自动启动")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("autorestart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("true ;程序退出后自动重启,可选值：[unexpected,true,false]，默认为unexpected，表示进程意外杀死后才重启")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("startsecs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("3  ;启动失败自动重试次数，默认是3")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("daemonize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("no")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("stdout_logfile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/etc/supervisord.d/logs/redis.log  ;日志文件，需要注意当指定目录不存在时无法正常启动，所以需要手动创建目录")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"supervisord-conf-详细说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supervisord-conf-详细说明"}},[s._v("#")]),s._v(" supervisord.conf 详细说明")]),s._v(" "),a("div",{staticClass:"language-ini line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v("unix_http_server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("file")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/tmp/supervisor.sock ;UNIX socket 文件，supervisorctl 会使用")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v(";chmod=0700     ;socket文件的mode，默认是0700")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v(";chown=nobody:nogroup  ;socket文件的owner，格式：uid:gid")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v(";[inet_http_server]   ;HTTP服务器，提供web管理界面")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v(";port=127.0.0.1:9001  ;Web管理后台运行的IP和端口，如果开放到公网，需要注意安全性")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v(";username=user    ;登录管理后台的用户名")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v(";password=123    ;登录管理后台的密码")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v("supervisord")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("logfile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/tmp/supervisord.log ;日志文件，默认是 $CWD/supervisord.log")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("logfile_maxbytes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("50MB  ;日志文件大小，超出会rotate，默认 50MB，如果设成0，表示不限制大小")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("logfile_backups")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("10   ;日志文件保留备份数量默认10，设为0表示不备份")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("loglevel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("info    ;日志级别，默认info，其它: debug,warn,trace")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("pidfile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/tmp/supervisord.pid ;pid 文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("nodaemon")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("false    ;是否在前台启动，默认是false，即以 daemon 的方式启动")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("minfds")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("1024     ;可以打开的文件描述符的最小值，默认 1024")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("minprocs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("200     ;可以打开的进程数的最小值，默认 200")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v("supervisorctl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("serverurl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("unix:///tmp/supervisor.sock ;通过UNIX socket连接supervisord，路径与unix_http_server部分的file一致")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v(";serverurl=http://127.0.0.1:9001 ; 通过HTTP的方式连接supervisord")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("; [program:xx]是被管理的进程配置参数，xx是进程的名称")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v("program:xx")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/opt/apache-tomcat-8.0.35/bin/catalina.sh run ; 程序启动命令")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("autostart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("true  ; 在supervisord启动的时候也自动启动")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("startsecs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("10   ; 启动10秒后没有异常退出，就表示进程正常启动了，默认为1秒")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("autorestart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("true  ; 程序退出后自动重启,可选值：[unexpected,true,false]，默认为unexpected，表示进程意外杀死后才重启")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("startretries")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("3  ; 启动失败自动重试次数，默认是3")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("tomcat   ; 用哪个用户启动进程，默认是root")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("priority")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("999   ; 进程启动优先级，默认999，值小的优先启动")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("redirect_stderr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("true ; 把stderr重定向到stdout，默认false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("stdout_logfile_maxbytes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("20MB ; stdout 日志文件大小，默认50MB")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("stdout_logfile_backups")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("20 ; stdout 日志文件备份数，默认是10")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("; stdout 日志文件，需要注意当指定目录不存在时无法正常启动，所以需要手动创建目录（supervisord 会自动创建日志文件）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("stdout_logfile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/opt/apache-tomcat-8.0.35/logs/catalina.out")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("stopasgroup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("false  ;默认为false,进程被杀死时，是否向这个进程组发送stop信号，包括子进程")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("killasgroup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("false  ;默认为false，向进程组发送kill信号，包括子进程")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v(";包含其它配置文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v("include")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("files")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/etc/supervisord.d/*.ini ;可以指定一个或多个以.ini结束的配置文件")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);