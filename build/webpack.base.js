const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const { resolve, isDev } = require("./utils.js");

console.log(isDev);

module.exports = {
  resolve: {
    extensions: [".js", ".jsx"],
    // alias: {
    //   "@": resolve("src"),
    //   pages: resolve("src/pages"),
    //   components: resolve("src/components"),
    //   constants: resolve("src/constants"),
    //   styles: resolve("src/styles"),
    //   utils: resolve("src/utils"),
    //   selectors: resolve("src/selectors"),
    //   store: resolve("src/redux/store"),
    //   assets: resolve("src/assets"),
    //   actions: resolve("src/redux/actions"),
    //   indexJS: resolve("src/indexJS/indexJS"),
    //   CONF: resolve("src/CONF"),
    //   images: resolve("src/assets/images"),
    // },
    plugins: [
      new TsconfigPathsPlugin({
        configFile: resolve("jsconfig.json"),
        extensions: [".js", ".jsx"],
      }),
    ],
  },

  entry: resolve("src/main.js"), // 入口文件

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10 * 1024,
            name: "[name].[hash:4].[ext]",
            outputPath: "images/",
          },
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash:8].[ext]",
            outputPath: "fonts/",
          },
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules｜antd/,
        use: isDev
          ? [
              "style-loader",
              {
                loader: "css-loader",
                options: {
                  modules: {
                    localIdentName: "[local]-[hash:base64:5]",
                  },
                },
              },
            ]
          : [
              MiniCssExtractPlugin.loader,
              {
                loader: "css-loader",
                options: {
                  modules: {
                    localIdentName: "[local]-[hash:base64:5]",
                  },
                },
              },
              "postcss-loader",
            ], // 从右向左解析原则
      },
      {
        test: /\.less$/,
        exclude: /node_modules|antd/,
        use: isDev
          ? [
              "style-loader",
              {
                loader: "css-loader",
                options: {
                  modules: {
                    localIdentName: "[local]-[hash:base64:5]",
                  },
                },
              },
              {
                loader: "less-loader",
                options: { lessOptions: { javascriptEnabled: true } },
              },
              {
                loader: "style-resources-loader",
                options: {
                  patterns: resolve("src/css/*.less"),
                },
              },
            ]
          : [
              MiniCssExtractPlugin.loader,
              {
                loader: "css-loader",
                options: {
                  modules: {
                    localIdentName: "[local]-[hash:base64:5]",
                  },
                },
              },
              "postcss-loader",
              {
                loader: "less-loader",
                options: { lessOptions: { javascriptEnabled: true } },
              },
              {
                loader: "style-resources-loader",
                options: {
                  patterns: resolve("src/css/*.less"),
                },
              },
            ],
      },
      {
        test: /\.less$/,
        include: /antd/,
        use: isDev
          ? [
              "style-loader",
              {
                loader: "css-loader",
              },
              {
                loader: "less-loader",
                options: { lessOptions: { javascriptEnabled: true } },
              },
            ]
          : [
              MiniCssExtractPlugin.loader,
              {
                loader: "css-loader",
              },
              "postcss-loader",
              {
                loader: "less-loader",
                options: { lessOptions: { javascriptEnabled: true } },
              },
              {
                loader: "style-resources-loader",
                options: {
                  patterns: resolve("src/css/*.less"),
                },
              },
            ],
      },
      {
        test: /\.(sass|scss)$/,
        exclude: /node_modules/,
        use: isDev
          ? [
              "style-loader",
              {
                loader: "css-loader",
                options: {
                  modules: {
                    localIdentName: "[local]-[hash:base64:5]",
                  },
                },
              },
              "sass-loader",
            ]
          : [
              MiniCssExtractPlugin.loader,
              {
                loader: "css-loader",
                options: {
                  modules: {
                    localIdentName: "[local]-[hash:base64:5]",
                  },
                },
              },
              "postcss-loader",
              "sass-loader",
            ],
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      // "process.env.API": JSON.stringify(process.env.API),
    }),
  ],
};
