<template>
  <div>
    <child title="标题1"></child>
    <child title="标题2"></child>
    <child title="标题3"></child>
  </div>
</template>

<script>
import Child from './child.vue'

export default {
  components: {
    Child
  }
}
</script>

