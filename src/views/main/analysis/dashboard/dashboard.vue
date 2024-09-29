<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <template v-for="li in numArr" :key="li">
        <el-col :span="6" :offset="0">
          <top-panel v-bind="{ value: li }" />
        </el-col>
      </template>
    </el-row>

    <el-row :gutter="10">
      <el-col :span="7" :offset="0">
        <chart-card>
          <BaseEchart />
        </chart-card>
      </el-col>
      <el-col :span="10" :offset="0">
        <chart-card></chart-card>
      </el-col>
      <el-col :span="7" :offset="0">
        <chart-card></chart-card>
      </el-col>
    </el-row>

    <el-row :gutter="10">
      <el-col :span="12" :offset="0">折线图</el-col>
      <el-col :span="12" :offset="0"></el-col>
    </el-row>

  </div>
</template>

<script setup lang="ts" name="dashboard">
import { ref } from 'vue';
import topPanel from './cpns/topPanel.vue'
import chartCard from './cpns/chartCard.vue'

import BaseEchart from '@/components/page-echarts'


const randNum = (): number => Math.floor(Math.random() * 100000);
const numArr = ref<number[]>([randNum(), randNum(), randNum(), randNum()]);
</script>

<style scoped lang="less">
.dashboard {
  .el-row {
    margin-bottom: 10px;
  }
}
</style>
