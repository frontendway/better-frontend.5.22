forEach
  /* 
    返回值: undefined
    遍历过程中无法终止
  */

every
  /* 
    返回值: boolean
    遍历过程中返回 true 则继续遍历、返回 false 则终止
  */

slice(start, end)
  /* 
    返回值: 截取的内容组成的新数组
    不影响原数组
    start: 默认 0
    end: 默认数组长度、大于数组长度也是视为数组长度
  */

splice(start, n, fill)
/* 
  返回值: 被删除元素组成的新数组
  start: 开始索引
  n: 删除几个元素、默认数组长度
  fill: 填充的值
*/

flat(n)
  /* 
    返回值: 拍平后的数组
    n: 拍平几维数组
  */

fill(value, start, end)
  /* 返回值: 填充后的新数组 */
  // 替换数组
    [1, 4, 5].fill(0, 1, 2)

find
  /* 
    返回值: 查找到的值或 undefined
    有一项条件满足则停止查找
  */
findIndex
