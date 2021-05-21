import _ from 'lodash'

function loadVue () {
  import(/*webpackChunkName:"vue"*/ 'vue')
}
loadVue()

function loadJquery () {
  import(/*webpackChunkName:"jquery"*/ 'jquery')
}
loadJquery()

const a = () => {
  console.log('abc')
}

a()
Promise.resolve(11).then((data) => console.log(data))