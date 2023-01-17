<template>
  <div class="exercise">
    <div class="space"></div>
    <div class="exercise-group">
      <div class="exercise-img">
        <img src="../../assets/img/mobileLanding4.png" />
      </div>
      <div class="exercise-infos">
        <h1>{{ exerciseTitle }}</h1>
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
    background-color: @white;

    .space {
      height: 50px;
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
}

</style>