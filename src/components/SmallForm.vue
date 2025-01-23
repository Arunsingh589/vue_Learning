<script>
export default {

        data: function() {
            return {
            name: "hello manish",
            data:[],
            name:"",
            editIndex: null
            
        }
    },

    methods: {
        submit: function (e) {
      if (e.keyCode === 13) {
        if (this.editIndex !== null) {
          this.data.splice(this.editIndex, 1, this.name);
          this.editIndex = null;
        } else {
          this.data.push(this.name); 
        }
        this.name = ""; 
      }
    },
        deleteItem: function(index) {
            this.data.splice(index, 1)
            console.log(this.data)
        },

     editItem: function (index) {
      this.name = this.data[index]; 
      this.editIndex = index; 
    },
 }
}
</script>

<template>
              <p>Type Something...</p>
              <br>
              <br>
              <i>Press Enter</i>
              <br>

        <form v-on:submit.prevent>
        <input type="text" v-on:keypress="submit" v-model="name" placeholder="Enter your Text">
        </form>
               <br>
               <br>
        <ul>
            <li v-for="(item, index) in data" v-bind:key="index">
                <span>{{ item }}</span>
                <div class="button">
                    <button @click="editItem(index)">Edit</button>
                    <button  @click="deleteItem(index)">delete</button>

                </div>
        </li>
        </ul>
       
</template>
<style scoped>

li {
  display: flex;
  justify-content: space-between; 
  align-items: center;
  border: 1px solid;
  padding: 5px;
  width: 400px;
  margin-bottom: 5px;
}
input {
  width: 450px;
  height: 30px;
}
.buttons {
  display: flex;
  gap: 10px; 
}
button {
  padding: 5px 10px;
  cursor: pointer;
}
</style>


