let StripLoader = require("strip-loader"),
  devConfig = require("./webpack.config.js"),
  stripLoader = {
    test: [/\.js$/, /\.es6/],
    exclude: /node_modules/,
    use: StripLoader.loader("console.log")
  };
devConfig.module.rules.push(stripLoader);
module.exports = devConfig;
