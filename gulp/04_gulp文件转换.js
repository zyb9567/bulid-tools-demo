const { src, dest, watch } = require("gulp");
const babel = require("gulp-babel");
const terser = require("gulp-terser");

const jsTask = () => {
  return src("./src/**/*.js")
    .pipe(babel())
    .pipe(
      terser({
        mangle: { toplevel: true },
      })
    )
    .pipe(dest("../dist"));
};

// 监听src下js文件变动，自动打包
watch("./src/**/*.js", jsTask);

module.exports = {
  jsTask,
};
