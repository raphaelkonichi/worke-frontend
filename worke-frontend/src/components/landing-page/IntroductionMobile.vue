<template>
  <div class="intro">
    <div class="intro-infos">
      <h1>o app para movimentar seu corpo</h1>
      <label>
        Exercite seu corpo, estabeleça uma rotina e 
        junte-se com seus amigos para competir de forma 
        saudável e inovadora. Movimente-se com worke!
      </label>
      <div class="intro-infos_store">
        <h2>Disponível em</h2>
        <div class="store-img">
          <img src="../../assets/img/app-store.png" />
          <img src="../../assets/img/google-play.png" />
        </div>
      </div>
    </div>
    <div class="intro-img">
      <img src="../../assets/img/mobileLanding1.png" />
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="less" scoped>
@import "../../assets/variables.less";

.intro {
  margin-top: @height-menu-desktop;
  display: flex;
  align-items: center;
  height: 550px;

  &-infos {
    padding-left: @margin-desktop;
    width: 570px;

    h1 {
      font-size: 32px;
      text-transform: uppercase;
      font-weight: 900;
      color: @blue;
      letter-spacing: 0.1em;
      margin-bottom: 20px;
    }

    label {
      font-size: 16px;
      letter-spacing: 0.03em;
      color: @black;
    }

    &_store {
      border: 2px solid @blue;
      padding: 20px;
      border-radius: 25px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 30px;

      h2 {
        font-size: 20px;
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: 0.1em;
        color: @blue;
      }

      .store-img {
        img {
          margin-left: 15px;
          width: 40px;
        }
      }
    }
  }
  &-img {
    position: absolute;
    top: 50px;
    z-index: 5;
    right: 0;

    img {
      height: 600px;
    }
  }
}
</style>
