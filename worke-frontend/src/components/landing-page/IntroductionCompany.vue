<template>
  <div class="intro">
    <div class="only-mobile">
      <h1>{{ introdutionTitle }}</h1>
      <img src="../../assets/img/movimente-empresa.svg"/>
    </div>
    <div class="intro-infos">
      <h1 class="only-web">{{ introdutionTitle }}</h1>
      <img class="only-web" src="../../assets/img/movimente-empresa.svg"/>
      <label>{{ introdutionText }}</label>
      <div class="intro-infos_store">
        <h2>{{ introAvailable }}</h2>
      </div>
    </div>
    <div class="intro-img">
      <img src="../../assets/img/mobile-new-home.png" />
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
      font-weight: 500;
      color: @blue;
      letter-spacing: 0.1em;
      margin-bottom: -26px;
    }

    img {
      width: 100%;
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

  .intro-img {
    img {
      width: 100%;
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
  }

  @media (max-width: 768px) {
    margin-top: @height-header-mobile;
    padding: 0px @margin-mobile;

    &-infos {
      h1 {
        font-size: 28px;
      }
    }

    .intro-img {
      img {
        width: 100%;
      }
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

    .only-web {
      display: none;
    }

    .only-mobile {
      order: 1;
      display: flex;
      flex-direction: column;
      align-items: center;

      h1 {
        text-transform: uppercase;
        font-weight: 500;
        color: @blue;
        margin-bottom: -14px;
        letter-spacing: 0.1em;
        font-size: 22px;
      }

      img {
        width: 80%;
      }
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
    }
  }
}
</style>
