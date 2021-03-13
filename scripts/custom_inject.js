hexo.extend.filter.register('theme_inject', function (injects) {
  injects.footer.file(
    'custom_footer',
    'layout/custom_footer.ejs',
    {
      updatedTime: new Date().toLocaleString(),
    },
    { cache: true }
  );
});
