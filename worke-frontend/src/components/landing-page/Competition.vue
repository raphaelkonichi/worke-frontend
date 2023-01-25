<template>
  <div class="competition">
    <h1 class="only-mobile">{{ competitionTitle }}</h1>
    <div class="competition-text">
        <h1 class="only-web">{{ competitionTitle }}</h1>
        <p>{{ competitionText }}</p>
    </div>
    <div class="competition-img">
      <img src="../../assets/img/mobileLanding3.png" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    competitionTitle: String,
    competitionText: String
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/variables.less";

.competition {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 70px;
    grid-template-areas: "text phone";
    align-items: center;
    background-image: url("../../assets/img/backgroundGreen.png");
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;

    .only-mobile {
      display: none;
    }

    &-text {
        grid-area: text;
        padding-left: @margin-desktop;

        h1{
            text-transform: uppercase;
            font-weight: 900;
            font-size: 28px;
            color: @green;
            letter-spacing: 0.1em;
            text-align: end;
        }

        p {
            font-size: 16px;
            letter-spacing: 0.03em;
            color: @black;
            text-align: end;
        }
    }

    &-img {
        grid-area: phone;

        img {
            width: 50%;
        }
    }

    @media (max-width: 900px) {
      grid-template-columns: 1fr 1fr;
      margin-top: 40px;

      &-img {
        img {
            width: unset;
        }
    }
    }

    @media (max-width: 660px) {
      display: flex;
      flex-direction: column;
      grid-gap: unset;
      margin-top: 50px;
      background-image: url("../../assets/img/backgroundGreen.png");
      background-repeat: no-repeat;
      background-position: right;
      background-size: cover;

      .only-mobile {
        display: flex;
        text-transform: uppercase;
        font-weight: 900;
        font-size: 28px;
        color: @green;
        letter-spacing: 0.1em;
        text-align: center;
      }

      &-text {
        order: 3;
        padding: 0 40px;

        h1 {
          display: none;
        }

        p {
          text-align: center;
        }
      }

      &-img {
        order: 2;

        img {
          width: unset;
          height: 500px;
          padding: 40px 0;
        }
      }
    }
}
</style>