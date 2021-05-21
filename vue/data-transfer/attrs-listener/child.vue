<template>
  <div>
    {{title}}
    <button @click="toggle">子级按钮调用父组件方法</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: '默认值'
  }),
  methods: {
    toggle () {
      this.title = this.$attrs.title
      this.$listeners.click()
    }
  }
}
</script>

