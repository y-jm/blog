(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{560:function(s,a,e){"use strict";e.r(a);var t=e(6),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),e("h3",{attrs:{id:"_1-前提条件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-前提条件"}},[s._v("#")]),s._v(" 1.前提条件")]),s._v(" "),e("p",[s._v("先检查系统是否装有mysql，如下图，这里返回空值，说明没有，不然需要把mysql卸载干净,如果需要卸载可以参考这篇"),e("a",{attrs:{href:"https://www.cnblogs.com/wanghuaijun/p/6398240.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("博文"),e("OutboundLink")],1)]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -qa "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" mysql\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://19-blog.oss-cn-shenzhen.aliyuncs.com/20210309094319.png",alt:""}})]),s._v(" "),e("h3",{attrs:{id:"_2-下载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-下载"}},[s._v("#")]),s._v(" 2.下载")]),s._v(" "),e("p",[s._v("由于CentOS7的yum源中没有mysql，需要到mysql的官网下载yum repo配置文件。")]),s._v(" "),e("p",[s._v("下载命令：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://dev.mysql.com/get/mysql57-community-release-el7-9.noarch.rpm\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"_3-安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装"}},[s._v("#")]),s._v(" 3.安装")]),s._v(" "),e("p",[s._v("然后进行yum源的安装：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -ivh mysql57-community-release-el7-9.noarch.rpm\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("安装完成后，就可以使用yum命令安装mysql了：")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("yum -y "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mysql-server\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("如果安装太慢，从"),e("a",{attrs:{href:"http://uni.mirrors.163.com/mysql/Downloads/",target:"_blank",rel:"noopener noreferrer"}},[s._v("国内镜像网站"),e("OutboundLink")],1),s._v("下载对应版本的client和server rpm包")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  1. cd ")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /var/cache/yum/x86_64/7/mysql57-community/packages/\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2、把下载好的rpm文件上传到此目录")]),s._v("\nmysql-community-client-5.7.29-1.el7.x86_64.rpm\nmysql-community-server-5.7.29-1.el7.x86_64.rpm\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3、再次执行安装命令")]),s._v("\nyum -y "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mysql-server\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h3",{attrs:{id:"_4-启动mysql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-启动mysql"}},[s._v("#")]),s._v(" 4. 启动mysql")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("systemctl start mysqld\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"_5-查看mysql状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-查看mysql状态"}},[s._v("#")]),s._v(" 5. 查看mysql状态")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("systemctl status mysqld\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"_6-获取mysql的临时密码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-获取mysql的临时密码"}},[s._v("#")]),s._v(" 6. 获取mysql的临时密码")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'temporary password'")]),s._v(" /var/log/mysqld.log\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"_7-登录mysql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-登录mysql"}},[s._v("#")]),s._v(" 7. 登录mysql")]),s._v(" "),e("p",[s._v("（密码为上一步骤获取的临时密码）")]),s._v(" "),e("p",[e("code",[s._v("mysql -u root -p")]),s._v("(此处不用输入密码，按下回车后会专门要你再输入密码的)")]),s._v(" "),e("h3",{attrs:{id:"_8-修改临时密码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-修改临时密码"}},[s._v("#")]),s._v(" 8. 修改临时密码")]),s._v(" "),e("p",[s._v("登录成功后，做任何操作都会被要求先修改密码")]),s._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("show databases;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://19-blog.oss-cn-shenzhen.aliyuncs.com/20210309094424.png",alt:""}})]),s._v(" "),e("p",[e("b",{staticStyle:{color:"red"}},[s._v("请注意：如果修改的密码太过简单，依然会提示error，修改失败"),e("br"),s._v("因为5.7及以上版本的数据库对密码做了强度要求，默认密码的要求必须是大小写字母数字特殊字母的组合且至少要8位长度")])]),s._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("ALTER USER 'root'@'localhost' IDENTIFIED BY '新的密码';\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"_9-修改密码校验策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-修改密码校验策略"}},[s._v("#")]),s._v(" 9.修改密码校验策略")]),s._v(" "),e("p",[s._v("使用下面命令修改，默认密码要求就不必是大小写字母数字特殊字母的组合且至少要8位长度")]),s._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("set global validate_password_policy=LOW; \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"_10-执行-sql文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-执行-sql文件"}},[s._v("#")]),s._v(" 10. 执行.sql文件")]),s._v(" "),e("p",[s._v("进入mysql的控制台后，使用source命令执行，实例如下")]),s._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("source /home/s.sql\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("如果出现下面报错，需要先")]),s._v(" "),e("ul",[e("li",[s._v("create database 我们的数据库名")]),s._v(" "),e("li",[s._v("use database 我们的数据库名")]),s._v(" "),e("li",[s._v("source 地址")])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://19-blog.oss-cn-shenzhen.aliyuncs.com/20210309094347.png",alt:""}})]),s._v(" "),e("p",[s._v("如果执行效果跟下图的一样，则执行成功")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://19-blog.oss-cn-shenzhen.aliyuncs.com/20210309094451.png",alt:""}})]),s._v(" "),e("h3",{attrs:{id:"_11-使用第三方工具登录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11-使用第三方工具登录"}},[s._v("#")]),s._v(" 11.使用第三方工具登录")]),s._v(" "),e("p",[e("strong",[s._v("如果只需要本机使用，则不需要看下面的")])]),s._v(" "),e("p",[s._v("连接时，如果出现下面的问题")]),s._v(" "),e("p",[e("font",{attrs:{color:"red"}},[s._v("1130-Host 113 247.68.57' is not allowed to connect to this mysQl server")])],1),s._v(" "),e("p",[s._v("需要修改 系统表mysql 的host 字段")]),s._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mysql> SELECT host  FROM user;\n+-----------+\n| host      |\n+-----------+\n| localhost |\n| localhost |\n| localhost |\n+-----------+\n3 rows in set (0.00 sec)\n\nmysql> update user set host = '%' where user = 'root';\nQuery OK, 1 row affected (0.00 sec)\nRows matched: 1  Changed: 1  Warnings: 0\n\nmysql> SELECT host  FROM user;\n+-----------+\n| host      |\n+-----------+\n| %         |\n| localhost |\n| localhost |\n+-----------+\n3 rows in set (0.00 sec)\n\nmysql> exit;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br")])]),e("p",[s._v("然后执行 "),e("code",[s._v("systemctl restart mysqld")]),s._v("重启一下mysql服务，就可以连接上了")]),s._v(" "),e("h3",{attrs:{id:"_12-找回密码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_12-找回密码"}},[s._v("#")]),s._v(" 12.找回密码")]),s._v(" "),e("p",[s._v("1、"),e("code",[s._v("vi /etc/my.cnf")]),s._v("打开mysql的配置文件，在配置文件中添加：skip-grant-tables")]),s._v(" "),e("p",[s._v("2、重启mysql")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("systemctl restart mysqld\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("3、使用无密码登录,使用下面命令，直接回车，不用输入。")]),s._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mysql -uroot -p\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);