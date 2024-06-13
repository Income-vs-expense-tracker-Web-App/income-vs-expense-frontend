<template>
  <div class="table">
    <h2 class="font-size-24">Expenses</h2>
    <div>
      <div class="flex px-3 py-3.5 border-b border-grey-200 dark:border-grey-700">
        <UInput v-model="q" placeholder="Search..." />
      </div>
      <UTable v-model="selected" :rows="people" class="px-3" />
    </div>
  </div>
</template>

<script setup lang="ts">
const people = [{
  id: 1,
  name: 'Lindsay Walton',
  title: 'Front-end Developer',
  email: 'lindsay.walton@example.com',
  role: 'Member'
}, {
  id: 2,
  name: 'Courtney Henry',
  title: 'Designer',
  email: 'courtney.henry@example.com',
  role: 'Admin'
}, {
  id: 3,
  name: 'Tom Cook',
  title: 'Director of Product',
  email: 'tom.cook@example.com',
  role: 'Member'
}, {
  id: 4,
  name: 'Whitney Francis',
  title: 'Copywriter',
  email: 'whitney.francis@example.com',
  role: 'Admin'
}, {
  id: 5,
  name: 'Leonard Krasner',
  title: 'Senior Designer',
  email: 'leonard.krasner@example.com',
  role: 'Owner'
}]

const q = ref('')

function select (row) {
  const index = selected.value.findIndex((item) => item.id === row.id)
  if (index === -1) {
    selected.value.push(row)
  } else {
    selected.value.splice(index, 1)
  }
}

const selected = ref([people[1]])

</script>

<style scoped>
.table {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* Style for table rows */
.ut-table__row {
  border-bottom: 1px solid #e5e5e5; /* Light gray border between rows */
}

/* Style for table headers */
th {
  color: #000;
  background-color: #f5f5f5; /* Light gray background for headers */
  border-bottom: 1px solid #e5e5e5; /* Light gray border below headers */
}

/* Style for table cells */
.ut-table__cell {
  padding: 0.75rem; /* Adjust cell padding */
  border-right: 1px solid #e5e5e5; /* Light gray border between cells */
}

/* Style for last cell in each row */
.ut-table__cell:last-child {
  border-right: none; /* Remove right border from last cell in each row */
}

.input input {
  background-color: red !important;
}

input[type=checkbox] {
  padding: 5px;  /* Adjust padding value as needed */
}

</style>