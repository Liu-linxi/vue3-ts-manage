<script setup lang="ts">
import useCeshiStore from '@/store/ceshi'
const ceshiStore = useCeshiStore()

function changeCount() {
  ceshiStore.changeCountAction(100)
}
</script>

<template>
  <div clang="app">
    <h2>测试</h2>
    <div>pinia中count:{{ ceshiStore.count }}-{{ ceshiStore.doubleCount }}</div>
    <button @click="changeCount">修改数据</button>
    <router-link to="/login">登录</router-link>
    <router-link to="/main">主页</router-link>

    <router-view></router-view>
  </div>
</template>

<style scoped></style>
