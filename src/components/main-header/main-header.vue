<script setup>
import { ref } from "vue";
import HeaderInfo from "./c-cpns/header-info.vue";

const emit = defineEmits(["foldChange"]);

const isFold = ref(false);
function handleFoldClick() {
  isFold.value = !isFold.value;
  emit("foldChange", isFold.value);
}
</script>

<template>
  <div class="main-header">
    <div class="menu-icon" @click="handleFoldClick">
      <el-icon size="28px">
        <component :is="isFold ? 'Expand' : 'Fold'" />
      </el-icon>
    </div>
    <div class="content">
      <header-crumb />
      <header-info />
    </div>
  </div>
</template>

<style lang="less" scoped>
.main-header {
  display: flex;
  align-items: center;
  flex: 1;
  height: 100%;

  .menu-icon {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 18px;
  }
}
</style>
