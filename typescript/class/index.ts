// 属性修饰符
class Animal{
  public name: string
  protected age: number
  private readonly break: number
}

// 存取器
class Impolyee{
  private _fullname: string
  get fullname () {
    return this._fullname
  }
  set fullname (newName: string) {
    this._fullname = newName
  }
}

// 静态属性
// static Target = {x: 0, y: 0}
// static Target: string
class Grid{
  static Target = {x: 0, y: 0}
}

// 抽象类 通常作为其他派生类的基类使用、不能直接被实例化
// 抽象类中的抽象方法必须在子类中实现、也可以包含非抽象方法
abstract class Dep{
  abstract make(): void
  test (s: string): void {}
}
class ChildDep extends Dep{
  make () {}
}
new ChildDep().make()
new ChildDep().test('string')
     