const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: path.resolve('./src/main.js')
  },
  devServer: {
    contentBase: path.resolve('./dist'),
    port: 9000,
    hot: true
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader' 
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1024, // 1kb
            name: '[name]_[hash:8].[ext]',
            outputPath: 'statics/images'
          }
        }
      },
      {
        test: /\.(woff|woff2|svg|ttf|eot)$/i,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'statics/fonts'
          }
        }
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2 
              // scss 文件中通过 import 引入的 scss 文件也要通过下面 2 个 loader 处理一遍才行
            }
          },
          {loader: 'sass-loader'},
          {loader: 'postcss-loader'}
        ]
      }
    ]
  },
  output: {
    filename: '[name].js', // name 变量占位写死的文件名、配合多入口的配置
    path: path.resolve('dist'),
    // publicPath: 'http://cdn.com.cn' index.html 引入资源前缀路径
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html'
    }),
    new CleanWebpackPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}
