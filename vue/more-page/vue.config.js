
module.exports = {
  pages: {
    index: {
      entry: 'src/pages/index/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    },
    plugin: 'src/pages/plugin/main.js',
    jwt: 'src/pages/jwt/main.js'
  },
  devServer: {
    /* proxy: {
      '/api/v1.0/parent': {
        target: 'http://h5.tfsitest.com',
        ws: true,
        changeOrigin: true
      }
    }, */
    port: 3031
  }
}
