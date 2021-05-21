<template>
  <div>
    login <br/>
    <Input type="text" v-model="username" placeholder="请输入用户名" />

    <Button @click="send">提交</Button>
  </div>
</template>

<script>
export default {
  data: () => ({
    username: ''
  }),
  methods: {
    send () {
      const url = 'http://localhost:3033/login'

      this.$axios({
        url,
        method: 'POST',
        data: {
          username: this.username
        }
      })
      .then(resp => {
        if (resp.code === 0) {
          window.localStorage.setItem('token', resp.data.token)
        }
      })
    }
  }
}
</script>

<style lang="less">

</style>
