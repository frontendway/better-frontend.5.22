<template>
  <div>
    <menu-list :menus="$store.state.menuList"></menu-list>
    <hr/>
  </div>
</template>

<script>
import MenuList from '../components/Menu.vue'

export default {
  components: {
    MenuList
  }
}
</script>
