<template>
    <div class="home">
      <h2 class="weight-8 font-size-32">Welcome David 👋🏾</h2>
      <Hero />
      <Table />
    </div>
  </template>
  
  <script>
  import Hero from './hero.vue';
  import Table from './table.vue';
  
  export default {
    components: {
      Hero,
      Table
    }
  };
  </script>
  

<style scoped>
.home {
    display: flex;
    flex-direction: column;
    padding: 56px;
    @media (width < 780px) {
        padding: 16px;
    }
}

.home h2 {
    @media (width < 1000px) {
        font-weight: 600 !important;
        font-size: 40px !important;
    }

    @media (width < 791px) {
        font-size: 32px !important;
    }
}
</style>