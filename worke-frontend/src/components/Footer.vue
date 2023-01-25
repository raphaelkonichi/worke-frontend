<template>
  <div class="footer">
    <div class="footer-info">
      <img src="../assets/img/logoGradient.svg" class="logo"/>
      <label>WORKE. O uso da gamificação e de redes neurais para sua saúde e bem-estar. 2023.</label>
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
  background-color: @white;

  &-info {
    display: flex;
    flex-direction: column;
    padding-left: @margin-desktop;
    position: absolute;
    margin-top: 80px;
    max-width: 600px;

    .logo {
      width: 50px;
      margin-bottom: 10px;
    }
  }

  img {
      width: 100%;
  }

  @media (max-width: 768px) {
    &-info {
      padding: 0 @margin-mobile;
    }
  }
}

</style>