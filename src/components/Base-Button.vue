<script>
  export default {
    name: "BaseButton",
    props: {
      backgroundColor: {
        type: String,
      },
      text: {
        type: String,
      },
    },

  };
  </script>

<template>
    <button 
      :style="{
        border: 'none', 
        padding: '10px 20px', 
        borderRadius: '5px', 
        cursor: 'pointer', 
        fontSize: '1rem'
      }" 
    >
      {{ text }}
    </button>
  </template>
  
  <style scoped>
  button{
    background-color: #0069D9;
    margin-top: 10px;
    color: #ffffff;
  }
  .base-button:hover {
    opacity: 0.9;
  }
  </style>
  