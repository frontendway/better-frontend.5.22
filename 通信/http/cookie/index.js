const http = require('http')
const querystring = require('querystring')
const crypto = require('crypto')

function createSign (data) {
  return crypto.createHmac('sha256', 'secret').update(data).digest('base64').replace(/[+/]/g, '')
}

http.createServer(function (req, res) {
  if (req.url == '/read') {
    let cookies = querystring.parse(req.headers.cookie, '; ') || {}

    if (!cookies.name) return res.end('无')
    
    let [value, signValue] = cookies.name.split('.')
    if (createSign(value) !== signValue) {
      cookies.name = 'name cuangai'
    }
    res.end(JSON.stringify(cookies))
  }

  if (req.url == '/read2') {
    let cookies = querystring.parse(req.headers.cookie, '; ') || {}
    res.end(JSON.stringify(cookies))
  }

  if (req.url == '/write') {
    const value = 'value'
    res.setHeader('Set-Cookie', ['name=value.'+createSign(value)+'; domain=.cookie.com; httpOnly=true'])
    res.end('write ok')
  }

}).listen(8081)
