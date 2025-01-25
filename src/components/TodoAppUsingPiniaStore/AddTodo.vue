<template>
  <div class="add-todo">
    <input
      type="text"
      v-model="newTodo"
      placeholder="Enter a new todo"
      @keyup.enter="addTodo"
    />
    <button @click="addTodo">Add Todo</button>
  </div>
</template>

<script>
import { ref } from "vue";
import { useTodoStore } from "./Store/TodoStore";

export default {
  setup() {
    const todoStore = useTodoStore();
    const newTodo = ref("");
      const addTodo = () => {
        if(newTodo.value.trim()){
          todoStore.addTodo(newTodo.value);
          newTodo.value= "";
        }
      }

      return {newTodo, addTodo};

  },
};
</script>

<style scoped>
.add-todo {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
input {
  flex: 1;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
}
button {
  padding: 10px 20px;
  border: none;
  background-color: #007aff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #005bb5;
}
</style>
