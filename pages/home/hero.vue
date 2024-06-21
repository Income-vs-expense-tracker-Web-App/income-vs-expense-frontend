<template>
  <div class="hero">
    <div class="card">
      <p class="font-size-20 weight-7">Showing Date For 2024-11-30 - 2024-12-30</p>
      <div class="net-income weight-6 mt-1">
        <p>Net Income: <span> ${{ netIncome }}</span></p> <span class="percentage"><img src="@/assets/icons/red_arrow.svg"
            alt="">2%</span>
      </div>
      <div class="container mt-1">
        <div class="content">
          <p class="font-size-14 weight-5">Income <span></span></p>
          <h2>${{ totalIncome }}</h2>
        </div>
        <div class="content income">
          <p class="font-size-14 weight-5">Expense<span></span></p>
          <h2>${{ totalExpense }}</h2>
        </div>
      </div>
      <Button @click="showAddExpenseForm = true" class="mt-4">Add Transaction <img src="@/assets/icons/add.svg" alt=""></Button>
    </div>
    <FormModal v-if="showAddIncomeForm || showAddExpenseForm" @close="showAddIncomeForm = showAddExpenseForm = false" />
  </div>
</template>

<script>
import Button from '@/components/Button.vue';
import FormModal from './formModal.vue'; // We'll create this component next

export default {
  components: {
    Button,
    FormModal
  },
  data() {
    return {
      showAddIncomeForm: false,
      showAddExpenseForm: false
    };
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
  padding: 28px 0px;

  @media (width < 801px) {
    flex-direction: column-reverse;
    gap: 25px;
  }
}

.hero .card {
  display: flex;
  flex-direction: column;
  /* gap: 5px; */
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