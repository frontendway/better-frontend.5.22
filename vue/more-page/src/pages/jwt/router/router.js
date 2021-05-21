import Vue from 'vue'
import Router from 'vue-router'
import axiosInstance from '../util/axios/index.js'

Vue.use(Router)

let routerInstance = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home/Index.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/Index.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/profile/Index.vue')
    }
  ]
})

routerInstance.beforeEach((to, from, next) => {
  const url = 'http://localhost:3033/validate'
  axiosInstance.get(url)
  .then(resp => {
    if (!resp.code) {
      window.localStorage.setItem('token', resp.data.token)
    } else {
      if (to.name === 'login') {
        return next()
      }
      return next('/')
    }
  })
  next()
})

export default routerInstance
