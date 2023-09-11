const { series, parallel } = require("gulp");

const log1 = (cb) => {
  setTimeout(() => {
    console.log(11111);
    cb();
  }, 2000);
};

const log2 = (cb) => {
  setTimeout(() => {
    console.log(22222);
    cb();
  }, 1000);
};

const log3 = (cb) => {
  setTimeout(() => {
    console.log(33333);
    cb();
  }, 3000);
};

const seriesLog = series(log1, log2, log3);

const parallelLog = parallel(log1, log2, log3);

module.exports = {
  seriesLog,
  parallelLog,
};
