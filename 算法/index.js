/* 
  20 - (10 - (5-1))
  10 - (5-1)
  5 - 1 
*/
var arr = [20, 10, 5, 1]
var newArr = []
for (var i=arr.length - 1; i>=0; i--) {
  i === arr.length - 1 
  ? newArr.push(arr[i])
  : newArr.unshift(arr[i] - newArr[0])
}
