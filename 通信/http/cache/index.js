const fs = require('fs')
const url = require('url')
const http = require('http')
const path = require('path')
const crypto = require('crypto')

http.createServer(function (req, res) {
  const {pathname} = url.parse(req.url, true)
  const abs = path.join(__dirname, pathname)

  /* 
    强制缓存 
      旧版浏览器不支持 Cache-Control 故 Expires 要设置、此为兼容方案
      res.setHeader('Cache-Control', 'max-age=10, public')
      res.setHeader('Expires', new Date(Date.now() + 10000).toGMTString())

    对比缓存
      Last-Modified
        首次访问
          服务器设置响应头 Last-Modified 其值是文件最后修改时间
        再次访问
          浏览器自动携带请求头 If-Modified-Since 其值也是文件最后修改时间
          服务器对比其值未更改、则不返回内容并设置响应状态码为 304
        缺点
          文件修改后又撤回原始内容、则也会重新返回文件
          时间精确到秒、可能会有问题
      Etag
        根据文件内容算出唯一值、一般 etag 不用太精准实际开发取文件大小与修改时间
        缺点
          因为要读取文件则耗性能 但最精准
        Etag 与 If-None-Match 对应
  */

  fs.stat(abs, (err, stat) => {
    if (err) {
      res.statusCode = 404
      res.end('Not Found')
      return
    }
    if (stat.isFile()) {
      /* const ctime = stat.ctime.toGMTString()
      if (req.headers['if-modified-since'] == ctime) {
        res.statusCode = 304
        return res.end()
      }
      res.setHeader('Last-Modified', ctime)  */
   
      const fileData = fs.readFileSync(abs)
      const etag = crypto.createHash('md5').update(fileData).digest('base64')
      if (req.headers['if-none-match'] == etag) {
        res.statusCode = 304
        res.end()
        return
      }
      res.setHeader('Etag', etag)
      
      fs.createReadStream(abs).pipe(res)
    }
  })

}).listen(8080)
