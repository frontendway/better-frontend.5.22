
class ISet{
  constructor (list = []) {
    this.map = new Map()
    list.forEach(item => {this.add(item)})
  }

  has (val) {
    return this.map.has(val)
  }

  add (val) {
    if (!this.has(val)) {
      this.map.set(val, val)
      return true     
    }
    return false
  }

  delete (val) {
    if (this.has(val)) {
      this.map.delete(val)
      return true     
    }
    return false
  }

  clear () {
    this.map.clear()
  }

  keys () {
    return this.map.keys()
  }

  values () {
    return this.map.values()
  }

  forEach (cb) {
    this.map.forEach((item, k, map) => {
      cb(item, k, map)
    })
  }
}

const s = new ISet([1, 3, 4])
