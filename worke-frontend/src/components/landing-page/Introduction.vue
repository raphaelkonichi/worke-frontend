<template>
  <div class="intro">
    <h1 class="only-mobile">{{ introdutionTitle }}</h1>
    <div class="intro-infos">
      <h1 class="only-web">{{ introdutionTitle }}</h1>
      <label>{{ introdutionText }}</label>
      <div class="intro-infos_store">
        <h2>{{ introAvailable }}</h2>
        <!-- <div class="store-img">
          <img src="../../assets/img/app-store.png" />
          <img src="../../assets/img/google-play.png" />
        </div> -->
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
    introdutionText: String,
    introAvailable: String,
  }
};
</script>


<style lang="less" scoped>
@import "../../assets/variables.less";

.intro {
  margin-top: @height-header-desktop;
  display: grid;
  grid-template-areas: "text phone";
  align-items: center;
  padding: 0px @margin-desktop;
  background-image: url("../../assets/img/backgroundBlue.png");
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;

  .only-mobile {
    display: none;
  }

  &-infos {
    grid-area: text;
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
    display: flex;
    justify-content: center;
  }

  @media (max-width: 1024px) {
    &-infos {
      width: 470px;
    }
  }

  @media (max-width: 900px) {
    &-infos {
      width: 300px;
    }

    &-img {
      height: 90%;
    }
  }

  @media (max-width: 768px) {
    margin-top: 5px;
    padding: 0px @margin-mobile;

    &-infos {
      h1 {
        font-size: 28px;
      }
    }

    &-img {
      height: 80%;
      justify-content: end;
    }
  }

  @media (max-width: 660px) {
    margin-top: @height-header-mobile;
    padding: 50px @margin-mobile;
    background-image: url("../../assets/img/backgroundBlue.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;

    .only-mobile {
      order: 1;
      display: flex;
      font-size: 28px;
      text-transform: uppercase;
      font-weight: 900;
      color: @blue;
      letter-spacing: 0.1em;
      margin-bottom: 20px;
      text-align: center;
    }

    &-infos {
      order: 3;
      width: 100%;

      h1 {
        display: none;
      }
    }

    &-img {
      order: 2;

      img {
        height: 500px;
        margin-bottom: 40px;
      }
    }
  }
}
</style>
