export default () => {
  const div = document.createElement('div')
  div.innerHTML = 'divdiv'
  document.body.appendChild(div)
}

export function test () {
  console.log('test')
}
