import { IAxiosRequestConfig, IAxiosResponse } from '../types/index'
import { buildURL, isAbsoluteURL, joinURL } from '../helpers/url'
import { flatHeaders } from '../helpers/headers'
import xhr from './xhr'
import transformer from './transformer'

export default function dispatchRequest (config: IAxiosRequestConfig): IAxiosResponse {
  if (config.cancelToken) config.cancelToken.throwIfRequested()

  processConfig(config)

  return xhr(config).then(resp => {
    resp.data = transformer(resp.data, resp.headers, config.transformResponse!)
    return resp
  })
}

function processBaseUrl (config: IAxiosRequestConfig): void {
  if (config.baseURL && !isAbsoluteURL(config.url!)) {
    config.url = joinURL(config.baseURL, config.url!)
  }
}

function processConfig (config: IAxiosRequestConfig): void {
  processBaseUrl(config)
  config.url = buildURL(config.url!, config.params, config.paramsSerializer)
  config.data = transformer(config.data, config.headers, config.transformRequest!)
  config.headers = flatHeaders(config.headers, config.method!)
}
