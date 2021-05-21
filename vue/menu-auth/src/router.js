import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const defaultRouters = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/home.vue')
  }
]

export const authRouters = [
  {
    path: '/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "cart" */ '@/views/cart.vue'),
    children: [
      {
        path: 'cart-list',
        name: 'cart-list',
        component: () => import(/* webpackChunkName: "cart-list" */ '@/views/cart-list.vue'),
        children: [
          {
            path: 'lottery',
            name: 'lottery',
            component: () => import(/* webpackChunkName: "lottery" */ '@/views/lottery.vue')
          },
          {
            path: 'product',
            name: 'product',
            component: () => import(/* webpackChunkName: "product" */ '@/views/product.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import(/* webpackChunkName: "shop" */ '@/views/shop.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */ '@/views/profile.vue')
  }
]

export default new Router({
  routes: defaultRouters
})
