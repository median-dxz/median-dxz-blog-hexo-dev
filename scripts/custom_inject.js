const path = require('path');

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

hexo.extend.filter.register('theme_inject', (injects) => {
    injects.comment.raw('gitalk', '<div class="comments gitalk-container"></div>', {}, { cache: true });
    injects.bodyEnd.file('gitalk', 'layout/gitalk.njk');
});
