
const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')

const app = express()

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Origin, Content-Type, Accept, Authorization")
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS")
  if (req.method.toLowerCase() === 'options') return res.end() 
  next()
})

app.use(bodyParser.json())

app.get('/user', (req, res) => {
  res.send({
    name: 'testName'
  })
})

app.post('/login', (req, res) => {
  let {username} = req.body
  if (username === 'admin') {
    res.send({
      code: 0,
      data: {
        username,
        token: jwt.sign({username: 'admin'}, 'miyao', {
          expiresIn: 20
        })
      }
    })
  } else {
    res.send({
      code: 1,
      msg: '用户名不存在'
    })
  }
})

app.get('/validate', (req, res) => {
  let token = req.headers.authorization
  jwt.verify(token, 'miyao', (err, decode) => {
    if (err) {
      res.send({
        code: 1,
        msg: 'token失效'
      })
    } else {
      res.send({
        code: 0,
        data: {
          username: decode.username,
          token: jwt.sign({username: 'admin'}, 'miyao', {
            expiresIn: 20
          })
        }
      })
    }
  })
})

app.listen(3033)
