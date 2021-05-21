<template>
  <div id="m-index">
    <button @click="show">弹框</button>
  </div>
</template>

<script>
export default {
  methods: {
    show () {
      this.$notify('文字', {delay: 5000})
    }
  }
}
</script>
