<script setup>
import { onMounted, ref } from 'vue';

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
const count = ref(0)
function increment() {
  count.value++;
}

onMounted(() => {
  console.log(`The initial value is ${count.value}`);

}) 
  


</script>

<template>
    <button @click="increment">
      Count: {{ count }}

    </button>

</template>

<style scoped>
p{
  color: black;
}
</style>


