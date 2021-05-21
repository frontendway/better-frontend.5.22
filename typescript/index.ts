// 交叉类型
function extend<T, U> (x: T, y: U): T&U {
  let obj = {} as T&U

  for (let key in x) {
    obj[key] = (x[key]) as any
  }

  for (let key in y) {
    if (!(obj as Object).hasOwnProperty(key)) {
      obj[key] = (y[key]) as any
    }
  }

  return obj
}

// 类型保护
interface Pet{}
interface Fish{
  swim: string
}
function getSmall (): Fish | Pet {}
let pet = getSmall()
function isFish (pet: Fish | Pet): pet is Fish {
  return (pet as Fish).swim !== undefined
}
if (isFish(pet)) {
  pet.swim
}

/* 
  null 和 undefined 既可当做值也可当做类型
  可选属性值是可以赋值为 undefined
  b?: string b 既可赋值为 string 也可赋值为 undefined
*/
