<template>
  <div>
    {{them.color}}
    <button @click="getRef">获取ChildrenE 组件实例</button>
  </div>
</template>

<script>
export default {
  inject: {
    them: {
      default: () => ({})
    },
    getChildRef: {
      default: () => {}
    }
  },
  methods: {
    getRef () {
      console.log(this.getChildRef('ChildrenE'), 'getChildrenE')
    }
  }
}
</script>

