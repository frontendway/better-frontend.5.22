/* 
  60帧/s
  延时时间是精准的
  自带节流特性、基本可以保证在 16.6ms 内执行一次
  浏览器切换到后台此 api 灰暂停、而 setTimeout 依然执行
*/

function interval (cb, time) {
  const now = Date.now
  let timer, start, end
  start = end = now()

  function loop () {
    timer = window.requestAnimationFrame(loop)
    end = now()
    if ((end - start) >= time) {
      start = end = now()
      cb(timer)
    }
  }

  loop()
}

let a = 0
interval(timer => {
  console.log(timer)
  ++a
  if (a === 3) window.cancelAnimationFrame(timer)
}, 1000)

// 将 div 宽度从 100px 3s 内增加到 640px
let start = 100, end = 640
function animate1 () {
  start += 3
  if (start < end) {
    setTimeout(animate, 16.7)
  }
}
animate1()

function animate2 () {
  start += 3
  if (start < end) {
    window.requestAnimationFrame(animate2)
  }
}
animate2()
