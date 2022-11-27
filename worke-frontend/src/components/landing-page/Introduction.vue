<template>
  <div class="intro">
    <div class="intro-infos">
      <h1>{{ introdutionTitle }}</h1>
      <label>{{ introdutionText }}</label>
      <div class="intro-infos_store">
        <h2>Disponível em</h2>
        <div class="store-img">
          <img src="../../assets/img/app-store.png" />
          <img src="../../assets/img/google-play.png" />
        </div>
      </div>
    </div>
    <div class="intro-img">
      <img src="../../assets/img/mobileLanding1phone.png" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Introduction",
  props: {
    introdutionTitle: String,
    introdutionText: String
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/variables.less";

.intro {
  margin-top: @height-menu-desktop;
  display: grid;
  grid-template-areas: "text phone";
  align-items: center;
  height: 550px;
  background-image: url("../../assets/img/backgroundBlue.png");
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;

  &-infos {
    grid-area: text;
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
      background: @white;
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
    grid-area: phone;
    top: 50px;

    img {
      width: 55%;
    }
  }
}
</style>
