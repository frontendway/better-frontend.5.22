import { isPlainObject, deepMerge } from "./util"
import { Methods } from '../types/index'

function normalizeHeaders (headers: any, normalizeName: string): void {
  Object.keys(headers).forEach(key => {
    if (key !== normalizeName && key.toLocaleLowerCase() === normalizeName.toLocaleLowerCase()) {
      headers[normalizeName] = headers[key]
      delete headers[key]
    }
  })
}

export function transformRequestHeaders (data: any, headers: any): any {
  normalizeHeaders(headers, 'Content-Type')
  
  if (isPlainObject(data)) {
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;charset=utf-8'
    }
  }
  return headers
}

export function flatHeaders (headers: any, method: Methods): any {
  if (!headers) return

  headers = deepMerge(headers.common, headers[method], headers)
  const deleteMethod = ['delete', 'get', 'head', 'options', 'post', 'put', 'patch', 'common']
  deleteMethod.forEach(m => {
    delete headers[m]
  })

  return headers
}
