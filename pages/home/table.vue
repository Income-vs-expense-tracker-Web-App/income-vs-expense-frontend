<template>
    <div class="table">
        <h2 class="font-size-24">Expenses</h2>
        <TableComponent :headers="tableHeaders" :data="tableData" />
    </div>
</template>

<script>
import TableComponent from './components/TableComponent.vue';
export default {
  components: {
    TableComponent
  },
  data() {
    return {
      tableHeaders: ['Past Month', 'Amount', 'Reference', 'Comments', 'Category'],
      tableData: [
  ['April', '$200', 'REF12345', 'Payment for services', 'Services'],
  ['May', '$150', 'REF12346', 'Refund for order', 'Refund'],
  ['June', '$300', 'REF12347', 'Salary payment', 'Salary'],
  ['July', '$250', 'REF12348', 'Bonus payment', 'Bonus']
]

    };
  }
};
</script>

<style scoped>
.table {
    display: flex;
    flex-direction: column;
    gap: 10px;
}


</style>