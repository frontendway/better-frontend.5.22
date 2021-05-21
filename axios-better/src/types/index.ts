export type Methods = 'get' | 'GET'
| 'post' | 'POST'
| 'delete' | 'DELETE'
| 'options' | 'OPTIONS'
| 'head' | 'HEAD'
| 'patch' | 'PATCH'

export interface IAxiosBasicCredentials {
  username: string
  password: string
}

export interface ITransformer {
  (data: any, headers: any): any
}

export interface IAxiosRequestConfig {
  baseURL?: string
  url?: string
  headers?: any
  responseType?: XMLHttpRequestResponseType
  method?: Methods
  params?: any
  data?: any
  timeout?: number
  withCredentials?: boolean
  validateStatus?: (status: number) => boolean
  paramsSerializer?: (params: any) => string
  xrsfCookieName?: string
  xrsfHeaderName?: string
  onDonwloadProgress?: (e: ProgressEvent) => void
  onUploadProgress?: (e: ProgressEvent) => void
  auth?: IAxiosBasicCredentials
  transformRequest?: ITransformer | ITransformer[]
  transformResponse?: ITransformer | ITransformer[]
  cancelToken?: ICancelTokenInstance

  [key: string]: any
}

export interface ICanceler {
  (msg?: string): void
}

export interface ICancelInstance {
  msg?: string
}

export interface ICancelTokenSource {
  cancel: ICanceler
  token: ICancelTokenInstance
}

export interface ICancelTokenInstance {
  promise: Promise<ICancelInstance>
  reason?: ICancelInstance
  throwIfRequested (): void
}

export interface ICancelExecutor {
  (c: ICanceler): void
}

export interface ICancelTokenStatic {
  new(c: ICancelExecutor): ICancelTokenInstance
  source (): ICancelTokenSource
}

export interface ICancelStatic {
  new(msg?: string): ICancelInstance
}

export interface IAxiosResponseConfig {
  data: any
  status: number
  statusText: string
  headers: any
  config: IAxiosRequestConfig
}

export interface IAxiosResponse extends Promise<IAxiosResponseConfig> {}

export interface IAxiosResponseErrorConfig {
  message: string
  config: IAxiosRequestConfig
  code: string | null
  request: XMLHttpRequest
  response: IAxiosResponse
}

// 描述 axios 类中的公共方法接口
export interface IAxios {
  interceptors: {
    request: InterceptorManager<IAxiosRequestConfig>
    response: InterceptorManager<IAxiosResponseConfig>
  }
  defaults: IAxiosRequestConfig
  request (config: IAxiosRequestConfig): IAxiosResponse
  get (url: string, config?: IAxiosRequestConfig) : IAxiosResponse
  options (url: string, config?: IAxiosRequestConfig) : IAxiosResponse
  delete (url: string, config?: IAxiosRequestConfig) : IAxiosResponse
  head (url: string, config?: IAxiosRequestConfig) : IAxiosResponse
  post (url: string, data?: any, config?: IAxiosRequestConfig) : IAxiosResponse
  put (url: string, data?: any, config?: IAxiosRequestConfig) : IAxiosResponse
  patch (url: string, data?: any, config?: IAxiosRequestConfig) : IAxiosResponse
}

// 混合类型接口
export interface IAxiosInstance extends IAxios {
  (config: IAxiosRequestConfig): IAxiosResponse
  (url: string, config: IAxiosRequestConfig): IAxiosResponse
  CancelToken: ICancelTokenStatic
  Cancel: ICancelStatic
  create(config?: IAxiosRequestConfig): IAxiosInstance
  isCancel: (value: any) => boolean
}

export interface IResolvedFn<T> {
  (val: T): T | Promise<T>
}

export interface IRejectedFn {
  (error: any): any
}

export interface InterceptorObj<T> {
  resolve: IResolvedFn<T>,
  reject?: IRejectedFn
}

export interface InterceptorManager<T> {
  use (resolve: IResolvedFn<T>, reject?: IRejectedFn): number
  eject (id: number): void
  forEach (cb: (interceptor: InterceptorObj<T>) => void): void
}
