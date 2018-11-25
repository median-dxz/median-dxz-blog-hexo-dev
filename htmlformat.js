var fs = require('fs'),
    fileList = [];
var minify = require('html-minifier').minify;

function walk(path) {
    var dirList = fs.readdirSync(path);
    dirList.forEach(function (item) {
        if (fs.statSync(path + '/' + item).isDirectory()) {
            walk(path + '/' + item);
        } else {
            fileList.push(path + '/' + item);
        }
    });
}

walk('public');
filenameList = fileList.filter(el => /\.html$/.test(el))
console.log(filenameList);

filenameList.forEach(
    function (v, i, a) {
        fs.readFile(v, 'utf8', function (err, data) {
            if (err) {
                throw err;
            }
            fs.writeFile(v, minify(data,
                {
                    removeComments: true,//清除HTML注释
                    collapseWhitespace: true,//压缩HTML
                    collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
                    removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
                    removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
                    removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
                    minifyJS: true,//压缩页面JS
                    minifyCSS: true,//压缩页面CSS
                    conservativeCollapse: true,
                    preserveLineBreaks: true,
                }), function () {
                    console.log('success');
                }
            );
        });
    }
);

