<template>
  <div class="about">
    <h1>saiba mais sobre o app</h1>
    <div class="about-group">
        <h2>entre em um grupo</h2>
        <div class="about-group_img">
            <img src="../../assets/img/mobileLanding2.png" />
        </div>
        <label>Entre em um grupo com seus amigos e compartilhe seu progresso.</label>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import "../../assets/variables.less";

.about {
    h1 {
        font-weight: 900;
        font-size: 28px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: @black;
        text-align: center;
        margin: 90px 0;
    }

    &-group {
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-template-areas: "title text";
        align-items: center;

        h2 {
            grid-area: title;
            position: absolute;
            padding-left: @margin-desktop;
            text-transform: uppercase;
            font-weight: 900;
            font-size: 28px;
            color: @purple;
        }

        &_img {
            grid-area: title;
            position: relative;

            img {
                width: 96%;
            }
        }

        label {
            grid-area: text;
            padding-right: @margin-desktop;
            font-size: 16px;
            letter-spacing: 0.03em;
            color: @black;
        }
    }
}
</style>