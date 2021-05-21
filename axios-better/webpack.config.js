const path = require('path')

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'axios-better.umd.js',
    library: 'library',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    port: 9191,
    contentBase: path.resolve(__dirname, 'dist'),
    open: true
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  }
}
