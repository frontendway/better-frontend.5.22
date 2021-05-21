import { 
  ICancelExecutor, 
  ICanceler, 
  ICancelTokenSource, 
  ICancelInstance 
} from '../types/index'
import Cancel from './Cancel'

export default class CancelToken {
  promise: Promise<ICancelInstance>
  reason?: ICancelInstance

  constructor (executor: ICancelExecutor) {
    let tempResolve: (c: ICancelInstance) => void

    this.promise = new Promise<ICancelInstance>((resolve) => {
      tempResolve = resolve
    })

    executor(msg => {
      if (this.reason) return
      this.reason = new Cancel(msg)
      tempResolve(this.reason)
    })
  }

  throwIfRequested () { //判断token 是否被已经被使用过，一旦使用过 reason 不为空
    if (this.reason) {
      throw this.reason
    }
  }

  static source (): ICancelTokenSource {
    let cancel!: ICanceler
    const token = new CancelToken(c => {
      cancel = c
    })
    return {
      cancel,
      token
    }
  }
}
