<template>
    <div>
      <C-Card>
        <template #header>
          <img
            src="/src/assets/logoe.jpeg"
            alt="Custom Header Image"
            class="c-card-header-image"
          />
        </template>
  
        <template #title>
         Card Title
        </template>
  
        <template #body>
         Some quick example text to build on the card title and make up the bulk of card's content.
        </template>
  
        <template #footer>
          <button class="c-card-footer-button">Go somewhere</button>
        </template>
      </C-Card>
    </div>
  </template>
  
  <script>
import CCard from './C-card.vue';

  
  export default {
    components: {
      CCard
    }
  };
  </script>

  <style>
  button{
    background-color: #2d7bf0;
    color: white;
    border: none;
    border-radius: 6px;
    padding: 10px;
  }
</style>
  