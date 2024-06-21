<!-- pages/home/formModal.vue -->
<template>
    <div class="modal">
      <div class="modal-content">
        <span class="close" @click="$emit('close')">&times;</span>
        <h2>Add Transaction</h2>
        <form @submit.prevent="addTransaction">
          <label for="date">Date:</label>
          <input id="date" v-model="date" type="date" required />
  
          <label for="amount">Amount:</label>
          <input id="amount" v-model="amount" type="number" required />
  
          <label for="source">Source:</label>
          <input id="source" v-model="source" required />
  
          <label for="comment">Comment:</label>
          <input id="comment" v-model="comment" />
  
          <label for="category">Category:</label>
          <select id="category" v-model="category" required>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
  
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
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4); 
    overflow: hidden;
  }
  
  .modal-content {
    background-color: #fefefe;
    margin: 15% auto; 
    padding: 20px;
    border: 1px solid #888;
    width: 500px; 

    display: flex;
    flex-direction: column;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px
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
  