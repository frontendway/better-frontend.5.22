import { IAxiosRequestConfig } from "./types/index"
import { transformRequestData, tryTransformResponseData } from "./helpers/data"
import { transformRequestHeaders } from "./helpers/headers"

let defaultConfig: IAxiosRequestConfig = {
  method: 'get',
  timeout: 0,
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*'
    }
  },
  transformRequest: [
    function (data, headers) {
      transformRequestHeaders(data, headers)
      return transformRequestData(data)
    }
  ],
  transformResponse: [
    function (data) {
      return tryTransformResponseData(data)
    }
  ],
  xrsfCookieName: 'XRSF-TOKEN',
  xrsfHeaderName: 'X-XRSR-TOKEN',
  validateStatus (status) {
    return status >= 200 && status < 300
  }
}

const methodNoData: string[] = ['get', 'head', 'options', 'delete']
methodNoData.forEach(m => {
  defaultConfig.headers[m] = {}
})

const methodData: string[] = ['post', 'put', 'patch']
methodData.forEach(m => {
  defaultConfig.headers[m] = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

export default defaultConfig
