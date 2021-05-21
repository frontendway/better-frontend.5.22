<template>
  <div id="m-index">
    <current-user>
      <template v-slot:default="slotProps">
        {{slotProps.userkey.currentUser}}
      </template>
      <template v-slot:footer="slotProps">
        {{slotProps.footerkey.footerText}}
      </template>
    </current-user>
  </div>
</template>

<script>
import CurrentUser from './components/CurrentUser'

export default {
  components: {
    CurrentUser
  }
}
</script>
