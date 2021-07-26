(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{542:function(e,s,a){"use strict";a.r(s);var t=a(6),l=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"_1-简述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-简述"}},[e._v("#")]),e._v(" 1.简述")]),e._v(" "),a("p",[e._v("使用systemctl查看端口号或者开放端口号")]),e._v(" "),a("h2",{attrs:{id:"_2-firewalld的基本使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-firewalld的基本使用"}},[e._v("#")]),e._v(" 2.firewalld的基本使用")]),e._v(" "),a("p",[e._v("启动："),a("code",[e._v("systemctl start firewalld")])]),e._v(" "),a("p",[e._v("关闭： "),a("code",[e._v("systemctl stop firewalld")])]),e._v(" "),a("p",[e._v("查看状态： "),a("code",[e._v("systemctl status firewalld")])]),e._v(" "),a("p",[e._v("开机禁用 ： "),a("code",[e._v("systemctl disable firewalld")])]),e._v(" "),a("p",[e._v("开机启用 ： "),a("code",[e._v("systemctl enable firewalld")])]),e._v(" "),a("h2",{attrs:{id:"_3-systemctl是centos7的服务管理工具中主要的工具-它融合之前service和chkconfig的功能于一体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-systemctl是centos7的服务管理工具中主要的工具-它融合之前service和chkconfig的功能于一体"}},[e._v("#")]),e._v(" 3.systemctl是CentOS7的服务管理工具中主要的工具，它融合之前service和chkconfig的功能于一体")]),e._v(" "),a("p",[e._v("启动一个服务："),a("code",[e._v("systemctl start firewalld.service")])]),e._v(" "),a("p",[e._v("关闭一个服务："),a("code",[e._v("systemctl stop firewalld.service")])]),e._v(" "),a("p",[e._v("重启一个服务："),a("code",[e._v("systemctl restart firewalld.service")])]),e._v(" "),a("p",[e._v("显示一个服务的状态："),a("code",[e._v("systemctl status firewalld.service")])]),e._v(" "),a("p",[e._v("在开机时启用一个服务："),a("code",[e._v("systemctl enable firewalld.service")])]),e._v(" "),a("p",[e._v("在开机时禁用一个服务："),a("code",[e._v("systemctl disable firewalld.service")])]),e._v(" "),a("p",[e._v("查看服务是否开机启动："),a("code",[e._v("systemctl is-enabled firewalld.service")])]),e._v(" "),a("p",[e._v("查看已启动的服务列表："),a("code",[e._v("systemctl list-unit-files|grep enabled")])]),e._v(" "),a("p",[e._v("查看启动失败的服务列表："),a("code",[e._v("systemctl --failed")])]),e._v(" "),a("h2",{attrs:{id:"_4-配置firewalld-cmd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-配置firewalld-cmd"}},[e._v("#")]),e._v(" 4.配置firewalld-cmd")]),e._v(" "),a("p",[e._v("查看版本： "),a("code",[e._v("firewall-cmd --version")])]),e._v(" "),a("p",[e._v("查看帮助： "),a("code",[e._v("firewall-cmd --help")])]),e._v(" "),a("p",[e._v("显示状态： "),a("code",[e._v("firewall-cmd --state")])]),e._v(" "),a("p",[e._v("查看所有打开的端口：")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("firewall-cmd --zone"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("public --list-ports\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("更新防火墙规则："),a("code",[e._v("firewall-cmd --reload")])]),e._v(" "),a("p",[e._v("查看区域信息:  "),a("code",[e._v("firewall-cmd --get-active-zones")])]),e._v(" "),a("p",[e._v("查看指定接口所属区域： "),a("code",[e._v("firewall-cmd --get-zone-of-interface=eth0")])]),e._v(" "),a("p",[e._v("拒绝所有包："),a("code",[e._v("firewall-cmd --panic-on")])]),e._v(" "),a("p",[e._v("取消拒绝状态： "),a("code",[e._v("firewall-cmd --panic-off")])]),e._v(" "),a("p",[e._v("查看是否拒绝： "),a("code",[e._v("firewall-cmd --query-panic")])]),e._v(" "),a("h2",{attrs:{id:"_5-开发端口号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-开发端口号"}},[e._v("#")]),e._v(" 5.开发端口号")]),e._v(" "),a("p",[e._v("添加（--permanent永久生效，没有此参数重启后失效）")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("firewall-cmd --zone"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("public --add-port"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("80")]),e._v("/tcp --permanent \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("重新载入")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("firewall-cmd --reload\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("查看")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("firewall-cmd --zone"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("public --query-port"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("80")]),e._v("/tcp\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("删除")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("firewall-cmd --zone"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("public --remove-port"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("80")]),e._v("/tcp --permanent\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])])}),[],!1,null,null,null);s.default=l.exports}}]);