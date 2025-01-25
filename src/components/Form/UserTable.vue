<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Email</th>
          <th>Name</th>
          <th @click="$emit('sortTable', 'dob')">Date of Birth</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <td>{{ user.email }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.dob }}</td>
          <td>
            <button @click="$emit('editUser', index)">Edit</button>
            <button @click="$emit('deleteUser', index)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="pagination">
      <button
        v-for="page in totalPages"
        :key="page"
        :class="{ active: page === currentPage }"
        @click="$emit('changePage', page)"
      >
        {{ page }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['users', 'currentPage', 'totalPages'],
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  cursor: pointer;
}

.pagination {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}

button {
  margin: 5px;
  padding: 5px 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

button.active {
  background-color: #4caf50;
  color: white;
}
</style>
