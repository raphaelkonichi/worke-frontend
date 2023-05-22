<template>
  <div class="exercise">
    <h1 class="only-mobile">{{ exerciseTitle }}</h1>
    <img class="only-mobile" src="../../assets/img/exercise-title.svg"/>
    <div class="exercise-group">
      <div class="exercise-img">
        <img src="../../assets/img/exercise-new.png" />
      </div>
      <div class="exercise-infos">
        <h1 class="only-web">{{ exerciseTitle }}</h1>
        <img class="only-web" src="../../assets/img/exercise-title.svg"/>
        <label>{{ exerciseText }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Exercise',
  props: {
    exerciseTitle: String,
    exerciseText: String,
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/variables.less";

.exercise {
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    .only-mobile {
      display: none;
    }

    &-group {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 30px;
      grid-template-areas: "phone text";
      align-items: center;
      background-image: url("../../assets/img/backgroundGreen.png");
      background-repeat: no-repeat;
      background-position: right;
      background-size: contain;
    }

    &-infos {
        grid-area: text;
        padding-right: @margin-desktop;
        width: 450px;

        h1{
            text-transform: uppercase;
            font-weight: 500;
            font-size: 28px;
            color: @green;
            letter-spacing: 0.1em;
        }

        label {
            font-size: 16px;
            letter-spacing: 0.03em;
            color: @black;
        }

        img {
          margin-top: -35px;
          margin-bottom: 20px;
        }
    }

    &-img {
        grid-area: phone;
        display: flex;
        justify-content: end;

        img {
          width: 80%;
        }
    }

    @media (max-width: 900px) {
      &-infos {
        width: 100%;
        padding: 0 40px 0 0;
      }

      &-img {
        img {
          width: 100%;
          padding-left: 40px;
        }
      }
    }

    @media (max-width: 660px) {
      align-items: center;

      &-group {
        display: flex;
        flex-direction: column;
        grid-gap: unset;
        background-image: url("../../assets/img/backgroundGreen.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }

      .only-web {
        display: none;
      }

      img {
        width: 70%;
      }
      .only-mobile {
        display: flex;
        text-transform: uppercase;
        font-weight: 500;
        font-size: 28px;
        color: @green;
        letter-spacing: 0.1em;
        text-align: center;
        justify-content: center;
      }

      &-infos {
        text-align: center;
        padding: 0 40px;

        h1 {
          display: none;
        }
      }

      &-img {
        justify-content: center;

        img {
          width: 70%;
          padding: 40px 0;
        }
      }
    }
}

</style>