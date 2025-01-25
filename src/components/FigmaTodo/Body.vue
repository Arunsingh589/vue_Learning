<template>
    <div class="rectangles">
      <div class="text">
        <p>Add Todo</p>
      </div>
      <div>
        <textarea
          class="box"
          v-model="newTodo.text"
          placeholder="Type your task here..."
        ></textarea>
      </div>
      <div class="buttons">
        <div class="button1">
          <button class="button1_cancel" @click="$emit('close-todo')">Cancel</button>
        </div>
        <div class="button2">
          <button
            class="button2_Done"
            @click="addTodo"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newTodo: {
          text: "",
          time: null,
          statusColor: "#61DEA4", 
        },
      };
    },
    methods: {
      addTodo() {
        this.$emit("add-new-todo", this.newTodo); 
      },
    },
  };
  </script>
  
  <style scoped>
  .rectangles {
    width: 340.62px;
    height: 297.24px;
    border-radius: 10px;
    border: 1px solid #EBEFF5;
    background: #FFFFFF;
    position: relative;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .text p {
    font-size: 18px;
    font-weight: 600;
    color: #000000;
    margin: 0;
  }
  
  .box {
    width: 298px;
    height: 148px;
    border-radius: 10px;
    border: 1px solid #EBEFF5;
    resize: none;
    padding: 10px;
    font-size: 16px;
    outline: none;
  }
  
  .buttons {
    display: flex;
    justify-content: space-between;
  }
  
  .button1_cancel,
  .button2_Done {
    font-size: 18px;
    font-weight: 600;
    color: #006CFF;
    background: none;
    border: none;
    cursor: pointer;
  }
  </style>
  