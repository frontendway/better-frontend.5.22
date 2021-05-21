<template>
  <div>
    <children-b></children-b>
    <children-c></children-c>
    <button @click="changeColor">改变颜色</button>
  </div>
</template>

<script>
import ChildrenB from './ChildrenB.vue'
import ChildrenC from './ChildrenC.vue'

export default {
  components: {
    ChildrenB,
    ChildrenC
  },
  provide () {
    return {
      them: this,
      setChildRef: (name, ref) => {
        this[name] = ref
      },
      getChildRef: name => {
        return this[name]
      },
      getRef: () => {
        return this
      }
    }
  },
  data () {
    return {
      color: 'blue'
    }
  },
  methods: {
    changeColor () {
      this.color = this.color == 'blue' ? 'red' : 'blue'
    }
  }
}
</script>

