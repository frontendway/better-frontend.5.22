const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    app: path.join(__dirname, '../src/app.js')
  },
  output: {
    path: path.join(__dirname, '../dist')
  },
  optimization: {
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks: {
      chunks: 'initial',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel-loader" 
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1024,
            name: '[name].[hash:8].[ext]',
            outputPath: 'static/imgs/'
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({ // 发现模块中使用了 $ 变量自动引入 jquery
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
}
