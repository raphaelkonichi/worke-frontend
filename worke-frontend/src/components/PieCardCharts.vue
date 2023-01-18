<template>
  <div class="card">
    <ChartTitle :title="title" :subtitle="subtitle"/>
    <canvas id="pieCharts"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';
import Charts from '../components/PieChart.js'
import ChartTitle from '../components/ChartTitle.vue'

export default {
  name: 'CardCharts',
  components: {
    ChartTitle,
  },  
  data() {
    return {
      charts: Charts,
      title: '4 Salas',
      subtitle: 'com mais funcionários',
    }
  },
  mounted() {
    const ctx = document.getElementById('pieCharts');
    new Chart(ctx, this.charts);
  }
}
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.card {
    background: @white;
    border-radius: 7px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

</style>