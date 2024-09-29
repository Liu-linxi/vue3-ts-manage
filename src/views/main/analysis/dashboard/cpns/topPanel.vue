<script setup lang="ts" name="topPanel">
import { CountUp } from 'countup.js';
import { onMounted, ref } from 'vue';

const numRef = ref<HTMLElement>()
const props = withDefaults(defineProps<{
  value?: number;
}>(), {
  value: 23423423,
});

// 参数1执行动画元素
onMounted(() => {
  const countUp = new CountUp(numRef.value!, props.value, {})
  countUp.start()
})
</script>

<template>
  <div class="topPanel">
    <div class="panel">
      <div class="flex">
        <div>
          商品XXX销量
        </div>
        <el-icon>
          <Warning />
        </el-icon>
      </div>
      <h2 class="num" ref="numRef">{{ value }}</h2>
      <div class="desc">
        商品XXX总销量{{ value }}
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.panel {
  padding: 10px 20px;
  box-shadow: 0 0 12px 0px #ccc;
  background-color: #ffff;

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
</style>
