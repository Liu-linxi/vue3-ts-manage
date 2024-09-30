<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue';
import * as echarts from 'echarts';
import type { EChartsOption } from 'echarts'

interface IProps {
  option: EChartsOption
}

const props = defineProps<IProps>()

const echartRef = ref<HTMLElement>()
onMounted(() => {
  // 初始化实例
  const echartInstance = echarts.init(echartRef.value!, 'light', { renderer: "canvas" })
  //监听option重新执行
  watchEffect(() => echartInstance.setOption(props.option))
  // 监听window缩放
  window.addEventListener("resize", () => {
    echartInstance.resize()
  })
})
</script>

<template>
  <div class="base-echart">
    <div class="echart" ref="echartRef"></div>
  </div>
</template>

<style lang="less" scoped>
.base-echart {
  .echart {
    height: 300px;
  }
}
</style>
