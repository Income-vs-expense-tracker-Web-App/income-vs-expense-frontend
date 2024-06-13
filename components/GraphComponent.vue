<template>
    <div class="graph">
    <p class="timeframe">
      Showing Income vs. Expenses for
      <span>This Month <img src="@/assets/icons/arrow_drop_down.svg" alt=""></span>
      <!-- there should be a custom select for the users to select the timeline -->
    </p>
      <!-- Chart -->
      <Bar
      aria-label="Sales figures for the years 2022 to 2024. Sales in 2022: 987, Sales in 2023: 1209, Sales in 2024: 825."
      :data="chartData"
      :options="chartOptions"
      class="chart"
    />
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from '~/plugins/primevue'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [ 'January', 'February', 'March' ],
        datasets: [ { data: [40, 20, 12] } ]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>

<style scoped>
.graph {
  display: flex;
  flex-direction: column;
  /* align-self: stretch; */
  /* justify-content: ; */
}

.graph .timeframe {
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 500;
  font-family: 'manrope', sans-serif;
}

.graph p {
  color: #525252;
  font-family: 'manrope';
}

.graph p span {
  color: #000;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.chart {
  width: 600px;
  height: 100px;
}
</style>
