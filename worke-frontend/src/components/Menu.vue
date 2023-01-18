<template>
  <div class="menu">
    <div :class="changeIcon(isOpenSideBar)" @click="openSideBar"></div>
    <label @click="openSideBar">Menu</label>
  </div>
</template>

<script>

export default {
    name: 'Menu',
    props: {
      isOpenSideBar: Boolean,
    },
    methods: {
      openSideBar() {
        this.$emit("openSideBar");
      },
      changeIcon(value) {
        return !value ? "menu-icon" : "close-menu-icon";
      },
    }
}
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.menu {
    background-color: @black;
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: @margin-desktop;
    position: fixed;
    top: @height-header-desktop;
    z-index: 4;

    .menu-icon {
      background: url("../assets/img/menu-icon.svg");
      background-repeat: no-repeat;
      background-position: center;
      height: 20px;
      width: 20px;
      transition: all 0.25s;
      transform: rotate(0);
      margin-right: 20px;
      cursor: pointer;
    }
    .close-menu-icon {
      background: url("../assets/img/close-white.svg");
      background-repeat: no-repeat;
      background-position: center;
      height: 20px;
      width: 20px;
      transition: all 0.25s;
      transform: rotate(90deg);
      margin-right: 20px;
      cursor: pointer;
    }

    label {
        font-size: 14px;
        color: @white;
        text-transform: uppercase;
        font-weight: bold;
        cursor: pointer;
        letter-spacing: 0.1em;
    }
  
    @media (max-width: 768px) {
      padding-left: @margin-mobile;
      top: @height-header-mobile;
    }
}
</style>