/* 
  只是减少了 new Promise 外层嵌套的一层函数
  原生Promise 并没有此方法
  function read (url) {
    let defer = Promise.defer()
    fs.readFile(url, 'utf8', (err, data) => {
      if (err) defer.reject(err)
      defer.resolve(data)
    })
    
    return defer.promise
  } 
*/

Promise.defer = function () {
  let dfd =  {}
  dfd.promise = new Promise((resolve, reject) => {
    dfd.resolve = resolve
    dfd.reject = reject
  })

  return dfd
}
