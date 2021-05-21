let path = require('path')
let fs = require('fs')
let vm = require('vm')

class Module {
  constructor (absPathName) {
    this.id = absPathName
    this.exports = {}
  }
}

Module._cache = {}

Module._extensions = {
  '.js'(module) {
    let js = fs.readFileSync(module.id, 'utf8')
    let wrap =  [
      '(function (exports, module, require, __dirname, __filename) {',
      '})'
    ]
    let strFn = `${wrap[0]}${js}${wrap[1]}`
    let realFn = vm.runInThisContext(strFn)
    realFn.call(module.exports, module.exports, module, req)
  },
  '.json' (module) {
    let json = fs.readFileSync(module.id, 'utf8')
    module.exports = json
  }
}

function loadModule (module) {
  let ext = path.extname(module.id)
  Module._extensions[ext](module)
}

function req (pathName) {
  let absPathName = path.resolve(pathName)
  if (Module._cache[absPathName]) {
    return Module._cache[absPathName].exports
  }
  let module = new Module(absPathName)
  loadModule(module)
  Module._cache[absPathName] = module
  return module.exports
}

// 自测
let obj = req('./a.js')
console.log(obj(), 'obj')

