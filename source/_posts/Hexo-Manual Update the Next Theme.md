---
title: '[hexo]手动更新next主题记'
categories:
  - Technology
top: 1
date: 2019-04-15 18:28:44
tags:
 - next
 - hexo
 - git
---



前段时间发现next主题**又双叒叕**更新了！

![github上的next主题更新方法](https://i.loli.net/2019/04/16/5cb5539e7da41.png)

但是问题是，我使用的next是自己魔改过的，所以我并不知道从官网pull的版本要如何合并到自己魔改过的版本上。不过前段时间对git的进一步学习，同时参考官网文档，最后利用VSCode对git的方便管理成功更新了，在此把自己折腾的经历放出。

<!--more-->

##### 问题分析

首先，我是将整个项目存在GitHub上的，这意味着主题目录下没有git仓库，我也不打算建。

考虑给git有一个branch的合并功能，于是打算将自己的主题从之前使用的版本新建出一个分支，然后合并到最新版本的master分支上，利用vscode解决冲突处理。

需要注意的是这个方法是我手动摸索的，期间也踩了许多坑，应该也不是最佳的解决方案，仅供参考：



##### 基本步骤：

>1. 先从官网拉取最新版本
>2. 复制目录下的.git文件夹
>3. 建立新分支，提交更改
>4. 关键：**再次pull**
>5. 利用vscode手动合并代码冲突
>6. 删除.git



##### 1. 从官拉取最新版本

![从官网项目上拉取更新或clone项目](https://i.loli.net/2019/04/16/5cb554fde71a6.png)

如果以前从官网项目上clone过next主题的话，直接使用`git pull`拉取更新。

否则直接使用`git clone https://github.com/theme-next/hexo-theme-next themes/next`拉取最新版本的主题。



##### 2.利用该目录下的.git文件夹提交更改

经过刚刚的操作后，在hexo-theme-next这个文件夹下，就是原生的最新版本的next主题，我们需要的是其中的.git文件夹。

![](https://i.loli.net/2019/04/16/5cb55663a3343.png)

先检出需要版本的分支：

```bash
git checkout v7.0.0
git branch -b mybranch
```

然后将其复制到你自行修改过的next主题文件夹下：

![](https://i.loli.net/2019/04/16/5cb556c94a80d.png)

然后在终端中输入：

```bash
git add .
git commit -m "my version"
```

这一步的作用是从之前使用的版本`v7.0.0`开始建立一个分支`mybranch`，并提交了一次新的更改。

这里的版本其实是tag，可以在next项目的官网的[release](https://github.com/theme-next/hexo-theme-next/releases/latest)下查询。



##### 3.合并更新

按照上面的思路，接下来由于关联了最新版本，只需要再拉取一次后提交更改即可。

执行`git pull`：

![](https://i.loli.net/2019/04/17/5cb6abd9f3485.png)

然后果然冲突了！

于是乎，用VSC打开主题文件夹，在源代码管理中进行冲突的解决，其中当前更改就是你的版本，而传入的更改就是官方的版本。

![](https://i.loli.net/2019/04/17/5cb6abf953c9a.png)

最后commit！

![](https://i.loli.net/2019/04/17/5cb6fd5a949aa.png)

可以看到，主题已经成功更新了。

可能还有一些小问题需要手动修改一下。这之后删掉.git文件夹，下次更新时如法炮制即可。



##### 参考链接

<p><a href="https://github.com/theme-next/hexo-theme-next" target="_blank" rel="noopener">next主题官网</a></p>

<p><a href="https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/0013743862006503a1c5bf5a783434581661a3cc2084efa000" target="_blank" rel="noopener">廖雪峰的官方网站-分支管理</a></p>

---


