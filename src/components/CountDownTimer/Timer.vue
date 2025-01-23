<template>
    <div class="container">
      <h1 class="countdown">{{ countdown }}</h1>
      <Control @start="startCountdown" @stop="stopCountdown" />
    </div>
  </template>
  
  <script>
  import Control from './Control.vue';
  
  export default {
    components: {
      Control
    },
    data() {
      return {
        countdown: 0,
        timer: null
      };
    },
    methods: {
      startCountdown() {
        if (this.timer) return; 
        this.timer = setInterval(() => {
          this.countdown++;
        }, 600);
      },
      stopCountdown() {
        if (this.timer) {
          clearInterval(this.timer);
          this.timer = null;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    text-align: center;
    margin-top: 50px;
  }
  
  .countdown {
    font-size: 4rem;
    font-weight: bold;
    color: #4caf50;
    margin-bottom: 20px;
  }
  </style>
  