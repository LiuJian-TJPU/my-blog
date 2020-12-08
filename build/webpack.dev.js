// const webpack = require('webpack');
const webpackMerge = require("webpack-merge");
const baseConfig = require("./webpack.base");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const { resolve } = require("./utils.js");

const { proxy } = require("./utils");

module.exports = webpackMerge(baseConfig, {
  // 指定构建环境
  mode: "development",
  devtool: "eval-source-map",
  output: {
    publicPath: "/",
  },
  devServer: {
    contentBase: resolve("public"),
    open: true,
    // host: 'localhost',
    host: "0.0.0.0",
    disableHostCheck: true,
    port: 3008,
    // port: 443,
    // https: true,
    overlay: true,
    // hot: true,
    // inline: true
    noInfo: true,
    historyApiFallback: true,
    proxy,
  },
  stats: "errors-only",
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve("public/index.html"),
    }),
    // ,new webpack.HotModuleReplacementPlugin()
  ],
});
