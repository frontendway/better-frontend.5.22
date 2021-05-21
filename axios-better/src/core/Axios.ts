import {
  IAxiosRequestConfig, 
  IAxiosResponseConfig,
  InterceptorManager,
  IAxiosResponse,
  IResolvedFn,
  IRejectedFn
} from '../types/index'
import dispatchRequest from './dispatchRequest'
import InterceptorManagerClass from './InterceptorManager'
import mergeConfig from './mergeConfig'

interface interceptors {
  request: InterceptorManager<IAxiosRequestConfig>
  response: InterceptorManager<IAxiosResponseConfig>
}

interface IParts {
  resolve: IResolvedFn<any> | ((config: IAxiosRequestConfig) => IAxiosResponse),
  reject?: IRejectedFn
}

export default class Axios {
  public interceptors: interceptors
  public defaults: IAxiosRequestConfig

  constructor (initConfig: IAxiosRequestConfig) {
    this.defaults = initConfig

    this.interceptors = {
      request: new InterceptorManagerClass<IAxiosRequestConfig>(),
      response: new InterceptorManagerClass<IAxiosResponseConfig>()
    }
  }
  request (url: any, config?: any): IAxiosResponse {
    if (typeof url === 'string') {
      config = config || {}
      config.url = url
    } else {
      config = url
    }

    config = mergeConfig(this.defaults, config)

    let parts: IParts[] = [{
      resolve: dispatchRequest,
      reject: undefined
    }]

    this.interceptors.request.forEach(interceptor => parts.unshift(interceptor))
    this.interceptors.response.forEach(interceptor => parts.push(interceptor))

    let promise = Promise.resolve(config)
    while (parts.length) {
      const {resolve, reject} = parts.shift()!
      promise = promise.then(resolve, reject)
    }

    return promise
  }
  get (url: string, config?: IAxiosRequestConfig): IAxiosResponse {
    return this._requestWithoutData(url, 'get', config)
  }
  delete (url: string, config?: IAxiosRequestConfig): IAxiosResponse {
    return this._requestWithoutData(url, 'delete', config)
  }
  options (url: string, config?: IAxiosRequestConfig): IAxiosResponse {
    return this._requestWithoutData(url, 'options', config)
  }
  head (url: string, config?: IAxiosRequestConfig): IAxiosResponse {
    return this._requestWithoutData(url, 'head', config)
  }
  post (url: string, data?: any, config?: IAxiosRequestConfig): IAxiosResponse {
    return this._requestWithData(url, 'post', data, config)
  }
  put (url: string, data?: any, config?: IAxiosRequestConfig): IAxiosResponse {
    return this._requestWithData(url, 'put', data, config)
  }
  patch (url: string, data?: any, config?: IAxiosRequestConfig): IAxiosResponse {
    return this._requestWithData(url, 'patch', data, config)
  }
  _requestWithoutData (url: string, method: string, config?: IAxiosRequestConfig) {
    const mergeConfig = Object.assign({url, method}, config || {})

    return this.request(mergeConfig)
  }
  _requestWithData (url: string, method: string, data?: any, config?: IAxiosRequestConfig) {
    let mergeConfig = Object.assign({url, method, data}, config || {})
    data && (mergeConfig.data = data)
    
    return this.request(mergeConfig)
  }
}
