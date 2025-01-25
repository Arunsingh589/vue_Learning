<template>
    <div class="app-container">
      <div class="container">
        <div class="timestyle">
          <p class="time">9:41</p>
        </div>
  
        <div class="mobile_signal">
          <font-awesome-icon :icon="['fas', 'signal']" />
          <font-awesome-icon :icon="['fas', 'wifi']" class="icon" />
          <font-awesome-icon :icon="['fas', 'battery-full']" class="icon" />
        </div>
      </div>
  
      <!-- Header Section -->
      <div class="header">
        <h1 class="title">Today</h1>
        <font-awesome-icon :icon="['fas', 'circle-plus']" class="add-icon" @click="AddTodo" />
      </div>
      <div class="addTodo" v-if="showTodo">
  <Body
    @close-todo="closeTodo"
    @add-new-todo="addNewTodo"
  />
</div>

      <!-- Task List -->
      <ul class="task-list">
        
        <li class="task-item" v-for="(task, index) in tasks" :key="index">
          <div class="task-left">
            <div class="circle"></div>
            <div>
              <p class="task-text">{{ task.text }}</p>
              <p v-if="task.time" class="task-time">
                <font-awesome-icon :icon="['fas', 'clock']" class="time-icon" />
                {{ task.time }}
              </p>
            </div>
          </div>
          <div class="task-right">
            <div class="status-indicator" :style="{ backgroundColor: task.statusColor }"></div>
          </div>
        </li>
      </ul>

      <div class="lists">
        <div class="list1"></div>
        <div class="list1"></div>
        <div class="list1"></div>
        
        <div class="home-indicator">
           <span class="rectangle">
           <img src="/src/components/FigmaTodo/icons/Rectangle.png" alt="">
           </span>
      </div>
      </div>
  
      
    </div>
  </template>
  
  <script>
  import { library } from "@fortawesome/fontawesome-svg-core";
  import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
  import { fas } from "@fortawesome/free-solid-svg-icons";
import Body from "./Body.vue";
  library.add(fas);
  
  export default {
    components: {
      FontAwesomeIcon,
          Body  
    
    },
    data() {
      return {
        tasks: [
          { text: "Start making a presentation", time: null, statusColor: "#61DEA4" },
          { text: "Pay for rent", time: "7:00 pm", statusColor: "#B678FF" },
          { text: "Buy a milk", time: null, statusColor: "#F45E6D" },
          { text: "Don’t forget to pick up Mickael from school", time: null },
          { text: "Buy a chocolate for Charlotte", time: null, statusColor: "#F45E6D" },
        ],
        showTodo: false,
      };
    },
    methods: {
      AddTodo() {
        this.showTodo = true;
      },
      closeTodo() {
        this.showTodo = false;
      },
      addNewTodo(newTask) {
        if (newTask.text) {
          this.tasks.push(newTask);
        }
        this.showTodo = false; 
      },
    },
  };
  </script>
  
  
  <style scoped>
  /* App Container */
  .app-container {
  font-family: Arial, sans-serif;
  margin: 20px auto;
  padding: 20px;
  max-width: 400px; 
  background-color: white; 
  border-radius: 10px; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  position: relative;
  z-index: 1;
  position: relative;
}

body {
  margin: 0;
  padding: 0;
  background-color: #f0f0f0; 
}
  .addTodo {
  position: absolute;
  top: 100px; 
  left: 9px;
  width: 340px; 
  border-radius: 8px;
  padding: 20px;
  z-index: 2; 
}
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }
  
  .timestyle .time {
    font-size: 14px;
    font-weight: 600;
  }
  
  .mobile_signal {
    display: flex;
    gap: 5px;
  }
  
  .icon {
    font-size: 14px;
  }
  
  /* Header */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .title {
    font-size: 28px;
    font-weight: bold;
  }
  
  .add-icon {
    font-size: 24px;
    color: #007aff;
    cursor: pointer;
  }
  
  /* Task List */
  .task-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .task-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    border-bottom: 1px solid #ddd;

  }
  
  .task-left {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  
  .circle {
    border: 2px solid;
    border-radius: 50%;
    color: #252A31;
   opacity: 20%;
   width: 28px;
   height: 28px;
  }
  
  .task-text {
    font-size: 18px;
    line-height: 21.09px;
    font-weight: 500;
    margin: 0;
    color: #252A31;

  }
  
  .task-time {
    font-size: 14px;
    color: #777;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 5px;
  }
  
  .time-icon {
    font-size: 14px;
    color: #252A31;
   opacity: 20%;
  }
  
  .task-right {
    display: flex;
    align-items: center;
  }
  
  .status-indicator {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
  .lists{
    height: 377px;
    top: 483px;
    display: flex;
  }
  .list1{
    height: 69px;
    display: flex;
    top: 308px;
  }
  .home-indicator{
     width: 375px;
     height: 34px;
     top: 360px;
     position: relative;
     gap: 0px;
     opacity: 0px;
     left: 120px;
  }
  .rectangle{
    width: 135px;
    height: 5px;
    gap: 0px;
     border-radius: 100px 0px 0px 0px;
    opacity: 0px;
   color: #252A31;
   


  }
  </style>
  