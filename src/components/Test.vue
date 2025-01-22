<script>
export default {

        data: function() {
            return {
            name: "hello manish",
            date: false
        }
       
    },


    // Life Cycle Method
    created: function(){
        console.log("Created");
        this.date = new Date();
            
    },

    mounted: function() {
          console.log("Mounted");
        this.date = new Date();

    },

    updated: function(){
        console.log("Updated");
        // this.date = new Date();

    },

    unmounted: function() {
        console.log("Destoryed");
        this.date = new Date();

    },


    methods: {
        clear() {
              this.name = ""
        },
        caps() {
             this.name = this.name.toUpperCase()
        }
    }
}
</script>
<template>
    <div id="testing">
        {{ name }} Testing

        <br>
        <p>{{ date }}</p>
        <br>
        <input type="text" v-model="name">
        <button @click="clear()">Clear</button>
        <button @click="caps()">Caps</button>
    </div>
</template>
<style>
</style>