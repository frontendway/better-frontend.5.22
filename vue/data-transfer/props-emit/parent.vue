<template>
  <div>
    <child @on-send="fetch" :number="number"></child>
  </div>
</template>

<script>
import Child from './child'

export default {
  components: {
    Child
  },
  data: () => ({
    number: 1
  }),
  methods: {
    fetch (data) {
      console.log(data)
    }
  }
}
</script>
