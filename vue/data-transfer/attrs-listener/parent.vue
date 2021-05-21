<template>
  <div>
    <child @click="show" title="标题3"></child>
  </div>
</template>

<script>
import Child from './child.vue'

export default {
  components: {
    Child
  },
  methods: {
    show () {
      alert(1)
    }
  }
}
</script>

