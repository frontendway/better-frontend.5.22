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
  provide: {
    number: 1
  }
}
</script>

