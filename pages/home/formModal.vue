<!-- pages/home/formModal.vue -->
<template>
  <div class="modal">
    <div class="modal-content">
      <div class="heading">
        <h2 style="color: black;">Add Transaction</h2>
        <span class="close" @click="$emit('close')">&times;</span>
      </div>
      <form @submit.prevent="addTransaction">
        <label for="category">Entry Type:</label>
        <select id="category" v-model="category" required>
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>

        <label for="date">Date:</label>
        <input id="date" v-model="date" type="date" required />

        <label for="amount">Amount:</label>
        <input id="amount" v-model="amount" type="number" required />

        <label for="source">Source:</label>
        <input id="source" v-model="source" required />

        <label for="comment">Comment:</label>
        <input id="comment" v-model="comment" />


        <button type="submit">Add</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useDataStore } from '~/stores/store';

const dataStore = useDataStore();

const date = ref('');
const amount = ref('');
const source = ref('');
const comment = ref('');
const category = ref('Income');

function addTransaction() {
  dataStore.addTransaction({
    date: date.value,
    amount: parseFloat(amount.value),
    source: source.value,
    comment: comment.value,
    category: category.value
  });
  date.value = '';
  amount.value = '';
  source.value = '';
  comment.value = '';
  category.value = 'Income';
  $emit('close');
}
</script>

<style scoped>
.modal {
  display: block;
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  border-radius: 4px;
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  width: 500px;

  display: flex;
  flex-direction: column;
}

.heading {
  display: flex;
  align-self: stretch;
  justify-content: space-between;
}

.heading h2 {
  font-size: 20px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px
}

label {
  font-size: 14px;
  font-weight: 600;
}

input, select, button {
  padding: 12px;
  font-size: 16px;
  font-weight: 500 !important;
  border: 1px solid #4E4E4E;
  border-radius: 4px;
  outline: 0px;

  @media (width < 790px) {
    padding: 16px;
  }
}

button {
  background-color: #000;
  color: #fff;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>