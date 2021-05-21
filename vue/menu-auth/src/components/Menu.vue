
<template>
  <ul>
    <li v-for="(item, index) of menus" :key="index">
      <router-link :to="item.path">{{item.name}}</router-link>
      <menu-list v-if="item.children" :menus="item.children"></menu-list>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'MenuList',
  props: {
    menus: {
      type: Array
    }
  }
}
</script>

<style>

</style>
