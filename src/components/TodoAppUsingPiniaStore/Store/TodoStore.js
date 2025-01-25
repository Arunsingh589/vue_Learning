import { defineStore } from "pinia";

export const useTodoStore = defineStore("todoStore", {
  state: () => ({
    todos: [],
  }),
  actions: {
    addTodo(todotext) {
      this.todos.push({ id: Date.now(), text: todotext })
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id)
    }
  }
})