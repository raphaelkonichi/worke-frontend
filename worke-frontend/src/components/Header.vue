<template>
  <div class="header">
    <img src="../assets/img/logoWorke.svg" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.header {
  display: flex;
  align-items: center;
  height: @height-menu-desktop;
  padding-right: @margin-desktop;
  padding-left: @margin-desktop;
  position: fixed;
  width: 100%;
  background-color: @white;
  z-index: 4;
  top: 0;

  img {
    height: 36px;
  }
}
</style>
