<script setup lang="ts">
import { onMounted, ref } from 'vue';
import * as echarts from 'echarts';
import type { EChartsOption } from 'echarts'

interface IProps {
  option: EChartsOption
}

const props = defineProps<IProps>()

const echartRef = ref<HTMLElement>()
onMounted(() => {
  const echartInstance = echarts.init(echartRef.value!, 'light', { renderer: "canvas" })
  echartInstance.setOption(props.option)
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
