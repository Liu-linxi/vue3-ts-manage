<script setup lang="ts">
import MainMenu from '@/components/main-menu/main-menu.vue'
import MainHeader from '@/components/main-header/main-header.vue'
import { ref } from 'vue';
// 退出登录
import router from '@/router';
import { localCache } from '@/utils/cache';
import { LOGIN_TOKEN } from "@/global/constants";
function handleExit() {
  localCache.deleteCache(LOGIN_TOKEN);
  router.push("/login");
}
// 退出登录末

const isFold = ref(false)
function handleFoldChange(isFoldValue: boolean) {
  isFold.value = isFoldValue
}


</script>

<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isFold ? '60px' : '210px'">
        <main-menu />
      </el-aside>
      <el-container>
        <el-header>
          <main-header />
        </el-header>
        <el-main>
          <el-button type="primary" @click="handleExit">退 出 登 录</el-button>

        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="less" scoped>
.main {
  width: 100%;
  height: 100%;
}

.main-content {
  height: 100%;

  .el-aside {
    overflow-x: hidden;
    overflow-y: auto;
    line-height: 200px;
    text-align: left;
    cursor: pointer;
    background-color: #001529;
    transition: width 0.3s linear;
    scrollbar-width: none;
    /* firefox */
    -ms-overflow-style: none;
    /* IE 10+ */

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .el-main {
    background-color: #f0f2f5;
  }
}
</style>
