<!-- pages/home/table.vue -->
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
        <tr v-for="transaction in transactions" :key="transaction.date + transaction.source">
          <td>{{ transaction.date }}</td>
          <td>\${{ transaction.amount.toFixed(2) }}</td>
          <td>{{ transaction.source }}</td>
          <td>{{ transaction.comment }}</td>
          <td>{{ transaction.category }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="4" style="text-align: right;">Total Income</td>
          <td>\${{ totalIncome.toFixed(2) }}</td>
        </tr>
        <tr>
          <td colspan="4" style="text-align: right;">Total Expense</td>
          <td>\${{ totalExpense.toFixed(2) }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useDataStore } from '~/stores/store';

const dataStore = useDataStore();
const { transactions, totalIncome, totalExpense, netIncome } = storeToRefs(dataStore);
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
