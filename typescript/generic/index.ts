// 泛型类型
let iden: <T>(arg: T) => T

// 泛型接口
interface Identify<T>{
  (arg: T): T
}
let identify: Identify<string> = function idenFn<T> (arg: T): T {
  console.log(arg)
  return arg
}
identify('1')

// 泛型类
class GenericNumber<T>{
  zero: T
  add: (x: T) => T
}
let g = new GenericNumber<number>()
g.zero = 0
g.add = function (x) {
  return x
}

// 泛型约束
interface Gene{
  length: number
}
function generic<T extends Gene> (x: T): number {
  return x.length
}
generic({length: 10})
// key 约束
function generic1<T, K extends keyof T> (x: T, key: K): any {
  return x[key]
}
let x = {a: 1, b: 2, c: 3}
generic1(x, 'a')
// 工厂函数引用
interface Instance{
  name: string
}
class InsCtor{
  name: string
  constructor () {
    this.name = 'abc'
  }
}
// c: {new(): T}  c: new() => T
function create<T>(c: {new(): T}): T {
  return new c()
}
console.log( create<Instance>(InsCtor) )
