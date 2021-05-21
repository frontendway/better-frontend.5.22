<template>
  <div class="m-notify-wrap">
    {{text}}  
  </div>  
</template>

<script>
export default {
  data: () => ({
    text: ''
  })
}
</script>

<style lang="less">
.m-notify-wrap{
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 99999;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 6px 20px;
  border-radius: 8px;
}
</style>

