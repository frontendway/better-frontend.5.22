const Path = require('path')

module.exports = {
  entry: './src/index.js',
  externals: ['lodash'], // 如果用户已经安装lodash 则自己的库则不会再打包lodash
  output: {
    path: Path.resolve(__dirname, 'dist'),
    filename: 'library.js',
    library: 'library', // 支持 script 标签引入全局变量为 library
    libraryTarget: 'umd' // 任何方式引用库都能引用到
  }
}
