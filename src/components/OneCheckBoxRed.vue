<script>
export default {

        data: function() {
            return {
            name: "hello manish",
            isRed: false,
            colors: ['red','yellow', 'green', 'black'],
            color_option: {
                color: "red"
            }
        }
       
    },

    methods: {
        red() {
            console.log(this.isRed)
        }
    }
}
</script>
<template>
    <div :class="{red: isRed}">
        <div v-bind:style="{color: color_option.color}">
            {{ name }} Testing

        </div>

        <br>
        <br>
        <input type="text" v-model="name">
        <select v-model="color_option">
            <!-- <option v-bind:value="{color: 'red'}">red</option>
            <option v-bind:value="{color: 'yellow'}">yellow</option>
            <option v-bind:value="{color: 'orange'}">orange</option>
            <option v-bind:value="{color: 'black'}">black</option> -->
            <option v-for="(color, index) in colors" v-bind:key="index" v-bind:value="{color: color}">{{ color }}</option>

        </select>
        <input type="checkbox" v-model="isRed" :checked="isRed" @click="red"> 
    </div>
</template>


<style scoped>
   .red{
    color: red;
   }
</style>