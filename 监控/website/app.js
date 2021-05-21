
const koa = require('koa')
const server = require('koa-static')
const path = require('path')

const koaInstance = new koa()

koaInstance.use(server(path.resolve('./client')))
koaInstance.use(server(path.resolve('./node_modules')))

koaInstance.listen(3000)
