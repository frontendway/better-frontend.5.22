import { isPlainObject, deepMerge } from "../helpers/util"
import { IAxiosRequestConfig } from "../types/index"

let starts = Object.create(null)

function defaultStart (val1: any, val2: any): any {
  return val2 !== undefined ? val2 : val1
}

function getVal2Start (val1: any, val2: any): any {
  if (val2 !== undefined) return val2
}

function transformerStart (val1: any, val2: any): any {
  if (!val2) return val1
  if (!Array.isArray(val2)) val2 = [val2]

  return Array.prototype.concat.apply(val1, val2)
}

function deepMergeStart (val1: any, val2: any): any {
  if (isPlainObject(val2)) {
    return deepMerge(val1, val2)
  } else if (val2) {
    return val2
  } else if (isPlainObject(val1)) {
    return deepMerge(val1)
  } else if (val1) {
    return val1
  }
}

const val2StartKeys = ['url', 'params', 'data']
val2StartKeys.forEach(key => {
  starts[key] = getVal2Start
})

const deepMergeStartKeys = ['headers', 'auth']
deepMergeStartKeys.forEach(key => {
  starts[key] = deepMergeStart
})

const transformerKeyStart = ['transformRequest', 'transformResponse']
transformerKeyStart.forEach(key => {
  starts[key] = transformerStart
})

function mergeConfig (
  conf1: IAxiosRequestConfig,
  conf2?: IAxiosRequestConfig
): IAxiosRequestConfig {
  conf2 = conf2 || {}
  let newConfig = Object.create(null)

  function mergeFiled (key: string): void {
    const start = starts[key] || defaultStart
    newConfig[key] = start(conf1[key], conf2![key])
  }

  for (const key in conf2) {
    mergeFiled(key)
  }

  for (const key in conf1) {
    if (!conf2[key]) mergeFiled(key)
  }

  return newConfig
}

export default mergeConfig
