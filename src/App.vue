<script >
// import HelloWorld from './components/HelloWorld.vue';
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
    SmallForm
// HelloWorld

  }
}
// import { onMounted, ref } from 'vue';

// Options API
// export default {
//   data() {
//     return {
//     count: 0
//     }
//   },
//   methods: {
//     increment(){
//       this.count++
//     }
//   },
//   mounted(){
//     console.log(`The initial count is ${this.count}`);
    
//   }

// }

// Composition API
// const count = ref(0)
// function increment() {
  // count.value++;
// }

// onMounted(() => {
  // console.log(`The initial value is ${count.value}`);

// }) 
  


</script>

<template>
    <!-- <button @click="increment">
      Count: {{ count }}

    </button> -->
<!-- <Test /> -->
<!-- <OneCheckBoxRed /> -->
 <SmallForm />
<!-- <HelloWorld /> -->
</template>

<style scoped>
p{
  color: black;
}
</style>


