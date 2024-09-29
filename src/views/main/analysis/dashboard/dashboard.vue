<template>
  <div class="dashboard">
    <div class="topPanel">
      <top-panel />

    </div>
    dashboard
  </div>
</template>

<script setup lang="ts" name="dashboard">
import topPanel from './cpns/topPanel.vue'
</script>

<style scoped lang="less">
.dashboard {
  .topPanel {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
  }
}
</style>
