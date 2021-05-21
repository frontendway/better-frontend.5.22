// 函数类型接口
interface Search{
  (n: number): void
}
let s: Search = function (n) {}
s(10)

// 类类型 当一个类去实现某个接口的时候就必须要去实现这个接口中定义的属性与方法
interface ClockInterface{
  currentTime: Date
  setDate (d: Date): void
}
class Clock implements ClockInterface{
  currentTime: Date
  setDate (d: Date) {}
}

// 类静态属性检查
interface ClockCtor{
  new(h: number)
}
function createClock (Ctor: ClockCtor, h: number): ClockInterface {
  return new Ctor(h)
}
createClock(Clock, 10)

// 接口继承
interface Shape{
  color: string
}
interface Square extends Shape{
  len: number
}
let sh: Square = {
  color: 'blue',
  len: 10
}

// 混合类型接口
interface Counter{
  (h: number): void
  reset(): void
  interval: number
}
function getCounter (): Counter {
  let c = function (h: number) {} as Counter
  c.reset = function () {}
  c.interval = 10
  return c
}
