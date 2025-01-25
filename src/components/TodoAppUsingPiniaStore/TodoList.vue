<template>
  <ul class="todo-list">
    <li v-for="todo in todos" :key="todo.id" class="todo-item">
      <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
      <button @click="removeTodo(todo.id)">❌</button>
    </li>
  </ul>
</template>

<script>
import { computed } from "vue";
import { useTodoStore } from "./Store/TodoStore";

export default {
  setup() {
    const todoStore = useTodoStore();

    const todos = computed(() => todoStore.todos);

    const removeTodo = (id) => {
      console.log("Before deleting:", todoStore.todos);
      todoStore.deleteTodo(id);
      console.log("After deleting:", todoStore.todos);
    };

    return {
      todos,
      removeTodo,
    };
  },
};

</script>

<style scoped>
.todo-list {
  list-style: none;
  padding: 0;
}
.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
}
.completed {
  text-decoration: line-through;
  color: gray;
}
button {
  background: none;
  border: none;
  cursor: pointer;
  color: red;
  font-size: 16px;
}
button:hover {
  color: darkred;
}
</style>
