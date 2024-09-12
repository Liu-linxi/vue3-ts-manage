<script setup lang="ts">
import router from '@/router';
import { localCache } from '@/utils/cache';
import { LOGIN_TOKEN } from "@/global/constants";


function handleExit() {
  localCache.deleteCache(LOGIN_TOKEN);
  router.push("/login");
}
</script>

<template>
  <div class="main">
    main
    <el-button type="primary" @click="handleExit">退 出 登 录</el-button>
  </div>
</template>

<style lang="less" scoped>
.main {}
</style>
