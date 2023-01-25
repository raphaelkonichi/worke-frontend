<template>
  <div class="exercise">
    <h1 class="only-mobile">{{ exerciseTitle }}</h1>
    <div class="exercise-group">
      <div class="exercise-img">
        <img src="../../assets/img/mobileLanding4.png" />
      </div>
      <div class="exercise-infos">
        <h1 class="only-web">{{ exerciseTitle }}</h1>
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
      grid-gap: 70px;
      grid-template-areas: "phone text";
      align-items: center;
      background-image: url("../../assets/img/backgroundPink.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }

    &-infos {
        grid-area: text;
        padding-right: @margin-desktop;
        width: 450px;

        h1{
            text-transform: uppercase;
            font-weight: 900;
            font-size: 28px;
            color: @pink;
            letter-spacing: 0.1em;
        }

        label {
            font-size: 16px;
            letter-spacing: 0.03em;
            color: @black;
        }
    }

    &-img {
        grid-area: phone;
        display: flex;
        justify-content: end;

        img {
          width: 35%;
        }
    }

    @media (max-width: 900px) {
      &-infos {
        width: 100%;
        padding: 0 40px;
      }

      &-img {
        img {
          width: unset;
          padding-left: 40px;
        }
      }
    }

    @media (max-width: 660px) {
      &-group {
        display: flex;
        flex-direction: column;
        grid-gap: unset;
        background-image: url("../../assets/img/backgroundPink.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }
      .only-mobile {
        display: flex;
        text-transform: uppercase;
        font-weight: 900;
        font-size: 28px;
        color: @pink;
        letter-spacing: 0.1em;
        text-align: center;
        justify-content: center;
      }

      &-infos {
        text-align: center;

        h1 {
          display: none;
        }
      }

      &-img {
        img {
          width: unset;
          height: 500px;
          padding: 40px 0;
        }
      }
    }
}

</style>