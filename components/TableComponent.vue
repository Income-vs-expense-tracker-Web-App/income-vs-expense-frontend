<template>
  <div>
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
          }" class="font-size-14">
            {{ cell }}
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
.custom-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin: 20px 0;
  font-size: 18px;
  text-align: left;
  border-radius: 8px;
  border: 1px solid #525252;
  /* Round all corners */
  overflow: hidden;
  /* Ensure rounding is visible */
  border: 1px solid #ddd;
}

.custom-table th,
.custom-table td {
  padding: 12px 15px;
  border-left: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  font-family: 'manrope', sans-serif;
}

.custom-table th {
  color: #525252;
  border: 0px;
  background-color: #f4f4f4;
}

.custom-table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

.custom-table tbody tr:hover {
  background-color: #f1f1f1;
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
</style>
