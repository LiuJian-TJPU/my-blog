const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const {
  resolve,
  isDev
} = require('./utils.js');

const commonProdLoader = ['css-loader', 'postcss-loader']
const commonLessLoader = {
  loader: 'less-loader',
  options: {
    javascriptEnabled: true
  }
}
const commonSassLoader = [
  'sass-loader',
  {
    loader: 'sass-resources-loader',
    options: {
      resources: [
        // resolve方法第二个参数为scss配置文件地址，如果有多个，就进行依次添加即可
        resolve('src/styles/mixins.scss'),
        resolve('src/styles/variables.scss')
      ]
    }
  }
]
console.log(process.env.NODE_ENV)
console.log(isDev)

module.exports = {

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': resolve('src'),
      'pages': resolve('src/pages'),
      'components': resolve('src/components'),
      'constants': resolve('src/constants'),
      'styles': resolve('src/styles'),
      'utils': resolve('src/utils'),
      'selectors': resolve('src/selectors'),
      'store': resolve('src/redux/store'),
      'assets': resolve('src/assets'),
      'actions': resolve('src/redux/actions'),
      'indexJS': resolve('src/indexJS/indexJS'),
      'CONF': resolve('src/CONF'),
      'images': resolve('src/assets/images')
    }
  },

  entry: resolve('src/main.js'), // 入口文件


  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10 * 1024,
            name: '[name].[hash:4].[ext]',
            outputPath: 'images/'
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash:8].[ext]',
            outputPath: 'fonts/'
          }
        }
      },
      {
        test: /\.css$/,
        use: isDev ? ['style-loader', 'css-loader'] : [MiniCssExtractPlugin.loader, ...commonProdLoader] // 从右向左解析原则
      },
      {
        test: /\.less$/,
        use: isDev ? ['style-loader', 'css-loader', commonLessLoader] : [MiniCssExtractPlugin.loader, ...commonProdLoader, commonLessLoader]
      },
      {
        test: /\.(sass|scss)$/,
        use: isDev ? ['style-loader', 'css-loader', ...commonSassLoader] : [MiniCssExtractPlugin.loader, ...commonProdLoader, ...commonSassLoader]
      },

    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.API': JSON.stringify(process.env.API)
    })
  ]
}