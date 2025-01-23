<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      address: "",
      customers: [], 
    };
  },
  methods: {
    addCustomer() {
      if (this.firstName && this.lastName && this.address) {
        this.customers.push({
          firstName: this.firstName,
          lastName: this.lastName,
          address: this.address,
          checked: false,
        });
        this.resetForm();
      }
    },
    deleteCustomer(index) {
      this.customers.splice(index, 1);
    },
    toggleChecked(index) {
      this.customers[index].checked = !this.customers[index].checked;
    },
    resetForm() {
      this.firstName = "";
      this.lastName = "";
      this.address = "";
    },
  },
};
</script>

<template>
  <div>
    <h1>Customer Details</h1>
    <form @submit.prevent="addCustomer" style="display: flex; gap: 10px; align-items: center;">
     <label>First Name</label>
      <input
        type="text"
        v-model="firstName"
        placeholder="Enter First Name"
        required
      />
     <label>Last Name</label><input
        type="text"
        v-model="lastName"
        placeholder="Enter Last Name"
        required
      />
     <label>Address</label> <input
        type="text"
        v-model="address"
        placeholder="Enter Address"
        required
      />
      <button type="submit">Add</button>
    </form>

    <table border="1" cellpadding="10" cellspacing="0" style="margin-top: 20px; width: 100%;">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Address</th>
          <!-- <th>Actions</th> -->
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(customer, index) in customers"
          :key="index"
          :style="{ color: customer.checked ? 'red' : 'black' }"
        >
          <td>{{ customer.firstName }}</td>
          <td>{{ customer.lastName }}</td>
          <td>{{ customer.address }}</td>
          <td>
            <button @click="deleteCustomer(index)">X</button>
            <button @click="toggleChecked(index)">Check</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
h1{
  margin-bottom: 20px;
  font: 900;
}
form {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

label {
  font-size: 14px;
  /* justify-content: center;
  align-items: center;
  display: flex; */
  font-weight: bold;
}

input {
  padding: 5px 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 5px 15px;
  font-size: 14px;
  color: white;
  background-color: #4caf50;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #45a049;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th,
td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
  font-size: 14px;
  font-weight: bold;
}

tr:nth-child(even) {
  background-color: yellow;
}

tr:nth-child(odd) {
  background-color: rgb(184, 184, 41);
}

tr:hover {
  background-color: #e8f5e9;
}

td button {
  background-color: #ff4d4d;
  color: white;
  /* gap: 20px; */
  border: none;
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 4px;
  cursor: pointer;
}

td button:hover {
  background-color: #e60000;
}
</style>
