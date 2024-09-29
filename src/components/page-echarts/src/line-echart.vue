<script setup lang="ts">
import BaseEchart from './base-echart.vue'
import type { EChartsOption } from 'echarts'



const option: EChartsOption = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true
    }
  ]
};
</script>

<template>
  <div class="line-echart">
    <base-echart :option="option" />
  </div>
</template>

<style lang="less" scoped>
.line-echart {}
</style>
