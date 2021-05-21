
const http = require('http')

http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080')
  res.setHeader('Access-Control-Allow-Headers','Content-Type,token')
  res.setHeader('Access-Control-Max-age', 10)
  res.setHeader('Access-Control-Allow-Credentials', true)
  
  if (req.method.toLowerCase() === 'options') {
    res.end()
  }

  if (req.url == '/list') {
    res.end(JSON.stringify({a: 1}))
  }

}).listen(8081)
