/* 
  电话号码组合
*/
  function phoneCodeSum (str) {
    function generatorCodeArr () {
      const codeStr = 'abcdefghijklmnopqrstuvwxyz', codeArr = ['', '']
      let start = 0, end = 0

      for (let i=0; i<8; i++) {
        end = start + 3
        if (i === 5 || i === 7) {
          codeArr.push(codeStr.slice(start, ++end))
        } else {
          codeArr.push(codeStr.slice(start, end))
        }
        start = end
      }

      return codeArr
    }

    const codeArr = generatorCodeArr()
    const newArr = str.split('').map(item => codeArr[item])

    function combination (arr) {
      const result = []

      for (let i=0; i<arr[0].length; i++) {
        for (let j=0; j<arr[1].length; j++) {
          result.push(`${arr[0][i]}${arr[1][j]}`)
        }
      }
      arr.splice(0, 2, result)

      if (arr.length > 1) combination(arr)

      return arr[0]
    }

    return combination(newArr)
  }

  console.log(phoneCodeSum('23'))
  console.log(phoneCodeSum('234'))
