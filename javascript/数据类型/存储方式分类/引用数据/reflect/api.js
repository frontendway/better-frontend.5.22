Reflect.apply(Math.floor, null, [11.2])

Reflect.construct(Date, [])
  /* 
    返回值: 实例化对象
    动态实例化某个类
    无需传入参数时用 [] 表示
  */

Reflect.defineProperty
  /* 返回值: boolean 值 */
Reflect.deleteProperty

Reflect.get(obj, 'x')
  /* 读取对象某属性 */
Reflect.set(obj, 'x')

Reflect.getOwnPropertyDescriptor

Reflect.getPrototypeOf
Reflect.setPrototypeOf

Reflect.has(obj, 'y')

Reflect.ownKeys
  Reflect.ownKeys([]) 
    return ['length']
