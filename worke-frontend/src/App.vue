<template>
  <div id="app">
    <Header />
    <router-link to="/" />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<style lang="less">
@import "assets/variables.less";
* {
  border: 0;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  cursor: pointer;
}
ul li {
  list-style: none;
}
body {
  font-family: "Nunito", sans-serif;
  font-size: 14px;
  color: @black;
}
input,
textarea,
select {
  font-family: "Nunito", sans-serif;
}
button {
  font-family: "Nunito", sans-serif;
}
input:focus,
select:focus {
  outline: none;
}
</style>
