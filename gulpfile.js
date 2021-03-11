const { series, parallel, src, dest } = require("gulp");
const { minify: minifier_js } = require("terser");
const { minify: minifier_html } = require("html-minifier-terser");
const minifier_css = require("clean-css");
const through = require("through2");
const sharp = require("sharp");
const Vinyl = require("vinyl");

function task_minify_css() {
  return src(["public/**/*.css", "!public/**/*.min.css"])
    .pipe(
      through.obj(function (file, enc, done) {
        let output = new minifier_css().minify(file.contents.toString());
        let outfile = new Vinyl({
          base: file.base,
          path: file.path,
          contents: Buffer.from(output.styles),
        });
        this.push(outfile);
        done();
      })
    )
    .pipe(dest("./public"));
}

function task_minify_js() {
  return src(["public/**/*.js", "!public/**/*.min.js"])
    .pipe(
      through.obj(async function (file, enc, done) {
        var output = await minifier_js(file.contents.toString(), { compress: false, mangle: true });
        let outfile = new Vinyl({
          base: file.base,
          path: file.path,
          contents: Buffer.from(output.code),
        });
        this.push(outfile);
        done();
      })
    )
    .pipe(dest("./public"));
}

function task_minify_html() {
  return src(["public/**/*.html"])
    .pipe(
      through.obj(function (file, enc, done) {
        let output = minifier_html(file.contents.toString(), {
          minifyCSS: true,
          minifyJS: true,
          collapseWhitespace: true,
          conservativeCollapse: true,
          preserveLineBreaks: true,
          preventAttributesEscaping: true,
          quoteCharacter: "'",
          removeStyleLinkTypeAttributes: true,
          removeScriptTypeAttributes: true,
        });
        let outfile = new Vinyl({
          base: file.base,
          path: file.path,
          contents: Buffer.from(output),
        });
        this.push(outfile);
        done();
      })
    )
    .pipe(dest("./public"));
}

function task_minify_img() {
  return src("public/**/*.+(png|jpg)")
    .pipe(
      through.obj(async function (file, enc, done) {
        let output = await sharp(file.contents)
          .resize(1920, null, {
            fastShrinkOnLoad: false,
            withoutEnlargement: true,
            fit: "inside",
          })
          .jpeg({
            force: false,
            progressive: true,
            quality: 90,
          })
          .png({
            force: false,
            compressionLevel: 9,
            adaptiveFiltering: true,
            progressive: true,
          })
          .toBuffer();
        let outfile = new Vinyl({ base: file.base, path: file.path, contents: Buffer.from(output) });
        this.push(outfile);
        done();
      })
    )
    .pipe(dest("./public"));
}

exports.minifyCSS = task_minify_css;
exports.minifyJS = task_minify_js;
exports.minifyIMG = task_minify_img;
exports.minifyHTML = task_minify_html;

exports.default = series(parallel(task_minify_html, task_minify_img, task_minify_js, task_minify_css));