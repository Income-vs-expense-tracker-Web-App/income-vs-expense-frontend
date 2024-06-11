<template>
  <div class="table-container">
    <table class="custom-table">
      <!-- Table head -->
      <thead>
        <tr>
          <th v-for="(header, index) in headers" :key="index" class="font-size-14">
            {{ header }}
          </th>
        </tr>
      </thead>

      <!-- Table body -->
      <tbody>
        <tr v-for="(row, rowIndex) in data" :key="rowIndex">
          <td v-for="(cell, cellIndex) in row" :key="cellIndex" :class="{
            'no-border-left': cellIndex === 0,
            'no-border-right': cellIndex === row.length - 1,
            'no-border-bottom': rowIndex === data.length - 1
          }" class="font-size-14 cell">
            <template v-if="cellIndex === 4">
              <span class="category">{{ cell }}</span>
            </template>
            <template v-else>
              {{ cell }}
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    headers: {
      type: Array,
      required: true
    },
    data: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.table-container {
  overflow-x: auto;
}

.custom-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin: 20px 0;
  font-size: 18px;
  text-align: left;
  border-radius: 8px;
}

.custom-table th,
.custom-table td {
  font-weight: 600 !important;
  font-size: 14px;
  padding: 16px 20px;
  border-left: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  font-family: 'manrope', sans-serif;
}

.custom-table th {
  color: #525252;
  border: 0px;
  background-color: #f4f4f4;
}

.custom-table tbody tr:hover {
  background-color: #f1f1f1;
}

.custom-table td {
  color: #292929;
}

.custom-table td.no-border-left {
  border-left: 0;
}

.custom-table td.no-border-right {
  border-right: 0;
}

.custom-table td.no-border-bottom {
  border-bottom: 0;
}

.category {
  color: #4350FF;
  background-color: #4350ff31;
  padding: 4px 8px;
  border-radius: 50px;
  font-weight: 500;
}

.cell {
  padding: 20px !important;
}

/* Ensure the table header stays aligned when scrolling */
.table-container {
  display: block;
  white-space: nowrap;
}
</style>
