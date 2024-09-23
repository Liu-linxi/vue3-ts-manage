<script setup lang="ts" name="topPanel">

</script>

<template>
  <div class="topPanel">
    <div class="panel" v-for=" li in 4" :key="li">
      <div class="flex">
        <div>
          商品{{ li }}销量
        </div>
        <el-icon>
          <Warning />
        </el-icon>
      </div>
      <h2 class="num">{{ li }}</h2>
      <div class="desc">
        商品{{ li }}总销量{{ li }}
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.topPanel {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  .panel {
    padding: 10px 20px;
    box-shadow: 0 0 12px 0px #ccc;

    .flex {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #666;
      padding-bottom: 10px;
    }

    .num {
      border-bottom: 1px solid #ccc;
      padding-bottom: 10px;
    }

    .desc {
      margin-top: 10px;
    }
  }
}
</style>
