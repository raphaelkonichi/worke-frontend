<template>
  <div class="header">
    <img src="../assets/img/logoWorke.svg" />
    <div class="dropdown-menu" v-if="this.appearMenu" @click="openMenu">
      <p>empresa x</p>
      <div :class="changeArrowIcon(isOpenMenu)"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    appearMenu: Boolean,
    isOpenMenu: Boolean,
  },
  methods: {
    openMenu() {
      this.$emit("openMenu");
    },
    changeArrowIcon(value) {
      return !value ? "arrow-start" : "arrow";
    },
  }
};
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.header {
  display: flex;
  align-items: center;
  height: @height-header-desktop;
  padding-right: @margin-desktop;
  padding-left: @margin-desktop;
  position: fixed;
  width: 100%;
  background-color: @white;
  z-index: 4;
  top: 0;
  justify-content: space-between;

  img {
    height: 36px;
  }

  .dropdown-menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;

    p {
      font-weight: 900;
      font-size: 12px;
      text-align: center;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-right: 10px;
    }

    .arrow-start {
      background-image: url("../assets/img/angle-down.svg");
      background-repeat: no-repeat;
      background-position: center;
      height: 24px;
      width: 24px;
      transition: all 0.25s;
      transform: rotate(0);
    }
    .arrow {
      background-image: url("../assets/img/angle-down.svg");
      background-repeat: no-repeat;
      background-position: center;
      height: 24px;
      width: 24px;
      transition: all 0.25s;
      transform: rotate(180deg);
    }
  }

  @media (max-width: 768px) {
    height: @height-header-mobile;
    padding-right: @margin-mobile;
    padding-left: @margin-mobile;

    img {
      height: 28px;
    }
  }
}
</style>
