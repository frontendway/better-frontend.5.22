// 多维数组减少一维
  function normalizeArray (arr) {
    return Array.prototype.concat.apply([], arr)
  }

// 该函数只能被 new 使用、不能直接调用
  function Vue () {
    if (!this instanceof Vue) return
  }
