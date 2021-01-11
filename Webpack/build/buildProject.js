var webpack = require("webpack");

var config = require("../webpack.config");

webpack([config], (err, stats) => {
  process.stdout.write(stats.toString() + "\n");
});
