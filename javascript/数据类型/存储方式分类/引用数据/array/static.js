Array.from(arrayLike, mapFn, thisAry)
  /* 
    类数组转数组 
    arrayLike: 类数组
    mapFn: 遍历方法
    thisAry: 遍历方法的 this 指向
  */
  // 初始化长度为 5 的数组其初始值为 1
    Array.from({ length: 5 }, () => 1)
    Array(5).fill(1)

Array.of
  Array.of(7)        [7]
  Array(7)           [empty × 7]
  Array.of(1, 2, 3)  [1, 2, 3]
  Array(1, 2, 3)     [1, 2, 3]


