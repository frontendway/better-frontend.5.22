// 只读属性、对象刚刚创建时候修改值、后期无法修改
interface Person{
  readonly name: string
}
let p1: Person = {
  name: 't'
}

// 添加字符串签名索引
interface StringKey{
  name: number
  [key: string]: any
}
let p2: StringKey = {
  name: 2,
  age: 20
}
// 只读索引签名
interface ReadonlyStringArr{
  readonly [key: number]: number
}
let a1: ReadonlyStringArr = [1, 2]
// 数字索引签名
interface NumberKe{
  [key: number]: string
}
let myArr: NumberKe = ['a', 'b']
let s1: string = myArr[0]
