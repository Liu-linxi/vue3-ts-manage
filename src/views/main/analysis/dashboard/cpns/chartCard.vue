<script setup lang="ts">

</script>

<template>
  <div class="chart-card">
    <!-- <el-card>
      <template #header>
        <div class="card-header">
          <span>卡片头部标题</span>
        </div>
      </template>
<slot></slot>
</el-card> -->
    <el-card header="卡片头部标题">
      <slot>默认内容。</slot>
    </el-card>
  </div>
</template>

<style lang="less" scoped>
.chart-card {}
</style>
