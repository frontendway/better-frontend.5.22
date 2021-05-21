import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {authRouters} from './router.js'

Vue.use(Vuex)

/* 
格式化成树状数据
  [
    {"pid": -1, "path": "/cart", "name": "购物车", "id": 1, "auth": "cart"},
    {"pid": 1, "path": "/cart/cart-list", "name": "购物车列表", "id": 4, "auth": "cart-list"},
    {"pid": 4, "path": "/cart/cart-list/lottery", "name": "彩票", "id": 5, "auth": "lottery"},
    {"pid": 4, "path": "/cart/cart-list/product", "name": "商品", "id": 6, "auth": "product"},
    {"pid": -1, "path": "/shop", "name": "商店", "id": 2, "auth": "shop"},
    {"pid": -1, "path": "/profile", "name": "个人中心", "id": 3, "auth": "store"}
  ]
*/

function setUpTree (list, pid) {
  let authList = []
  function r (pid) {
    return list.filter(item => {
      if (item.pid === pid) {
        authList.push(item.auth)
        let children = r(item.id)
        item.children = children.length ? children : null
        return true
      }
    })
  }

  return {menuList: r(-1), authList}
}

function setUpAuthRoutes (authList) {
  function r (authRouters) {
    return authRouters.filter(item => {
      if (authList.includes(item.name)) {
        if (item.children) {
          item.children = r(item.children)
        }
        return true
      }
    })
  }

  return r(authRouters)
}

export default new Vuex.Store({
  state: {
    menuList: [],
    hasMenuList: false
  },
  mutations: {
    setMenuList (state, payload) {
      state.menuList = payload
      state.hasMenuList = true
    },
    setAuthList (state, payload) {
      state.authList = payload
    }
  },
  actions: {
    async getMenuList ({commit}) {
      const url = 'https://getman.cn/mock/mens'
      let result = await axios.get(url)

      result = setUpTree(result.data, -1)
      commit('setMenuList', result.menuList)
      
      return setUpAuthRoutes(result.authList)
    }
  }
})
