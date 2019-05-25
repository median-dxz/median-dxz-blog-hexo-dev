---
title: '[Hexo][持续更新]The Road of Custom Blog'
categories:
  - Technology
date: 2018-11-25 17:01:49
tags: [Hexo,Blog,Project]
top: 7
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
- [ ] 标签云
- [ ] 文件压缩及缓存机制
- [ ] 格式化ht，js，css
- [x] 一言
- [ ] 音乐
- [ ] 字体：Raleway|core_sans_n45_regular
- [ ] 新建文章选择分类

github上项目源码：<https://github.com/median-dxz/median-dxz-blog-hexo-dev>



### Update Log

2018.11.25 通过html-minifier来格式化html文件，效果不错

2018.11.25 添加Porject模块来记录一些项目的进程

2018.11.25 更新了计划表、背景图片，引入几个cdn加载的js，添加了背景动画，更改了字体设置

2018.12.08 加入本地搜索功能

2019.5.6 断更了好久……主要添加了随机背景，一言功能，修改了字体



### 教程目录(预览版)

hexo的搭建

主题，插件模块的安装和基础定制(基于next主题，深坑)

基于html-minifier的html格式化

基于git和coding.net的部署

背景图片及其他细节的定制方法


<!--more-->

### 点滴


#### Hexo Local Search

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

#### 本地搜索功能

Hexo Local Search

第一步：添加搜索插件

```bash
npm install hexo-generator-search --save

npm install hexo-generator-searchdb --save
```

第二步：在本地站点配置文件下开启搜索

```yaml
search:
path: search.xml
field: post
format: html
limit: 100
```

