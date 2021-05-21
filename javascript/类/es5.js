/*
  构造函数继承
  继承父类私有属性、不是 prototype 上的共享属性 
*/
  function Parent1 () {
    this.name = 'hello'
  }

  Parent.prototype.showName = function () {}

  function Child1 () {
    Parent1.call(this)
    this.age = 20
  }
 
/*
  原型继承 让子类的原型指向父类的实例
  缺点
    1.父类实例的公有属性及私有属性都成为子类的公有属性
    2.公用同一个原型对象、导致某个实例改变其中一个另一个也跟着改变 
*/
  function Parent2 () {
    this.arr = []
  }

  function Child2 () {
    this.x = 100
  }
  Child2.prototype = new Parent2()
  // 相当于给 Parent2 的实例挂载了 constructor = Child2、与 this.arr 在同一级了
  Child2.prototype.constructor = Child2

  var s1 = new Child2()
  var s2 = new Child2()
  s1.arr.push(2)

/* 
  组合继承1 
    这里的 new Parent() 执行构造函数完全是多余的、因为 new Child() 的时候会已经会执行 new Child()
    子类原型对象的 constructor 被改写成了父类
*/
  function Parent3 () {
    this.a = 100
  }
  function Child3 () {
    Parent3.call(this)
    this.b = 200
  }
  Child3.prototype = new Parent3()
  var b = new Child3()

/* 
  组合继承2 
    子类的构造函数同样改写成了父类的构造函数、无法用 instanceOf 区别是哪个构造函数直接实例化的
    constructor 也无法区别
    Child4.prototype 就算改写了 constructor、则把父类的也修改了、同样存在问题
*/
  function Parent4 () {
    this.a = 100
  }
  function Child4 () {
    Parent4.call(this)
    this.b = 200
  }
  Child4.prototype = Parent4.prototype
  var b = new Child4()

/*  组合继承3 */
  function Parent5 () {
    this.a = 100
  }
  function Child5 () {
    Parent5.call(this)
    this.b = 200
  }
  Child4.prototype = Object.create(Parent5.prototype, {
    constructor: {
      value: Child5,
      enumerable: false,
      writable: true,
      configurable: true
    }
  })
  var b = new Child5()
