<template>
  <div>
    {{number}}
    <button @click="sendParent">传递给父级</button>
  </div>
</template>

<script>
export default {
  props: ['number'],
  methods: {
    sendParent () {
      this.$emit('on-send', 'child')
    }
  }
}
</script>
