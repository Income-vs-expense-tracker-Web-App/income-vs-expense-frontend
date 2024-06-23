<template>
    <div>
        <h2>Transactions Graph</h2>
        <canvas id="transactionsGraph"></canvas>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useDataStore } from '~/stores/store';
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns';

Chart.register(...registerables);

const dataStore = useDataStore();
const { transactions } = storeToRefs(dataStore);

const chart = ref(null);

onMounted(() => {
    const ctx = document.getElementById('transactionsGraph').getContext('2d');
    
    // Separate transactions into income and expense arrays
    const incomeTransactions = transactions.value.filter(transaction => transaction.category === 'Income');
    const expenseTransactions = transactions.value.filter(transaction => transaction.category === 'Expense');

    // Prepare data for the chart
    const incomeData = incomeTransactions.map(transaction => ({ x: new Date(transaction.date), y: transaction.amount })).sort((a, b) => a.x - b.x);
    const expenseData = expenseTransactions.map(transaction => ({ x: new Date(transaction.date), y: transaction.amount })).sort((a, b) => a.x - b.x);

    chart.value = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [
                {
                    label: 'Income',
                    data: incomeData,
                    borderColor: 'green',
                    borderWidth: 1,
                    fill: false,
                },
                {
                    label: 'Expense',
                    data: expenseData,
                    borderColor: 'red',
                    borderWidth: 1,
                    fill: false,
                }
            ]
        },
        options: {
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'day'
                    },
                    title: {
                        display: true,
                        text: 'Date'
                    }
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Amount'
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                tooltip: {
                    mode: 'index',
                    intersect: false
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                }
            }
        }
    });
});
</script>

<style scoped>
canvas {
    width: 800px !important;
}
</style>
