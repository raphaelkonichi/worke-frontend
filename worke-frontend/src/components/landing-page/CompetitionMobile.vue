<template>
  <div class="competition">
    <div class="competition-text">

    </div>
    <div class="competition-img">
      <img src="../../assets/img/mobileLanding3.png" />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import "../../assets/variables.less";

.competition {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-areas: "text phone";

    &-text {
        grid-area: text;
    }

    &-img {
        grid-area: phone;

        img {
            width: 100%;
        }
    }
}
</style>