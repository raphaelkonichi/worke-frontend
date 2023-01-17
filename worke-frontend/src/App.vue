<template>
  <div id="app">
    <Header v-if="$route.meta.header !== 0"/>
    <Menu @openSideBar="openSideBar" v-if="appearMenu"/>
    <transition name="slide">
      <SideBar v-if="isOpenSideBar"/>
    </transition>
    <router-link to="/"/>
    <router-view @hasMenu="hasMenu"/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Menu from "./components/Menu.vue";
import SideBar from "./components/SideBar.vue";

export default {
  components: {
    Header,
    Menu,
    SideBar
  },
  data() {
    return {
      isOpenSideBar: false,
      appearMenu: false,
    }
  },
  methods: {
    openSideBar() {
      return (this.isOpenSideBar = !this.isOpenSideBar);
    },
    hasMenu() {
      return (this.appearMenu = !this.isOpenSideBar);
    }
  }
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
  background-color: @lightGray;
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
.slide-enter-active {
  transition: all 0.3s ease-in-out;
}
.slide-leave-active {
  transition: all 0.3s ease-in-out;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(-360px);
  opacity: 10;
}
</style>
