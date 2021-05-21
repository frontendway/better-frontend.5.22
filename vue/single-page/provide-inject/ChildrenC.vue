<template>
  <div>
    {{them1.color}}
    <hr/>
    E组件
    <children-e v-get-ref="r => setChildRef('ChildrenE', r)"></children-e>
  </div>
</template>

<script>
import ChildrenE from './ChildrenE.vue'

export default {
  components: {
    ChildrenE
  },
  inject: {
    them1: {
      from: 'them',
      default: () => ({})
    },
    setChildRef: {
      default: () => {}
    }
  },
  directives: {
    getRef: {
      bind (el, binding, vnode) {
        console.log(binding.value, 'value')
        binding.value(vnode.componentInstance || el, vnode.key)
      },
      update (el, binding, vnode, oldVnode) {
        binding.value(vnode.componentInstance || el, vnode.key)
      },
      unbind (el, binding, vnode) {
        binding.value(null, vnode.key)
      }
    }
  }
}
</script>

