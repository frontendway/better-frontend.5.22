import Vue from 'vue'
import App from './App.vue'
import notify from './notify/index.js'

Vue.config.productionTip = false

Vue.use(notify)

new Vue({
  render: h => h(App)
}).$mount('#app')
