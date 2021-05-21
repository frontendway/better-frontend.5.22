<template>
  <div>
    <slot :userkey="user"></slot>
    <br/>
    <slot name="footer" :footerkey="footer"></slot>
  </div>
</template>

<script>
export default {
  data: () => ({
    user: {
      currentUser: '当前用户'
    },
    footer: {
      footerText: '底部文案'
    }
  })
}
</script>
