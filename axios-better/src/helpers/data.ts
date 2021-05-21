import { isPlainObject } from './util'

export function transformRequestData (data: any): any {
  if (!data) return

  return isPlainObject(data) ? JSON.stringify(data) : data
}

export function tryTransformResponseData (data: any): any {
  if (typeof data !== 'string') return data
  
  try {
    data = JSON.parse(data)    
  } catch (error) {
    // do nothing
  }

  return data
}
