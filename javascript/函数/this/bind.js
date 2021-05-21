
Function.prototype.myBind = function (ctx, ...arg) {
  const self = this
  function F () {
    self.apply(ctx, [...arg, ...arguments])
  }
  F.prototype = Object.create(self.prototype)
  F.prototype.constructor = self
  return F
}

/* 
  var fn1 = fn.bind({a: 1})
  var fn2 = fn1.bind({a: 2}) 只能 bind 一次
  fn2 中的 this 还是 {a: 1}
*/