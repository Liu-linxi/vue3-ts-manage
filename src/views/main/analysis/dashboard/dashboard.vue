<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <template v-for="li in numArr" :key="li">
        <el-col :span="6" :offset="0">
          <top-panel v-bind="{ value: li }" />
        </el-col>
      </template>
    </el-row>

  </div>
</template>

<script setup lang="ts" name="dashboard">
import { ref } from 'vue';
import topPanel from './cpns/topPanel.vue'
const randNum = (): number => Math.floor(Math.random() * 100000);
const numArr = ref<number[]>([randNum(), randNum(), randNum(), randNum()]);
</script>

<style scoped lang="less">
.dashboard {}
</style>
