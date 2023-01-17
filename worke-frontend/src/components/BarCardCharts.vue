<template>
  <div class="card">
    <ChartTitle :title="title" :subtitle="subtitle"/>
    <canvas id="barCharts"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';
import BarCharts from '../components/BarChart.js'
import ChartTitle from '../components/ChartTitle.vue'

export default {
  name: 'CardCharts',
  components: {
    ChartTitle,
  },  
  data() {
    return {
      charts: BarCharts,
      title: 'Exercícios',
      subtitle: 'mais realizados no mês',
    }
  },
  mounted() {
    const ctx = document.getElementById('barCharts');
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