/* 
  Class
    Super
      当做函数使用
        必须出现在constructor中
      当做对象使用
        实例方法中指向父类的原型对象
        静态方法中指向父类
    Super调用时会调用子类的this
  
  继承规则
    只能继承父类原型 与 父类实例上的私有属性与方法
*/
class Parent {
  constructor (x, y) {
    this.x = x
    this.y = y
    this.z = 1
  }
  static show () {
    console.log('parent static method')
  }
  test () {
    console.log('parent test method')
  }
  sum () {
    console.log('父类的' ,this)
    return this.x + this.y
  }
}

class Children extends Parent {
  constructor (x, y, z) {
    super(x, y)
    this.z = z
  }
  static show () {
    // 只能设置静态方法
    super.show()
    console.log('children static method')
  }
  sum () {
    /*
      super.sum() 调用时虽然是调用的是父类的原型方法，但this是调用的子类的this
      子类的this.z 在构造函数中初始化了
    */
    super.sum()
    return this.x + this.y + this.z
  }
}

console.log( (new Children(1, 2, 3)).sum() )
