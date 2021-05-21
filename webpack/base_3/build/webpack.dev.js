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
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../index.html')
    })
  ]
}

module.exports = merge(common, dev)
