<template>
    <button :class="{ 'primary': variant === 'primary', 'secondary': variant === 'secondary' }">
      <slot />
    </button>
  </template>
  
  <script>
  export default {
    props: {
      variant: {
        type: String,
        default: 'primary',
        validator(val) {
          return ['primary', 'secondary'].includes(val);
        },
      },
    },
  };
  </script>
  
  <style scoped>
  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 8px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-family: 'manrope', sans-serif;
    font-size: 15px;
    font-weight: 500;
  }
  
  .primary {
    background-color: var(--white);
    color: #000;
    font-weight: 500;
  }
  
  .secondary {
    background-color: #ccc;
    color: #333;
  }
  </style>
  