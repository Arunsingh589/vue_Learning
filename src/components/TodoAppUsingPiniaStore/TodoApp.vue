<template>
    <div class="app-container">
      <h1>Todo App</h1>
      <AddTodo />
      <TodoList />
    </div>
  </template>
  
  <script>
import AddTodo from './AddTodo.vue';
import TodoList from './TodoList.vue';

  
  export default {
    components: {
      AddTodo,
      TodoList,
    },
  };
  </script>
  
  <style scoped>
  .app-container {
    max-width: 500px;
    margin: 20px auto;
    padding: 20px;
    font-family: Arial, sans-serif;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background: #fff;
  }
  h1 {
    text-align: center;
  }
  </style>
  