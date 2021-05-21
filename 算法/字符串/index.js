/* 
  单词反转
  Let's take LeetCode contest
*/

  function reverseWord (str) {
    return str.split(' ').map(item => {
      return item.split('').reverse().join('')
    }).join(' ')
  }

  function reverseWord (str) {
    return str.split(/\s/g).map(item => {
      return item.split('').reverse().join('')
    }).join(' ')
  }

  function reverseWord (str) {
    // /[^\s]+/g 或 /[\w']+/g
    return str.match(/[^\s]+/g).map(item => {
      return item.split('').reverse().join('')
    }).join(' ')
  }

/* 
  计算具有相同数量0和1的非空连续子字符串的数量、并且这些子字符串中的所有0和所有1都是组合在一起的
  重复出现的子串要计算它们出现的次数
  输入：'00110011'
  输出：6
  子串：'0011' '01' '1100' '10' '0011' '01'
*/
  function getChildStr (str) {
    const res = [],
    reg = /^([01])\1*/

    const match = s => {
      const s1 = s.match(reg)
      if (s1) {
        const s2 = ( s1[1][0] ^ 1 ) + '',
        s2Reg = new RegExp(`^(${s1[0]}${s2.repeat(s1[0].length)})`)

        return s2Reg.test(s) ? RegExp.$1 : ''
      }
    }

    for (let i=0; i<str.length-1; i++) {
      const r = match(str.slice(i))
      if (r) res.push(r)
    }

    return res
  }
  