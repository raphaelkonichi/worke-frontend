<template>
  <div class="header">
    <img src="../assets/img/logoWorke.svg" />
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

  img {
    height: 36px;
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
