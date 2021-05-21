var arr = ['a', ['b', 'c'], 2, ['d', 'e', 'f'], 'g', 3, 4]
// 1
function flat (arr) {
  if (!arr || !arr.length) return
  let res = []
  arr.forEach(item => {
    Array.isArray(item) ? res = res.concat(flat(item))
                        : res.push(item)
  })

  return res
}

// 2
Array.prototype.toString = function () {
  return this.join(',')
}
function flat (arr) {
  return arr + ''
}

// 3
Array.prototype.toString = function () {
  return this.join(',')
}
function flat (arr) {
  return arr + ''
}

// 4
arr.join(',')

// 5
arr.flat(Infinity)

// 6 只拍平一层
Array.prototype.concat.apply([], arr)
