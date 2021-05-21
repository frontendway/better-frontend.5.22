// 性能监控
/* function processData (p) {
  let data = {
    prevPage: p.fetchStart - p.navigationStart, // 上一个页面卸载时间
    dns: p.domainLookupEnd - p.domainLookupStart, // dns解析时长
    tcp: p.connectEnd - p.connectStart,
    reqres: p.responseEnd - p.requestStart, // 当前页面响应总时长
    ttfb: p.responseStart - p.navigationStart, // 接收到首字节时长
    domready: p.domInteractive - p.domLoading, // dom解析时长
    whitescreen: p.domLoading - p.navigationStart, // 白屏时间
    allresource: p.domComplete - p.domLoading, //dom开始解析到页面所有资源加载完毕时间
    onloadEvent: p.loadEventEnd - p.loadEventStart, // onload 事件执行时间
    total: p.loadEventEnd - p.navigationStart // 总时长
  }

  return data
}

const load = (cb) => {
  let timer = null
  let check = () => {
    if (performance.timing.loadEventEnd) {
      cb()
      clearTimeout(timer)
    } else {
      timer = setTimeout(check, 100)
    }
  }

  window.addEventListener('load', check, false)
}

const domready = (cb) => {
  let timer = null
  let check = () => {
    if (performance.timing.domInteractive) {
      cb()
      clearTimeout(timer)
    } else {
      timer = setTimeout(check, 100)
    }
  }

  window.addEventListener('DOMContentLoaded', check, false)
}

function init (cb) {
  domready(() => {
    const data = processData(performance.timing)
    data.type = 'domready'
    cb(data)
  })

  load(() => {
    const data = processData(performance.timing)
    data.type = 'loaded'
    cb(data)
  })
  
}

init((data) => {
  const queryString = Object.entries(data).map(item => item.join('=')).join('&')
  new Image().src = '/pay?' + queryString
}) */

// 静态资源加载情况监控
function init (cb) {
  window.addEventListener('load', () => {
    const resource = performance.getEntriesByType('resource')
    cb(resource)
  }, false)
}

init((data) => {
  console.log(data)
})
