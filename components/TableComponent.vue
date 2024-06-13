<template>
  <div>
    <DataTable :value="data" scrollable scrollHeight="400px" responsiveLayout="scroll">
      <Column v-for="(header, index) in headers" :key="index" :field="header.field" :header="header.label"></Column>
    </DataTable>
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
.p-datatable-wrapper {
  max-width: 100%;
  overflow-x: auto;
}
</style>
