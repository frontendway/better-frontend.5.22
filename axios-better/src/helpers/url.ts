import { isDate, isPlainObject, isURLSearchParams } from './util'

function encode (val: string): string {
  return encodeURIComponent(val)
  .replace(/%40/g, '@')
  .replace(/%3A/ig, ':')
  .replace(/%24/g, '$')
  .replace(/%2C/ig, ',')
  .replace(/%20/g, '+')
  .replace(/%5B/ig, '[')
  .replace(/%5D/ig, ']')
}

export function buildURL (
  url: string, 
  params: any, 
  paramsSerializer?: (params: any) => string
): string {
  if (!params) return url

  let queryString: string
  if (paramsSerializer) {
    queryString = paramsSerializer(params)
  } else if (isURLSearchParams(params)) {
    queryString = params.toString()
  } else {
    let parts: string[] = []
    Object.keys(params).forEach(key => {
      const currentValue = params[key]
      if (currentValue === null || currentValue === undefined) {
        return
      }

      let values = []
      if (Array.isArray(currentValue)) {
        key += '[]'
        values = currentValue
      } else {
        values = [currentValue]
      }

      values.forEach(val => {
        if (isDate(val)) {
          val = val.toISOString()
        } else if (isPlainObject(val)) {
          val = JSON.stringify(val)
        }
        parts.push(`${encode(key)}=${encode(val)}`)
      })
    })
    queryString = parts.join('&')
  }

  if (queryString) {
    const markIndex = url.indexOf('#')
    if (markIndex !== -1) {
      url = url.slice(0, markIndex)
    }
    url += (url.includes('?') ? '&' : '?') + queryString
  }

  return url
}

interface URLOrigin {
  protocol: string
  host: string
}

const nodeA = document.createElement('a')
const currentURLOrigin = resolveURL(window.location.href)

function resolveURL (url: string): URLOrigin {
  nodeA.setAttribute('href', url)
  const {protocol, host} = nodeA
  return {protocol, host}
}

export function isURLSameOrigin (url: string): boolean {
  const parseURLOrigin = resolveURL(url)
  return (parseURLOrigin.protocol === currentURLOrigin.protocol 
    && 
    parseURLOrigin.host === currentURLOrigin.host)
}

export function isAbsoluteURL (url: string): boolean {
  return /^([a-z][a-z\d+-.]*:)?\/\//i.test(url)
}

export function joinURL (baseURL: string, relativeURL?: string): string {
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL
}
