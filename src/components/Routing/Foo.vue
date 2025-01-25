<template>
    <div>
      <h1>Dynamic Value: {{ id }}</h1>
    </div>
  </template>
  
  <script>
  export default {
    // The dynamic parameter will be passed as a prop
    props: ['id'],  
  };
  </script>
  