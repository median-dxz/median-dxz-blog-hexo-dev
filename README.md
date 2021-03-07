# median-dxz-blog-hexo-dev

Median - dxz ' s Blog Project

# TODO

- [x] 首页置顶的实现和样式
- [x] cros-proxy的自有部署worker实现
- [x] 基于three.js的3d背景动效(给官方提pr还未合并，先用fork的cdn)
- [ ] 方便的添加图片
- [ ] 换计数器
- [ ] 动画效果
- [ ] 字体多元
- [ ] 标签云
- [ ] 文件压缩及缓存机制
- [x] 格式化ht，js，css
- [x] 一言
- [x] 音乐
- [ ] 字体：Raleway|core_sans_n45_regular
- [ ] 新建文章选择分类
- [ ] 重写about，project等定制页面
- [ ] gulp打包不支持es6
- [ ] 定制的文章置顶又炸了……另外里面又有一个true
- [x] hexo-config-search
- [ ] prismjs:
- [ ] highlight:
- [ ] Include / Exclude file(s)
- [ ] img_optimization:
- [ ] aplayer:
- [ ] symbols_count_time:
- [ ] hexo-tag-cloud
- [ ] deploy
- [ ] Metadata elements
- [ ] Pagination
- [ ] https://prettier.io/docs/en/options.html
- [ ] https://github.com/prettier/eslint-config-prettier
- [ ] 分类页样式
- [ ] 标签页样式
- [ ] toc和概览切换速度
- [ ] 404
- [ ] 一些页面去date
- [ ] 高亮
- [ ] css扩展设置
- [ ] 字体再设置
- [ ] 音乐重实现
- [ ] 添加blog上一次部署信息

**family**: PT Mono, Noto Serif SC可行

If you still need more customization, following change will cover Fonts Customization function. Edit `source/_data/variables.styl` in site root directory and add two varibles:

```
hexo/source/_data/variables.styl
// Title Font, set it to font family you want.
$font-family-headings = Georgia, sans

// Set it to font family you want.
$font-family-base = "Microsoft YaHei", Verdana, sans-serif

// Code Font.
$code-font-family = "Input Mono", "PT Mono", Consolas, Monaco, Menlo, monospace

// Font size of articles.
$font-size-base = 16px

// Font size of table and code.
$table-font-size = 13px
```

Then uncomment `variable` under the `custom_file_path` section in theme config file.

- [ ] seo
- [ ] 翻译
 ### Override Default Translations

  If you would like to customize the default translation, you do not need to modify the translation files in the `languages` directory. You can override all translations using [Data Files](https://hexo.io/docs/data-files).

  1. Creat a `languages.yml` in `source/_data`.

  2. Insert following codes: (be careful about the two-space indent)

     ```
     languages.yml
     # language
     zh-CN:
       # items
       post:
         copyright:
           # the translation you perfer
           author: 本文博主
     en:
       menu:
         schedule: Calendar
     ```

  This situation is also available for off-list items. For example, Next uses [Theme Inject](https://theme-next.js.org/docs/advanced-settings/injects.html) to introduce the commments systems. You can rename the returned value in chinese as followed:

  ```
  languages.yml
  # language
  zh-CN:
    # items
    post:
      comments:
        disqus: 评论
  ```

- [ ] Analytics
- [ ] tag-plugins hexo+next
- [ ] *Animation*

