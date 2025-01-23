<template>
    <div class="c-card">
      <div class="c-card-header">
        <slot name="header">
          <img
            src="https://via.placeholder.com/300x150"
            alt="Default Header Image"
            class="c-card-header-image"
          />
        </slot>
      </div>
  
      <div class="c-card-title">
        <slot name="title">Default Title</slot>
      </div>
  
      <div class="c-card-body">
        <slot name="body">Default body content goes here...</slot>
      </div>
  
      <div class="c-card-footer">
        <slot name="footer">
          <button class="footer-button">Default Footer Button</button>
        </slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CCard"
  };
  </script>
  
  <style scoped>
  .c-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 330px;
    margin: 20px auto;
    overflow: hidden;
  }
  
  .c-card-header {
    text-align: center;
    background-color: #f4f4f4;
  }
  
  .c-card-header-image {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  
  .c-card-title {
    font-size: 1.5rem;
    font-weight: bold;
    padding-left: 15px;
    padding-bottom: 15px;
    color: #333;
  }
  
  .c-card-body {
    font-size: 1rem;
    color: #323030;
    padding-left: 15px;
    padding-bottom: 15px;

  }
  
  .c-card-footer {
    padding-left: 15px;
    padding-bottom: 15px;
    
  }
  
  
  
  
</style>  