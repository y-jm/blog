module.exports = {
  "title": "🌞记录开发的代码片段",
  "description": "",
  "base": "/",
  "dest": "dist",
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
    },
  },
  plugins: [
    //自定义复制插件
    require('./vuepress-plugin-copy/index.js'),
    // md文件支持中文文件名
    [
      "permalink-pinyin",
      {
        lowercase: true, // Converted into lowercase, default: true
        separator: "-", // Separator of the slug, default: '-'
      },
    ],
    [
      '@vuepress/google-analytics',
      {
        'ga': 'G-TCX4H7KV2P' //替换成自己实际申请的ID
      }
    ]
  ],
  "head": [
    [
      "script",
      {},
      `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "krd63wp8gx");
        `
    ],
    /*************** start 添加百度统计 ***********/
    [
      "script",
      {},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?da55d9221d1de559e6426dc6f12f5b46";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
        `
    ],
    /*************** end 添加百度统计 ***********/
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "lang": "zh-CN",
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
  ],
  "theme": "reco",
  "themeConfig": {
    "subSidebar": "auto",
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    // "lastUpdated": "Last Updated",
    "author": "sun",
    "authorAvatar": "https://img.xiyangyang.cc/blog/baracktocat.jpg",
    "record": "湘ICP备2021011916号-1",
    "recordLink": "https://beian.miit.gov.cn/",
  },
  "markdown": {
    "lineNumbers": true
  }
}
