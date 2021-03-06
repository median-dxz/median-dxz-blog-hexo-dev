- [x] hexo-config-search
- [ ] prismjs:
- [ ] highlight:
- [ ] Include / Exclude file(s)
- [ ] img_optimization:
- [ ] aplayer:
- [ ] symbols_count_time:
- [ ] hexo-tag-cloud
- [ ] deploy
- [x] index_generator
- [ ] Metadata elements
- [ ] Pagination
- [ ] cros-proxy
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