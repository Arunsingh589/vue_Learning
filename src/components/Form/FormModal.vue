<template>
  <div class="modal">
    <div class="modal-content">
      <h2>{{ editData ? "Edit User" : "Add User" }}</h2>
      <form @submit.prevent="submitForm">
        <label>Email:</label>
        <input type="email" v-model="formData.email" required />

        <label>Name:</label>
        <input type="text" v-model="formData.name" required />

        <label>Date of Birth:</label>
        <input type="date" v-model="formData.dob" required />

        <label>Password:</label>
        <input type="password" v-model="formData.password" required />

        <label>Confirm Password:</label>
        <input type="password" v-model="formData.confirmPassword" required />

        <label>
          <input type="checkbox" v-model="formData.terms" required />
          Accept Terms and Conditions
        </label>

        <button type="submit">Submit</button>
        <button type="button" @click="$emit('close')">Close</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ['editData'],
  data() {
    return {
      formData: {
        email: '',
        name: '',
        dob: '',
        password: '',
        confirmPassword: '',
        terms: false,
        index: undefined,
      },
    };
  },
  mounted() {
    if (this.editData) {
      this.formData = { ...this.editData };
    }
  },
  methods: {
    submitForm() {
      if (this.formData.password !== this.formData.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      this.$emit('submitData', this.formData);
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 10px;
}

button {
  margin-top: 20px;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
