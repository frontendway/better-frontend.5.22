<template>
  <div>
    {{them.color}}
  </div>
</template>

<script>
export default {
  inject: {
    them: {
      default: () => ({})
    }
  } 
}
</script>

