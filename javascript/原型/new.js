function myNew (ctor, ...args) {
  const _this = Object.create(ctor.prototype)
  const res = ctor.apply(_this, args)

  return res instanceof Object ? res : _this
}

function Test(a) {
  this.a = a;
}
Test.prototype.test = function() {
  console.log(this.a + " test");
}

var t = myNew(Test, "aaaa")
t.a
t.test()
