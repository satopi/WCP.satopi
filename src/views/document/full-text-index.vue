<template>
  <div class="chart-container">
    全文索引
  </div>
</template>

<script>
import Chart from '@/components/Charts/Keyboard'

export default {
  name: 'Full-text-index',
  components: { Chart }
}
</script>

<style scoped>
.chart-container{
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
}
</style>

