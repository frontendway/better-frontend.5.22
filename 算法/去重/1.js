var arr = [1, 2, 4, 5, 6, 1, 12, 12, 14, 115, 15, 15, 2, 1]

// 拿出每一项与后面每一项做比较、如果相同则删除重复项
for (let i = 0; i < arr.length - 1; i++) {
  let cur = arr[i]
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] == cur) {
      arr.splice(j, 1)
      j--
    }
  }
}

let obj = {}
let newArr = []
for (let i = 0; i < arr.length - 1; i++) {
  let cur = arr[i]
  if (!obj[cur]) {
    obj[cur] = true
    newArr.push(cur)
  }
}
