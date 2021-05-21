<template>
  <div id="m-index">
    <input type="text" v-model="msg" v-split.xxx="msg">
    <br/>
    <input type="text" v-limit.xxx="msg">
  </div>
</template>

<script>
export default {
  data: () => ({
    msg: 'aa'
  }),
  directives: {
    split: {
      // 指令首次绑定元素时
      bind (el, bindings, vnode) {
        // 当前元素所在的上下文、即this
        let ctx = vnode.context
        ctx[bindings.expression] = el.value.slice(0, 3)
      },
      // 数据更新时
      update (el, bindings, vnode) {
        let ctx = vnode.context
        ctx[bindings.expression] = el.value.slice(0, 3)
      },
      // 指令绑定的元素插入DOM时、这个时机比bind晚一些
      inserted (el, bindings, vnode) {}
    },
    limit: {
      bind (el, bindings, vnode) {
        let ctx = vnode.context
        el.value = ctx[bindings.expression]

        el.addEventListener('input', ev => {
          let val = ev.target.value.slice(0, 3)
          ctx[bindings.expression] = val
          el.value = val
        }, false)
      }
    }
  }
}
// 指令如果是函数、默认是 bind + update
</script>
