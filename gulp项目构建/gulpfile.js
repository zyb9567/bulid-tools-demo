const { src, dest, parallel, watch } = require("gulp");
const htmlmin = require("gulp-htmlmin");
const babel = require("gulp-babel");
const terser = require("gulp-terser");

// 对html打包
const htmlTask = () => {
  return src("./src/**/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest("../dist/"));
};

const jsTask = () => {
  return src("./src/**/*.js")
    .pipe(babel())
    .pipe(terser())
    .pipe(dest("../dist/"));
};

const fileBuild = parallel(htmlTask, jsTask);
watch("./src/**/*.html", htmlTask);
watch("./src/**/*.js", jsTask);
module.exports = {
  fileBuild,
};
