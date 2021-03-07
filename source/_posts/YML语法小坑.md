---
title: YML语法小坑
date: 2018-09-15 16:47:10
tags: 
- hexo
- yml
categories:
- Technology
---

是这样的，hexoblog的markdown原文的上方有段数据段，类似这样

``` yaml
title: YML语法小坑
date: 2018-09-15 16:47:10
tags: 
- hexo
- yml
categories:
- Technology
top: 1
```

然而这段其实是yaml格式的，众所周知，yaml的语法很严格，但这边有个问题就是对于这样的一个标题：`[aa]bb`——

其实这个中括号，竟然会被识别成映射hhh

解决方案也好办，用引号括起来就好了。。

这让我想到了蛋疼的batch语法。。