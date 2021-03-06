---
title: '[Hexo][持续更新]The Road of Custom Blog'
categories:
  - Technology
date: 2018-11-25 17:01:49
tags: [Hexo,Blog,Project]
sticky: 7
---

![](https://i.loli.net/2019/05/06/5ccfc7e4ba589.jpg)

# Hexo Blog定制之路

自从丢掉了wordpress后就潜心研究hexo了，作为一个非常优秀的Blog框架，目前hexo有成熟的社区和大量的主题，插件支持，同时还有非常好的可自定义性。

这篇文章会记录下这个blog的更新历程，估计完善之后会出一个教程吧。



### Todo

本项目挂在Coding.net上，项目TODO：

- [ ] 方便的添加图片
- [ ] 换计数器
- [ ] 动画效果
- [ ] 字体多元
- [x] 标签云
- [ ] 文件压缩及缓存机制
- [x] 格式化ht，js，css
- [x] 一言
- [x] 音乐
- [ ] 字体：Raleway|core_sans_n45_regular
- [ ] 新建文章选择分类

github上项目源码：<https://github.com/median-dxz/median-dxz-blog-hexo-dev>



### Update Log

2018.11.25 通过html-minifier来格式化html文件，效果不错

2018.11.25 添加Porject模块来记录一些项目的进程

2018.11.25 更新了计划表、背景图片，引入几个cdn加载的js，添加了背景动画，更改了字体设置

2018.12.08 加入本地搜索功能

2019.5.6 断更了好久……主要添加了随机背景，一言功能，修改了字体

2019.8.2 添加基于aplayer和[Meting](https://github.com/metowolf/Meting)的作者api站的音乐支持

2019.8.15 应该是最后一次更新了，高三真的没什么精力来打理了，索性趁最后一个小假期把零碎的更新更完



### 教程目录(预览版)

hexo的搭建

主题，插件模块的安装和基础定制(基于next主题，深坑)

基于html-minifier的html格式化

基于git和coding.net的部署

背景图片及其他细节的定制方法


<!--more-->

### 点滴


#### Hexo Local Search(本地搜索功能)

第一步：添加搜索插件

` npm install hexo-generator-search --save` 

`npm install hexo-generator-searchdb --save` 

第二步：在*本地站点配置文件*下开启搜索

```yaml
search:
path: search.xml
field: post
format: html
limit: 100
```

#### 阅读全文

添加`<!--more-->`标签

#### 文章置顶

安装插件`npm install hexo-generator-topindex --save`

然后可以在_config.yml中设置
```
topindex_generator:
  per_page: 10
  order_by: -date
```

之后就可以在每篇文章中设置top属性了

Link -> [here](https://github.com/amlove2/hexo-generator-topindex)

#### 自动打开typora

```js
var spawn = require('child_process').exec;
hexo.on('new', function(data){
  spawn('start  "C:\Program Files\Typora\Typora.exe" ' + data.path);
});
```

#### 更改统计量

```js
    <script type="text/javascript">
        var o = false
        $("#busuanzi_value_site_uv").bind("DOMNodeInserted", function () {
            console.log($("#busuanzi_value_site_uv").text())
            if(o == true){
                return
            }
            o = true
            var x = Number($("#busuanzi_value_site_uv").text())
            x += 101
            $("#busuanzi_value_site_uv").text(x.toString())
            console.log($("#busuanzi_value_site_uv").text())
        });
    </script>
```

#### 评论系统

```yaml
gitalk:
enable: true
github_id: ‘median-dxz’
repo: ‘gitalk-for-median-dxz-blog’
client_id: ‘d7401b1f9011525767e5’
client_secret: ‘f4d903e0fb77b8010c3fab504b052560c8aa0f8b’
admin_user: [‘median-dxz’]
distraction_free_mode: true # Facebook-like distraction free mode
```

#### 标签图标

更改标签前的图标

***post.swig***

```html
<i class="fa fa-tag"></i>
```

#### 

#### 标签云

先使用npm安装`hexo-tag-cloud^2.1.1`

然后可以在_config.yml进行配置

```yaml
# hexo-tag-cloud
tag_cloud:
    textFont: 'PT Mono'
    textColor: '#333'
    textHeight: 25
    outlineColor: '#E2E1D1'
    maxSpeed: 0.15 # range from [0.01 ~ 1]
```

最后在合适的地方植入以下代码：

```html
{#\themes\next\layout\page.swig#}

{# tagcloud page support #}
        {% if page.type === 'tags' %}
           <div class="tag-cloud">
             {#<div class="tag-cloud-title">
               {% set visibleTags = 0 %}
               {% for tag in site.tags %}
                 {% if tag.length %}
                   {% set visibleTags += 1 %}
                 {% endif %}
               {% endfor %}
               {{ _p('counter.tag_cloud', visibleTags) }}
             </div>

             <div class="tag-cloud-tags">
               {% if not theme.tagcloud %}
                 {{ tagcloud({min_font: 12, max_font: 30, amount: 200, color: true, start_color: '#ccc', end_color: '#111'}) }}
               {% else %}
                 {{ tagcloud({min_font: theme.tagcloud.min, max_font: theme.tagcloud.max, amount: theme.tagcloud.amount, color: true, start_color: theme.tagcloud.start, end_color: theme.tagcloud.end}) }}
               {% endif %}
             </div> 
            这里是原来的#}
            {% if site.tags.length >= 1 %}
                <script type="text/javascript" charset="utf-8" src="{{ url_for('/js/tagcloud.js') }}"></script>
                <script type="text/javascript" charset="utf-8" src="{{ url_for('/js/tagcanvas.js') }}"></script>
                <div class="widget-wrap">
                  <h3 class="widget-title">Tag Cloud</h3>
                  <div id="myCanvasContainer" class="widget tagcloud">
                    <canvas width="300" height="300" id="resCanvas" style="width=100%">
                      {{ list_tags() }}
                    </canvas>
                  </div>
                </div>
            {% endif %}
```



#### JavaScript实现简单的随机背景和一言功能

首先找到next主题加载主题时的js入口(其实用其他入口也行，例如custom下的header.swig)

```javascript
//  themes/next/layout/_scripts/schemes/gemini.swig
{% include 'pisces.swig' %}

<script src="/assets/js/randbkg.js"></script> 
<script src="/assets/js/hito/hitokoto.js"></script> 
```

然后你可以在这两个js下使用jq获取相关元素，获取相关信息（如一言的json，可以自己写，也可以用现成的服务）并添加你想要的内容就好了。

这里就不放源码（~~太丑了~~）了，想看的可以看项目下`\source\assets\js`中的代码，简单说一下我的实现。



随机背景就是随机一个数字，然后获取图片，设置body的样式。

随机一言也是随机一个数字，然后从一个json中获取一条一言，然后用jq加入到预先放置的一个div（next主题模板）中，配合css样式。



简单说下几个坑

1.在**Blog**的`_config.yml`文件中添加：

```yml
  skip_render: 
  - assets/**
```

2.找到next主题中添加jq库的相关实现，添加到自定义header中：

```javascript
<script src="/lib/jquery/index.js?v=2.1.3"></script>
```



#### 引入并使用Aplayer

```javascript
var ap_img, ap_def;

$(document).ready(() => {
  if (document.getElementById("img-aplayer") !== null) {
    ap_img = new APlayer({
      container: document.getElementById("img-aplayer"),
      fixed: true,
      lrcType: 1,
      listMaxHeight: 90,
      listFolded: true,
      audio: []
    });
  }
  if (document.getElementById("def-aplayer") !== null) {
    ap_def = new APlayer({
      container: document.getElementById("def-aplayer"),
      lrcType: 3,
      listMaxHeight: 90,
      listFolded: true,
      audio: []
    });
  }
});

function getMusicMetaAsync(songid, plat) {
  var url = "https://api.i-meto.com/meting/api?server=%plat%&type=song&id=%id%&r=song";
  url = url.replace("%id%", String(songid)).replace("%plat%", plat);

  var rep;
  var defer = $.Deferred();

  var f = $.getJSON(url, (data, status, xhr) => {
    if (status === "success") {
      rep = data[0];
      defer.resolve({ name: rep.name, artist: rep.artist, url: rep.url, cover: rep.cover, lrc: rep.lrc });
    }
  });

  return defer;
}

function addMusicMeta(mobj, ap) {
  ap.list.add(mobj);
}
```

在header中引入js和aplayer相关的文件，然后注意要异步处理请求。可以使用多个aplyer实例定制不同的使用场景，然后使用的时候类似这样：

```javascript
   getMusicMetaAsync(27698501,"netease").done((obj)=>{
      addMusicMeta(obj,ap_def);
   });
```

jq的deferred类似es6的promise，虽然不是很懂，而且我至今也不会在循环中串行异步处理，但是只要知道若是在异步函数返回一个异步对象就可以链式调用，你就能像我这样使用很丑的代码写出：

```javascript
	
  getMusicMetaAsync(songid[0], "netease")
    .done(v => {
      song[0] = v;
    })
    .then(()=>getMusicMetaAsync(songid[1], "netease"))
    .done(v => {
      song[1] = v;
    })
    .then(()=>getMusicMetaAsync(songid[2], "netease"))
    .done(v => {
      song[2] = v;
    })
    //省略好多次调用...
    });
});
```

如果你要添加歌单可以用Meting作者的[MetingJS](https://github.com/metowolf/MetingJS)