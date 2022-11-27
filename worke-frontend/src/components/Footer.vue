<template>
  <div class="footer">
    <div class="footer-info">
      <img src="../assets/img/logoGradient.svg" class="logo"/>
      <label>WORKE. 2022.</label>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.footer {
  background-image: url("../assets/img/footerLines.png");
  background-repeat: no-repeat;
  height: 265px;
  background-size: cover;
  position: relative;

  &-info {
    display: flex;
    flex-direction: column;
    padding-left: @margin-desktop;
    position: absolute;
    margin-top: 80px;

    .logo {
      width: 50px;
      margin-bottom: 10px;
    }
  }
  img {
      width: 100%;
  }
}

</style>