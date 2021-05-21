import {
  IAxiosRequestConfig,
  IAxiosResponseConfig
} from '../types/index'

class AxiosError extends Error {
  config: IAxiosRequestConfig
  code?: string | null
  request?: XMLHttpRequest
  response?: IAxiosResponseConfig

  constructor (
    message: string,
    config: IAxiosRequestConfig,
    code?: string | null,
    request?: XMLHttpRequest,
    response?: IAxiosResponseConfig
  ) {
    super(message)
    this.config = config
    this.code = code
    this.request = request
    this.response = response

    Object.setPrototypeOf(this, AxiosError.prototype)
  }
}

export default function createAxiosError (
  message: string,
  config: IAxiosRequestConfig,
  code?: string | null,
  request?: XMLHttpRequest,
  response?: IAxiosResponseConfig
): AxiosError {
  return new AxiosError(
    message,
    config,
    code,
    request,
    response
  )
}
