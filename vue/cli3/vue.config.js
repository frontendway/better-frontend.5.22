const path = require('path')

module.exports = {
  // 打包后引入的JS地址
  publicPath: './',
  // 将静态文件打包放入的文件夹
  assetsDir: 'dir',
  // 打包后的文件夹名 默认 dist
  outputDir: './myDist',
  // 是否使用template编译
  runtimeCompiler: true,
  productionSourceMap: false,
  // webpack配置中加入自己的配置
  chainWebpack: config => {
    config.resolve.alias.set('_view', path.resolve(__dirname, 'src/view'))
  },
  configuireWebpack: {
    plugins: [],
    module: {}
  },
  // 第三方插件
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        // 插入全局样式
        path.resolve(__dirname, 'src/assets/common.less')
      ]
    }
  }
}
