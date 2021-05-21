const map = new Map()
map.set(1, 2)
map.set({}, 3)
map.set('abc', 4)

const target = {
  field1: 1,
  field2: undefined,
  field3: {
    child: 'child'
  },
  field4: [2, 4, 8],
  f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: {} } } } } } } } } } } },
  set: new Set([1, {name: 1}, 3, []]),
  map: map
}

function isObject (target) {
  return target !== null && (typeof target == 'function' || typeof target == 'object')
}

function forEach (obj, cb) {
  const keys = Object.keys(obj)
  let len = keys.length
  let index = -1

  while (++index < len) {
    let key = keys[index]
    cb(obj[key], key)
  }
}

function getType (target) {
  return window.toString.call(target)
}

function isSet (target) {
  return getType(target) === '[object Set]'
}

function isMap (target) {
  return getType(target) === '[object Map]'
}

function deepClone (target, map = new WeakMap()) {
  if (!isObject(target)) return target

  const result = new target.constructor()

  if (map.has(target)) {
    return map.get(target)
  }
  map.set(target, result)

  if (isSet(target)) {
    target.forEach(item => {
      result.add(deepClone(item, map))
    })

    return result
  }

  if (isMap(target)) {
    target.forEach((item, k) => {
      result.set(k, deepClone(item, map))
    })

    return result
  }

  forEach(target, (item, k) => {
    result[k] = deepClone(item, map)
  })
    
  return result
}

target.t = target

window.t = target

window.b = deepClone(target)
