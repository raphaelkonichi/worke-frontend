<template>
    <div class="title">
      <h1>Salas</h1>
    </div>
  </template>
  
  <script>
  export default {
      name: "Title",
  }
  </script>
  
  <style lang="less" scoped>
  @import "../assets/variables.less";
  
  .title {
    margin-bottom: 30px;
      h1 {
        font-weight: 900;
        font-size: 24px;
        letter-spacing: 0.1em;
        color: @pink;
        text-transform: uppercase;
      }
  }
  
  </style>