<template>
  <div>
		<transition 
			name="fade" 
			appear 
			appear-enter-active 
			enter-active-class="animated bounce" 
			leave-active-class="animated bounce"
		>
			<span v-show="isShow">我是包裹的span</span>
		</transition>
		<br>
		<br>
		<button @click="toggle">切换</button>
	</div>
</template>

<script>
export default {
  data:() => ({
    isShow: false
  }),
  methods: {
    toggle: function () {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style>
  span{
    display: inline-block;
  }
  @keyframes in {
    0%{transform: scale(0);}
    50%{transform: scale(1.5);}
    100%{transform: scale(1);}
  }
  .fade-enter-active{
    animation: in 3s;
  }
  .fade-leave-active{
    animation: in 3s ease 0s reverse;
  }
</style>
