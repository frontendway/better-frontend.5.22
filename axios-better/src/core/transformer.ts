import { ITransformer } from '../types/index'

export default function transformer (
  data: any, 
  headers: any,
  fns: ITransformer | ITransformer[]
): any {
  if (!fns) return data
  if (!Array.isArray(fns)) fns = [fns]

  fns.forEach(fn => {
    data = fn(data, headers)
  })

  return data
}
