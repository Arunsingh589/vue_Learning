<script>
export default {
  data: function() {
    return {
      name: "", 
      data: [], 
      editIndex: null
    };
  },

  methods: {
    submit: function(e) {
      if (e.keyCode === 13) {
        if (this.editIndex !== null) {
          this.data[this.editIndex] = this.name; 
        } else {
          this.data.push(this.name);
        }
        this.name = "";
        this.editIndex = null; 
      }
    },
  }
};
</script>

<template>
  <div>
    <form v-on:submit.prevent="submit">
      <!-- <input
        type="text"
        v-model="name"
        v-on:keypress="submit"
        placeholder="Enter your Text"
      /> -->
    </form>

    <!-- <ul>
      <li v-for="(item, index) in data" :key="index">
        {{ item }}
      </li>
    </ul> -->
  </div>
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
</style>
