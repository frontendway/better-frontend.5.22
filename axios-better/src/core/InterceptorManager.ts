import {
  IResolvedFn,
  IRejectedFn,
  InterceptorObj
} from '../types/index'

export default class InterceptorManagerClass<T> {
  private interceptors: Array< InterceptorObj<T> | null >

  constructor () {
    this.interceptors = []
  }

  use (resolve: IResolvedFn<T>, reject?: IRejectedFn): number {
    this.interceptors.push({
      resolve,
      reject
    })
    return this.interceptors.length - 1
  }

  eject (id: number): void {
    if (this.interceptors[id]) this.interceptors[id] = null
  }

  forEach (cb: (interceptor: InterceptorObj<T>) => void): void {
    this.interceptors.forEach(i => {
      if (i) cb(i)
    })
  }
}
