<template>
    <div class="container">
      <button class="button button1" @click="startCountdown">Start</button>
      <button class="button button2" @click="stopCountdown">Stop</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      startCountdown() {
        this.$emit('start');
      },
      stopCountdown() {
        this.$emit('stop');
      }
    }
  };
  </script>
  
  <style scoped>
  .container{
    display: flex;
    justify-content: center;
    gap: 30px;
  }
  .button{
    padding:10px 20px;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    border: none;
    border-radius: 10px;
  }
  .button1{
    background-color: #1aa1f5;
    color: white;
  }
  .button1:hover{
    background-color: #075180;
  }
  .button2:hover{
    background-color: rgb(182, 180, 180);
  }
  </style>