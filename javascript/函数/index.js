// 两者适用于不同的场景
// 防抖：频繁操作结束后触发
function debounce (fn, delay = 500) {
  let timer = null

  return function () {
    if (timer) clearTimeout(timer)

    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
}

oInput.addEventListener('keyup', debounce(function () {
  console.log(this.value)
}))

/* 
  节流：频繁操作的过程中保持一定的频率连续触发
  比如：拖拽元素过程中随时获取元素位置
*/
function throttle (fn, delay = 500) {
  let timer = null

  return function () {
    if (timer) return
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
}

// 深度对比 2 个对象是否相等
function isObject (target) {
  return target !== null && typeof target === 'object'
}

function isEqual (obj1, obj2) {
  if (obj1 === obj2) {
    return true
  } else if (isObject(obj1) && !isObject(obj2)) {
    return false
  } else if (!isObject(obj1) && isObject(obj2)) {
    return false
  }

  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)
  if (keys1.length !== keys2.length) return false

  for (const key in obj1) {
    if (!isEqual(obj1[key], obj2[key])) return false
  }
  
  return true
}
