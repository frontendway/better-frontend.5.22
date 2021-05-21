// 布尔值
const isMove: boolean = false

// 数字类型
const isNum: number = 1

// 字符串类型
let str1: string = 'abc'
let str2: string = `abc${str1}`

// 数组
let arr1: number[] = [1, 2]
let arr2: Array<number> = [1, 2]
// 元组: 已只元素数量与类型的数组
let arr3: [string, number] = ['a', 1]
// 泛型只读数组
let ro: ReadonlyArray<number> = [1, 2]

// 数字枚举
enum Direction1{
  Up = 1,
  Down,
  Left,
  Right
}
// 字符串枚举
enum Direction2{
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}

// never 类型、函数抛错 或者 函数不会结束、是任意类型的子类型

/* 
  null undefined 类型、ts 默认情况下 null undefined 可以赋值给任意类型
  开启 strictNullChecks 后则不可以赋值给任意类型
  只能赋值给定义的 null undefined 类型
*/

// 对象类型
let o: object = {
  a: 1,
  b: 2
}

// 类型推断
let s: any = 'abcddd'
let len1: number = (<string>s).length
let len2: number = (s as string).length

// 字符串字面量
type Easing = 'a' | 'b' | 'c'
