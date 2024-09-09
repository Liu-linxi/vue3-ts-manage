<script setup lang="ts">
import lxRequest from '@/serive'
lxRequest.get({
  url: "/home/multidata",
}).then(res => {
  // console.log(res)
})
</script>

<template>
  <div class="login">
    login
  </div>
</template>

<style lang="less" scoped>
.login {}
</style>
