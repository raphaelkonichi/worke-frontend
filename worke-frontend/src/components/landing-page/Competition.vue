<template>
  <div class="competition">
    <img class="only-mobile" src="../../assets/img/competição-title.svg"/>
    <h1 class="only-mobile">{{ competitionTitle }}</h1>
    <div class="competition-text">
        <img class="only-web" src="../../assets/img/competição-title.svg"/>
        <h1 class="only-web">{{ competitionTitle }}</h1>
        <p>{{ competitionText }}</p>
    </div>
    <div class="competition-img">
      <img src="../../assets/img/ranking-new.png" />
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
    background-image: url("../../assets/img/backgroundPink.png");
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;

    img {
      width: 60%;
    }

    .only-mobile {
      display: none;
    }

    &-text {
        display: flex;
        flex-direction: column;
        align-items: end;
        grid-area: text;
        padding-left: @margin-desktop;

        h1{
            text-transform: uppercase;
            font-weight: 500;
            font-size: 28px;
            color: @pink;
            letter-spacing: 0.1em;
            text-align: end;
            margin-top: -45px;
        }

        p {
            font-size: 16px;
            letter-spacing: 0.03em;
            color: @black;
            text-align: end;
            width: 65%;
        }

        img {
          width: 60%;
        }
    }

    &-img {
        grid-area: phone;

        img {
            width: 75%;
        }
    }

    @media (max-width: 900px) {
      grid-template-columns: 1fr 1fr;
      margin-top: 40px;

      &-img {
        img {
            width: 65%;
        }
      }
      &-text {
        h1 {
          margin-top: unset;
        }
        img {
          width: 95%;
        }
      } 
    }

    @media (max-width: 660px) {
      display: flex;
      flex-direction: column;
      grid-gap: unset;
      margin-top: 50px;
      background-image: url("../../assets/img/backgroundPink.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;

      .only-web {
        display: none;
      }

      .only-mobile {
        display: flex;
        text-transform: uppercase;
        font-weight: 500;
        font-size: 28px;
        color: @pink;
        letter-spacing: 0.1em;
        text-align: center;
      }

      &-text {
        order: 3;
        padding: 0 40px;
        align-items: center;

        h1 {
          display: none;
          margin-top: unset;
        }

        p {
          text-align: center;
        }

        img {
          width: 95%;
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