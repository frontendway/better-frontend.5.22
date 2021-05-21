<template>
  <div>
    <h3 @click="toggle">{{title}}</h3>
    <div v-show="isShow">标题对应的文章</div>
  </div>
</template>

<script>
export default {
  props: ['title'],
  data: () => ({
    isShow: false
  }),
  methods: {
    toggle () {
      this.isShow = !this.isShow
      this.$parent.$children.forEach(child => {
        if (child._uid != this._uid) child.$data.isShow = false
      })
    }
  }
}
</script>

