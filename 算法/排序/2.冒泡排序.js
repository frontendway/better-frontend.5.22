let arr = [2, 4, 1, 5, 8, 4, 11, 12, 10]  

function bubbleSort (list) {
  for (let i=0; i<list.length-1; i++) {
    for (let j=0; j<list.length-1-i; j++) {
      let a = list[j]
      let b = list[j+1]
      if (a > b) {
        list[j] = b
        list[j+1] = a
      }
    }
  }

  return list
}

console.log(bubbleSort(arr))