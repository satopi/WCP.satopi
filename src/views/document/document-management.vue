<template>
  <div class="chart-container">
    文档管理
  </div>
</template>

<script>
import Chart from '@/components/Charts/Keyboard'

export default {
  name: 'Document-management',
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

