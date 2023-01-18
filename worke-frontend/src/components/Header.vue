<template>
  <div class="header">
    <img src="../assets/img/logoWorke.svg" />
    <div class="dropdown-menu">
      <p>empresa x</p>
      <img src="../assets/img/angle-down.svg"/>
    </div>
  </div>
</template>

<script>

export default {
  components: {
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

    p {
      font-weight: 900;
      font-size: 12px;
      text-align: center;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-right: 10px;
    }

    img {
      height: 12px;
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
