<script setup lang="ts">
import { onMounted, ref } from 'vue';
import * as echarts from 'echarts';

const echartRef = ref<HTMLElement>()
onMounted(() => {
  const echartInstance = echarts.init(echartRef.value!, 'light', { renderer: "canvas" })
  echartInstance.setOption({
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {},
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
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
