import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

router.beforeEach(async (to, from, next) => {
  if (store.state.hasMenuList) {
    next()
  } else {
    let newr = await store.dispatch('getMenuList')
    router.addRoutes(newr)
    // hack 确保 addRoutes 添加成功后再跳转 有时候访问同一个路由会跳转2次 会产生2个历史记录 用 replace 替换解决次问题
    next({...to, replace: true})
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
