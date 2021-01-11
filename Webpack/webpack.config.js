const path = require("path");
const webpack = require("webpack");
const HelloCompilationPlugin = require("./plugins/HelloCompilationPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./app.js",
  context: path.join(__dirname, "src"),
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
    publicPath: "/public/assets"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "eslint-loader",
        enforce: "pre"
      },
      {
        test: [/\.less$/, /\.css$/],
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                strictMath: true
              }
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimize: false
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 8081,
    compress: true
  },
  watch: true,
  devtool: "source-map",
  plugins: [
    new HelloCompilationPlugin(),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      title: "My App",
      template: "index.html"
    })
  ]
};
