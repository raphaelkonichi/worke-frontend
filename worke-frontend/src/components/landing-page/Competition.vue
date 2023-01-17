<template>
  <div class="competition">
    <div class="competition-text">
        <h1>{{ competitionTitle }}</h1>
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
    background-color: @white;

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
}
</style>