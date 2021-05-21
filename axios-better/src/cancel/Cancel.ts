export default class Cancel {
  msg?: string

  constructor (msg?: string) {
    this.msg = msg
  }
}

export function isCancel (value: any): boolean {
  return value instanceof Cancel
}
