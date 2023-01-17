<template>
  <div class="menu">
    <img src="../assets/img/menu-icon.svg" @click="openSideBar"/>
    <label @click="openSideBar">Menu</label>
  </div>
</template>

<script>

export default {
    name: 'Menu',
    methods: {
      openSideBar() {
        this.$emit("openSideBar");
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

    img {
        height: 20px;
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