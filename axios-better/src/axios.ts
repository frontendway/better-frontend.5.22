import Axios from './core/Axios'
import {IAxiosInstance, IAxiosRequestConfig} from './types/index'
import {toExtend} from './helpers/util'
import defaultConfig from './defaults'
import mergeConfig from './core/mergeConfig'
import CancelToken from './cancel/CancelToken'
import Cancel, {isCancel} from './cancel/Cancel'

function createAxios (initConfig: IAxiosRequestConfig): IAxiosInstance {
  const ctx = new Axios(initConfig),
  request = Axios.prototype.request.bind(ctx)

  toExtend(ctx, request)

  return request
}

const axios = createAxios(defaultConfig)

axios.create = function create (config?: IAxiosRequestConfig): IAxiosInstance {
  return createAxios(mergeConfig(defaultConfig, config))
}
axios.CancelToken = CancelToken
axios.Cancel = Cancel
axios.isCancel = isCancel

export default axios
