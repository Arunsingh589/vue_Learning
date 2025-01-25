<template>
    <div id="app">
      <div class="center-container">
        <h1 class="app-title">User Form and Table App</h1>
  
        <button @click="openForm" class="open-form-button" v-if="!showForm">
          Add User
        </button>
  
        <FormModal
          v-if="showForm"
          :editData="editData"
          @submitData="handleSubmit"
          @close="closeForm"
        />
  
        <div v-if="users.length > 0" class="table-container">
          <UserTable
            :users="paginatedUsers"
            :currentPage="currentPage"
            :totalPages="totalPages"
            @deleteUser="handleDelete"
            @editUser="handleEdit"
            @sortTable="sortTable"
            @changePage="changePage"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import FormModal from './FormModal.vue';
  import UserTable from './UserTable.vue';
  
  export default {
    data() {
      return {
        users: [],
        showForm: false,
        editData: null,
        currentPage: 1,
        rowsPerPage: 5,
        sortColumn: null,
        sortOrder: 'asc',
      };
    },
    computed: {
      totalPages() {
        return Math.ceil(this.users.length / this.rowsPerPage);
      },
      paginatedUsers() {
        const startIndex = (this.currentPage - 1) * this.rowsPerPage;
        const endIndex = startIndex + this.rowsPerPage;
        return this.users.slice(startIndex, endIndex);
      },
    },
    methods: {
      openForm() {
        this.showForm = true;
        this.editData = null;
      },
      closeForm() {
        this.showForm = false;
      },
      handleSubmit(data) {
        if (data.index !== undefined) {
          // Update existing user
          this.$set(this.users, data.index, data);
        } else {
          // Add new user
          this.users.push(data);
        }
        this.closeForm();
      },
      handleDelete(index) {
        this.users.splice(index, 1);
      },
      handleEdit(index) {
        this.editData = { ...this.users[index], index };
        this.openForm();
      },
      sortTable(column) {
        this.sortOrder =
          this.sortColumn === column && this.sortOrder === 'asc' ? 'desc' : 'asc';
        this.sortColumn = column;
        this.users.sort((a, b) => {
          const compareA = a[column];
          const compareB = b[column];
          if (this.sortOrder === 'asc') {
            return compareA > compareB ? 1 : -1;
          } else {
            return compareA < compareB ? 1 : -1;
          }
        });
      },
      changePage(page) {
        this.currentPage = page;
      },
    },
    components: {
      FormModal,
      UserTable,
    },
  };
  </script>
  
  <style scoped>
  #app {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font-family: 'Arial', sans-serif;
    background-color: #f4f7fc;
    padding: 20px;
    box-sizing: border-box;
  }
  
  .center-container {
    text-align: center;
    width: 100%;
    max-width: 800px;
    background-color: white;
    padding: 30px 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .app-title {
    font-size: 2rem;
    color: #333;
    margin-bottom: 20px;
    font-weight: bold;
  }
  
  .open-form-button {
    background-color: #4caf50;
    color: white;
    padding: 12px 18px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
  }
  
  .open-form-button:hover {
    background-color: #45a049;
  }
  
  .table-container {
    margin-top: 30px;
  }
  
  table {
    width: 100%; 
    border-collapse: collapse;
    margin: 0 auto;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  table th,
  table td {
    padding: 15px 12px;
    text-align: center;
    font-size: 16px;
    border: 1px solid #ddd;
  }
  
  table th {
    background-color: #4caf50;
    color: white;
    font-weight: bold;
  }
  
  table tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  table tr:nth-child(odd) {
    background-color: #ffffff;
  }
  
  table tr:hover {
    background-color: #f1f1f1;
  }
  
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  
  .pagination button {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 10px 15px;
    margin: 0 5px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s ease;
  }
  
  .pagination button:hover {
    background-color: #45a049;
  }
  </style>
  