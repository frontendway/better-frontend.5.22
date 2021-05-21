const HtmlWebpackPlugin = require('html-webpack-plugin')
const common = require('./webpack.common')
const merge = require('webpack-merge')
const path = require('path')

const dev = {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    port: 9090,
    hot: true
  },
  optimization: {
    usedExports: true
  },
  output: {
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader', 
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          }, 
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../index.html')
    })
  ]
}

module.exports = merge(common, dev)
