var origin = Array.prototype.push

function def (obj, key, val) {
  Object.defineProperty(obj, key, {
    value: val,
    configurable: true,
    enumerable: true
  })
}

function newPush () {
  // this 指向原数组
  var res = origin.apply(this, arguments)
  return res
}

var src = Object.create(null)
def(src, 'push', newPush)

var list = [1, 2]
list.__proto__ = src

list.push(3)
