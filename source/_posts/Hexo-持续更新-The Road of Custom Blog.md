---
title: '[Hexo][持续更新]The Road of Custom Blog'
categories:
  - Technology
date: 2018-11-25 17:01:49
tags: [Hexo,Blog,Project]
top: 7
---

![](https://median-1256852104.cos.ap-beijing.myqcloud.com/img/%5BTVKD%5DX144_029.png)

# Hexo Blog定制之路

自从丢掉了wordpress后就潜心研究hexo了，作为一个非常优秀的Blog框架，目前hexo有成熟的社区和大量的主题，插件支持，同时还有非常好的可自定义性。

这篇文章会记录下这个blog的更新历程，估计完善之后会出一个教程吧。



### Todo

本项目挂在Coding.net上，项目TODO地址:[这里](https://dev.tencent.com/u/median-dxz/p/Median_dxz_Hexo_Blog/tasks)



### Update Log

2018.11.25 通过html-minifier来格式化html文件，效果不错

2018.11.25 添加Porject模块来记录一些项目的进程

2018.11.25 更新了计划表、背景图片，引入几个cdn加载的js，添加了背景动画，更改了字体设置

2018.12.08 加入本地搜索功能



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

