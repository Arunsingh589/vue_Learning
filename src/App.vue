<script >
// import HelloWorld from './components/HelloWorld.vue';
import BaseButton from './components/Base-Button.vue';
import List from './components/BreakDownForm/List.vue';
import Control from './components/CountDownTimer/Control.vue';
import Timer from './components/CountDownTimer/Timer.vue';
import CustomerDetailForm from './components/CustomerDetailForm.vue';
// import CustomerDetailForm from './components/CustomerDetailForm.vue';
import InputFiledLifeCycleHook from './components/InputFiled&LifeCycleHook.vue';
import OneCheckBoxRed from './components/OneCheckBoxRed.vue';
import SmallForm from './components/SmallForm.vue';
import Test from './components/Test.vue';

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
    BaseButton
  },
  data() {
    return {
      name: "John Doe", 
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
    

<!-- <Test /> -->
<!-- <List /> -->
 <!-- <Control /> -->
  <Timer />
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


