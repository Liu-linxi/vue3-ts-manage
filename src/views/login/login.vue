<script setup lang="ts">
import LoginPanel from './cpns/login-panel.vue'
</script>

<template>
  <div class="login">
    <login-panel />
  </div>
</template>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("../../assets/img/login_bg.svg") no-repeat;
  background-size: cover;
}
</style>
