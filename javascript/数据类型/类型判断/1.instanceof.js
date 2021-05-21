
function myInstanceOf (obj, target) {
  let proto = obj.__proto__
  let prototype = target.prototype
  
  while (proto) {
    if (proto === prototype) return true
    proto = proto.__proto__
  }
  return false
}
