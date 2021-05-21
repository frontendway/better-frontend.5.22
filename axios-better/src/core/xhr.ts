import { 
  IAxiosRequestConfig, 
  IAxiosResponse, 
  IAxiosResponseConfig 
} from "../types/index"
import createAxiosError from '../helpers/error'
import cookie from '../helpers/cookie'
import { isURLSameOrigin } from '../helpers/url'
import { isFormdata } from "../helpers/util"

function normalizeResponseHeaders (responseHeaders: string): Object {
  const headers = Object.create(null)
  if (!responseHeaders) return headers

  const respHeadersArr: string[] = responseHeaders.split(/\r\n|: /)
  respHeadersArr.forEach((item, idx) => {
    if (idx % 2 === 0) {
      const key = item,
      value = respHeadersArr[idx + 1]
      if (key && value) headers[key] = value
    }
  })

  return headers
}

export default function xhr (config: IAxiosRequestConfig): IAxiosResponse {
  return new Promise((resolve, reject) => {
    const {
      url,
      method = 'get',
      data = null,
      headers,
      responseType,
      timeout,
      cancelToken,
      withCredentials,
      xrsfCookieName,
      xrsfHeaderName,
      onUploadProgress,
      onDownloadProgress,
      auth,
      validateStatus
    } = config
  
    const request = new XMLHttpRequest()
    
    request.open(method.toUpperCase(), url!, true)

    if (responseType) request.responseType = responseType
    if (timeout) request.timeout = timeout
    if (withCredentials) request.withCredentials = withCredentials

    if (cancelToken) {
      cancelToken.promise.then(reason => {
        request.abort()
        reject(reason)
      })
    }

    if (isFormdata(data)) {
      delete headers['Content-Type']
    }

    if (auth) {
      headers['Authorization'] = 'Basic ' + btoa(auth.username + ':' + auth.password)
    }
  
    Object.keys(headers).forEach(headerKey => {
      if (data === null && headerKey.toLocaleLowerCase() === 'content-type') {
        delete headers[headerKey]
      } else {
        request.setRequestHeader(headerKey, headers[headerKey])
      }
    })

    if ((withCredentials || isURLSameOrigin(url!)) && xrsfCookieName) {
      const value = cookie.read(xrsfCookieName)
      if (value && xrsfHeaderName) {
        headers[xrsfHeaderName] = value
      }
    }
    
    request.send(data)

    request.onreadystatechange = function () {
      // 网络错误或者超时错误 request.status 是 0
      if (request.readyState !== 4 || request.status === 0) return
      
      const responseHeaders = normalizeResponseHeaders(request.getAllResponseHeaders()),
      responseData = responseType === 'text' ? request.responseText : request.response,
      status = request.status,
      statusText = request.statusText

      const response: IAxiosResponseConfig = {
        data: responseData,
        headers: responseHeaders,
        status,
        config,
        statusText
      }

      handleResponse(response)
    }

    function handleResponse (response: IAxiosResponseConfig): void {
      if (!validateStatus || validateStatus(response.status)) {
        resolve(response)
      } else {
        reject(createAxiosError(`request failed with code ${response.status}`, config, null, request, response))
      }
    }

    request.onerror = function () {
      reject(createAxiosError('Net work error', config, 'ECONNABORTED', request))
    }

    request.ontimeout = function () {
      reject(createAxiosError(`Timeout of ${timeout} ms`, config, null, request))
    }

    if (onDownloadProgress) {
      request.onprogress = onDownloadProgress
    }

    if (onUploadProgress) {
      request.upload.onprogress = onUploadProgress
    }

  })
}
