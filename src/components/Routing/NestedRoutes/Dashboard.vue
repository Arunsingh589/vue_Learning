<template>
    <div>
      <h1>Dashboard</h1>
      <nav>
        <ul>
          <li><router-link to="/dashboard/profile">Profile</router-link></li>
          <li><router-link to="/dashboard/settings">Settings</router-link></li>
        </ul>
      </nav>
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Dashboard',
  };
  </script>
  