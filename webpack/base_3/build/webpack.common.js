const path = require('path')

module.exports = {
  entry: {
    app: path.join(__dirname, '../src/app.js')
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../dist')
  },
  optimization: {
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
      }
    ]
  }
}
