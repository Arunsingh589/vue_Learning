<script >
// import HelloWorld from './components/HelloWorld.vue';
import BaseButton from './components/Base-Button.vue';
import List from './components/BreakDownForm/List.vue';
import Control from './components/CountDownTimer/Control.vue';
import Timer from './components/CountDownTimer/Timer.vue';
import CustomerDetailForm from './components/CustomerDetailForm.vue';
import Body from './components/FigmaTodo/Body.vue';
import Header from './components/FigmaTodo/Header.vue';
import FormModal from './components/Form/FormModal.vue';
import Main from './components/Form/Main.vue';
// import CustomerDetailForm from './components/CustomerDetailForm.vue';
import InputFiledLifeCycleHook from './components/InputFiled&LifeCycleHook.vue';
import OneCheckBoxRed from './components/OneCheckBoxRed.vue';
// import CCard from './components/Slots/C-card.vue';
import Card from './components/Slots/Card.vue';
import SmallForm from './components/SmallForm.vue';
import Test from './components/Test.vue';
import TodoApp from './components/TodoAppUsingPiniaStore/TodoApp.vue';

export default {
  name: "app",
  
  components: {
    Test,
    InputFiledLifeCycleHook,
    OneCheckBoxRed,
    SmallForm,
    List,
    Control,
    Timer,
    CustomerDetailForm,
    BaseButton, 
    Card,
    Main,
    Header,
    Body,
    TodoApp
    
  },
  data() {
    return {
      // name: "Hello", 
    };
  },
  methods: {
    showAlert() {
      alert("This is an alert message!");
    },
    toggleName() {
      this.name = this.name.split("").reverse().join(""); 
      console.log(this.name);
      
    },
  },
}


</script>

<template>
  <div>
    <h1>{{ name }}</h1>
    
<!-- <Main /> -->
 <!-- <Header /> -->
  <TodoApp />
  <!-- <Body /> -->
<!-- <Test /> -->
<!-- <List /> -->
 <!-- <Control /> -->
  <!-- <Timer /> -->
<!-- <OneCheckBoxRed /> -->
 <!-- <SmallForm /> -->
  
<!-- <HelloWorld /> -->
 <!-- <CustomerDetailForm /> -->
  <!-- <BaseButton 
      text="Show Alert"
      @click="showAlert" />
  <br />
  <BaseButton 
      text="Toggle Name"
      @click="toggleName" /> -->
  </div>

</template>

<style scoped>
p{
  color: black;
}

</style>


