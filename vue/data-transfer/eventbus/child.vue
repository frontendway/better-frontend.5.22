<template>
  <div>
    <button @click="trigger">触发</button>
  </div>
</template>

<script>
export default {
  methods: {
    trigger () {
      this.$parent.$emit('custom')
    }
  }
}
</script>

