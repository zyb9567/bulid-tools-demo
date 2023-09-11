const { src, dest } = require("gulp");

const copyFile = () => {
  return src("./src/**/*.js").pipe(dest("../dist/"));
};

module.exports = {
  copyFile,
};
