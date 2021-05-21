Function.prototype.myApply = function(context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  context = context || window
  context.fn = this
  let result
  // 处理参数和 call 有区别
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }
  delete context.fn
  return result
}

/* 
  apply求最大值
  案例
    Math.min.apply(null, [10, 999, 1, 2])
  案例
    var min = arr[0]
    for (let item of arr) {
      item < min ? min = item : null
    }
  案例
    arr.sort((a, b) => b - a)
*/