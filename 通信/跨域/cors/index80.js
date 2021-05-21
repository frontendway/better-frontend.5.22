const fs = require('fs')
const http = require('http')

http.createServer((req, res) => {
  if (req.url == '/') {
    res.end(fs.readFileSync('./index80.html'))
  }

}).listen(8080)
