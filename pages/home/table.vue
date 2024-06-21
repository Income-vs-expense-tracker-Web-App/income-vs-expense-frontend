<template>
  <div>
    <h2>Transaction Table</h2>
    <div style="font-weight: bold; margin-bottom: 10px;">
      Net Income: {{ netIncome }}
    </div>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Amount</th>
          <th>Source</th>
          <th>Comment</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="transaction in filteredTransactions" :key="transaction.date + transaction.source">
          <td>{{ transaction.date }}</td>
          <td>${{ transaction.amount.toFixed(2) }}</td>
          <td>{{ transaction.source }}</td>
          <td>{{ transaction.comment }}</td>
          <td>{{ transaction.category }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useDataStore } from '~/stores/store';

const dataStore = useDataStore();
const { transactions } = storeToRefs(dataStore);

const dateRange = ref({
  start: '2024-06-04',
  end: '2024-11-30'
});

const filteredTransactions = computed(() => {
  return transactions.value.filter(transaction => {
    const date = new Date(transaction.date);
    const startDate = new Date(dateRange.value.start);
    const endDate = new Date(dateRange.value.end);
    return date >= startDate && date <= endDate;
  });
});

const totalIncome = computed(() => {
  return filteredTransactions.value
    .filter(transaction => transaction.category === 'Income')
    .reduce((sum, transaction) => sum + transaction.amount, 0)
    .toFixed(2);
});

const totalExpense = computed(() => {
  return filteredTransactions.value
    .filter(transaction => transaction.category === 'Expense')
    .reduce((sum, transaction) => sum + transaction.amount, 0)
    .toFixed(2);
});

const netIncome = computed(() => {
  return (totalIncome.value - totalExpense.value).toFixed(2);
});
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  color: #fff;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #000000;
  text-align: left;
}

tfoot td {
  font-weight: bold;
  background-color: #000000;
}

label {
  color: #fff;
}
</style>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  color: #fff;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #000000;
  text-align: left;
}

tfoot td {
  font-weight: bold;
  background-color: #000000;
}

label {
  color: #fff;
}
</style>
