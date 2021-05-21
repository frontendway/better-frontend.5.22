
Function.prototype.myCall = function (ctx, ...args) {
  const fn = this

  ctx = ctx || window
  ctx.fn = fn
  const result = ctx.fn(...args)
  delete ctx.fn

  return result
}

/* 
  call执行原理
  fn.call()
  先找到 prototype 上的 call 方法
  将 call 方法中 this 的 this 关键字修改为第一个实参
  将 call 方法中的 this 执行、其余参数传入
  案例
    function fn1 () {
			console.log('fn1')
		}
		function fn2 () {
			console.log('fn2')
		}
		Function.prototype.call.call(fn1)
    fn1.call.call(fn2)
*/
