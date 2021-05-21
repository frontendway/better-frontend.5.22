var obj = {
  name: 'hello'
}

var p = new Proxy(obj, {
  get (target, key, proxyObj) {
    console.log(target, key, proxyObj)
  },
  set (target, key, value, proxyObj) {
    console.log(arguments)
  },
  getPrototypeOf () {
    // Object.getPrototypeOf(p)
  },
  setPrototypeof () {
    // Object.setPrototypeof(p, null)
  },
  isExtensible (originTarget) {
    return true
  },
  preventExtensions (originTarget) {
    return true
  },
  getOwnPropertyDescriptor (originTarget, key, proxyObj) {
    // Object.getOwnPropertyDescriptor(p.name)
  },
  defineProperty (originTarget, key, value) {
    // Object.defineProperty(p, 't', {value: 11})
  },
  has (originTarget, key) {
    // 'foo' in p
  },
  deleteProperty (originTarget, key) {
    // delete p.name
  },
  ownKeys (originTarget) {
    // Object.getOwnPropertyNames(p)
    console.log(arguments, 'aa')
  }
})

function sum (a, b) {
  return a + b
}
let proxySum = new Proxy(sum, {
  apply (target, thisArg, args) {
    return target(args[0], args[1]) * 10
  }
})

function monster1(disposition) {
  this.disposition = disposition
}
let proxyCtor = new Proxy(monster1, {
  construct(target, args) {
    return new target(...args)
  }
})
new proxyCtor('fierce').disposition

/* 
Proxy 可以实现什么功能？
  可用来自定义对象中的操作
  let p = new Proxy(target, handler)
  Vue3.0 中已用此方法替代了 Object.defineProperty、无需一层层递归为每个属性添加代理、一次即可完成以上操作 
*/
