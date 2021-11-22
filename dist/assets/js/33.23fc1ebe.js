(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{562:function(s,a,e){"use strict";e.r(a);var t=e(6),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"iptable安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#iptable安装"}},[s._v("#")]),s._v(" iptable安装")]),s._v(" "),e("p",[s._v("CentOS7 默认使用firewalld防火墙，如果想换回iptables防火墙，可关闭firewalld并安装iptables。")]),s._v(" "),e("h3",{attrs:{id:"关闭firewall"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关闭firewall"}},[s._v("#")]),s._v(" 关闭firewall")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("systemctl stop firewalld.service\nsystemctl disable firewalld.service\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"查看默认防火墙状态-关闭后显示not-running-开启后显示running"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看默认防火墙状态-关闭后显示not-running-开启后显示running"}},[s._v("#")]),s._v(" 查看默认防火墙状态（关闭后显示not running，开启后显示running）")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("firewall-cmd --state\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"开始安装iptables-services"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开始安装iptables-services"}},[s._v("#")]),s._v(" 开始安装iptables-services")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("yum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" iptables-services\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"修改防火墙配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改防火墙配置文件"}},[s._v("#")]),s._v(" 修改防火墙配置文件")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/sysconfig/iptables \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"添加8080端口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加8080端口"}},[s._v("#")]),s._v(" 添加8080端口")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://19-blog.oss-cn-shenzhen.aliyuncs.com/image-20210617150854676.png",alt:"image-20210617150854676"}})]),s._v(" "),e("h2",{attrs:{id:"重启防火墙使配置生效"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重启防火墙使配置生效"}},[s._v("#")]),s._v(" 重启防火墙使配置生效")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("systemctl restart iptables.service\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"设置防火墙开机启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置防火墙开机启动"}},[s._v("#")]),s._v(" 设置防火墙开机启动")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("systemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" iptables.service\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[s._v("#")]),s._v(" 问题")]),s._v(" "),e("p",[s._v("如果使用docker的话，重启防火墙，需要重启docker")])])}),[],!1,null,null,null);a.default=r.exports}}]);