<template>
  <div class="hero">
    <div class="card">
      <div class="date" >
        <label for="start-date">Start Date:</label>
        <input type="date" id="start-date" v-model="dateRange.start" />
        <label for="end-date">End Date:</label>
        <input type="date" id="end-date" v-model="dateRange.end" />
      </div>
      <p class="font-size-14 weight-5">Date: {{ dateRange.start }} - {{ dateRange.end }}</p>
      <div class="container">
        <div class="content">
          <p class="font-size-14 weight-5">Income <span></span></p>
          <h2>${{ totalIncome }}</h2>
        </div>
        <div class="content income">
          <p class="font-size-14 weight-5">Expense<span></span></p>
          <h2>${{ totalExpense }}</h2>
        </div>
      </div>
      <Button @click="showAddTransactionForm = true" class="">Add Transaction <img src="@/assets/icons/add.svg" alt=""></Button>
      <div class="net-income weight-7">
        <p>Net Income: <span>${{ netIncome }}</span></p> <span class="percentage"><img src="@/assets/icons/red_arrow.svg" alt="">2%</span>
      </div>
    </div>
    <FormModal v-if="showAddTransactionForm" @close="showAddTransactionForm = false" />
  </div>
</template>

<script>
import Button from '@/components/Button.vue';
import FormModal from './formModal.vue';

export default {
  components: {
    Button,
    FormModal
  },
  data() {
    return {
      showAddTransactionForm: false,
      dateRange: {
        start: '2024-06-04',
        end: '2024-11-30'
      }
    };
  },
  computed: {
    filteredTransactions() {
      return this.$store.state.transactions.filter(transaction => {
        const date = new Date(transaction.date);
        const startDate = new Date(this.dateRange.start);
        const endDate = new Date(this.dateRange.end);
        return date >= startDate && date <= endDate;
      });
    },
    totalIncome() {
      return this.filteredTransactions
        .filter(transaction => transaction.category === 'Income')
        .reduce((sum, transaction) => sum + transaction.amount, 0)
        .toFixed(2);
    },
    totalExpense() {
      return this.filteredTransactions
        .filter(transaction => transaction.category === 'Expense')
        .reduce((sum, transaction) => sum + transaction.amount, 0)
        .toFixed(2);
    },
    netIncome() {
      return (this.totalIncome - this.totalExpense).toFixed(2);
    }
  }
};
</script>

<script setup>
import { storeToRefs } from 'pinia';
import { useDataStore } from '~/stores/store';

const dataStore = useDataStore();
const { totalIncome, totalExpense, netIncome } = storeToRefs(dataStore);
</script>


<style scoped>
.hero {
  align-self: stretch;
  display: flex;
  justify-content: space-between;
  gap: 50px;
  padding: 28px 0px;

  @media (width < 801px) {
    flex-direction: column-reverse;
    gap: 25px;
  }
}

.hero .card {
  display: flex;
  flex-direction: column;
  gap: 26px;
}

.hero .card .container {
  display: flex;
  /* flex-direction: column; */
  gap: 32px;
}

.hero .card .container .content {
  display: flex;
  align-self: stretch;
  flex-direction: column;
  gap: 8px;
}

.hero .card .container .content h2 {
  font-size: 24px !important;
}

.hero .card .container .content p {
  display: flex;
  align-items: center;
  gap: 6px;
}

.hero .card .container .content p span {
  display: block;
  height: 8px;
  width: 8px;
  border-radius: 50px;
  background-color: var(--ascent);
}

.hero .card .container .income p span {
  background-color: var(--red) !important;
  margin-left: 4px;
}

.hero .card .net-income {
  display: flex;
  gap: 2px;
  align-items: center;
}

.hero .card .net-income .percentage {
  padding: 2px 6px;
  display: flex;
  gap: 10px;
  font-size: 14px;
  border-radius: 50px;
  color: var(--red);
  display: flex;
  align-items: center;
  margin-left: 10px
}
</style>