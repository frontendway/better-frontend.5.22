<template>
  <div>
    <child></child>
  </div>
</template>

<script>
import Child from './child.vue'

export default {
  components: {
    Child
  },
  created () {
    this.$on('custom', () => alert('parent'))
  }
}
</script>
