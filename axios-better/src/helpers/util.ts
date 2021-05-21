const _toString = Object.prototype.toString

export function isDate (val: any): val is Date {
  return _toString.call(val) === '[object Date]'
}

export function isPlainObject (val: any): val is Object {
  return _toString.call(val) === '[object Object]'
}

export function toExtend<T, U> (from: T, to: U): T&U {
  for (const key in from) {
    (to as T&U)[key] = from[key] as any
  }
  return to as T&U
}

export function deepMerge (...args: any[]): any {
  let newObj = Object.create(null)

  args.forEach(obj => {
    if (!isPlainObject(obj)) return

    Object.keys(obj).forEach(key => {
      let value = obj[key]
      if (isPlainObject(value)) {
        if (isPlainObject(newObj[key])) {
          newObj[key] = deepMerge(newObj[key], value)
        } else {
          newObj[key] = deepMerge(value)
        }
      } else {
        newObj[key] = value
      }
    })
  })

  return newObj
}

export function isFormdata (val: any): val is FormData {
  return val !== undefined && val instanceof FormData
}

export function isURLSearchParams (params: any): params is URLSearchParams {
  return params !== undefined && params instanceof URLSearchParams
}
