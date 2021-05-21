import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store.js'
import iView from 'iview';
import axiosInstance from './util/axios/index.js'
import 'iview/dist/styles/iview.css'


Vue.config.productionTip = false
Vue.prototype.$axios = axiosInstance
Vue.use(iView);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
