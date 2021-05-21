function analysis (p2, res, resolve, reject) {
  if (p2 === res) {
    return reject(new TypeError('循环引用'))
  }

  if ((typeof res === 'object' && res !== null) || typeof res === 'function') {
    try {
      let then = res.then
      if (typeof then === 'function') {
        then.call(res, x => analysis(p2, x, resolve, reject), r => reject(r))
      } else {
        resolve(res)
      }
    } catch (err) {
      reject(err)
    }
  } else {
    resolve(res)
  }
}
  
class IPromise {
  static race (prs) {
    return new Promise((resolve, reject) => {
      for (let p of prs) {
        if (p.then && typeof p.then === 'function') {
          p.then(resolve, reject)
        } else {
          resolve(p)
        }
      }
    })
  }
  static all (prs) {
    return new Promise((resolve, reject) => {
      let index = 0
      let result = []

      function canDoResolve (data, i) {
        index++
        result[i] = data
        index === prs.length ? resolve(result) : null
      }

      prs.forEach((p, i) => {
        if (p.then && typeof p.then === 'function') {
          p.then(data => canDoResolve(data, i), reject)
        } else {
          canDoResolve(p, i)
        }
      })
    })
  }
  static deferred () {
    let dfd =  {}
    dfd.promise = new Promise((resolve, reject) => {
      dfd.resolve = resolve
      dfd.reject = reject
    })

    return dfd
  }
  constructor (actuator) {
    const _this = this
    _this.status = 'pending'
    _this.error = null
    _this.value = null
    _this.resolveCbs = []
    _this.rejectCbs = []

    function resolve (val) {
      if (_this.status = 'pending') {
        _this.status = 'resolve'
        _this.value = val
        _this.resolveCbs.forEach(resolveCb => resolveCb())
      }
    }

    function reject (err) {
      if (_this.status = 'pending') {
        _this.status = 'reject'
        _this.error = err
        _this.rejectCbs.forEach(rejectCb => rejectCb())
      }
    }

    try {
      actuator(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }
  then (onFulfilled, onRejected) {
    const _this = this

    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : data => data
    onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err }

    const p2 = new IPromise((resolve, reject) => {
      setTimeout(() => {
        if (_this.status === 'resolve') {
          try {
            const res = onFulfilled(_this.value)
            analysis(p2, res, resolve, reject)
          } catch (err) {
            reject(err)
          }
        }

        if (_this.status === 'reject') {
          try {
            const res = onRejected(_this.error)
            analysis(p2, res, resolve, reject)
          } catch (err) {
            reject(err)
          }
        }

        if (_this.status === 'pending') {
          _this.resolveCbs.push(() => {
            try {
              const res = onFulfilled(_this.value)
              analysis(p2, res, resolve, reject)
            } catch (err) {
              reject(err)
            }
          })

          _this.rejectCbs.push(() => {
            try {
              const res = onRejected(_this.error)
              analysis(p2, res, resolve, reject)
            } catch (err) {
              reject(err)
            }
          })
        }
      }, 0)
    })

    return p2
  }
}
