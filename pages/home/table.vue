<!-- Add this above the table in table.vue -->
<template>
  <div>
    <h2>Transaction Table</h2>
    <label for="start-date">Start Date:</label>
    <input type="date" id="start-date" v-model="startDate" />
    <label for="end-date">End Date:</label>
    <input type="date" id="end-date" v-model="endDate" />

    <table class="mt-1">
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

const startDate = ref('');
const endDate = ref('');

const filteredTransactions = computed(() => {
  if (!startDate.value || !endDate.value) return transactions.value;
  return transactions.value.filter(transaction => {
    const date = new Date(transaction.date);
    return date >= new Date(startDate.value) && date <= new Date(endDate.value);
  });
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
