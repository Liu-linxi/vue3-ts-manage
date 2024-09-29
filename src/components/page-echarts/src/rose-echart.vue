<script setup lang="ts">
import BaseEchart from './base-echart.vue'
import type { EChartsOption } from 'echarts'



const option: EChartsOption = {
  legend: {
    top: 'bottom'
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [30, 80],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      data: [
        { value: 40, name: 'rose 1' },
        { value: 38, name: 'rose 2' },
        { value: 32, name: 'rose 3' },
        { value: 30, name: 'rose 4' },
        { value: 28, name: 'rose 5' },
      ]
    }
  ]
};
</script>

<template>
  <div class="rose-chart">
    <base-echart :option="option" />
  </div>
</template>

<style lang="less" scoped>
.rose-chart {}
</style>
