<template>
  <div class="about">
    <h1>{{ moreAboutSectionTitle }}</h1>
    <div class="about-group">
        <h2>{{ moreAboutTitle }}</h2>
        <div class="about-group_img">
            <img src="../../assets/img/mobileLanding2.png" />
        </div>
        <label>{{ moreAboutText }}</label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    moreAboutSectionTitle: String,
    moreAboutTitle: String,
    moreAboutText: String,
  }
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
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 70px;
        grid-template-areas: "title phone text";
        align-items: center;
        background-image: url("../../assets/img/backgroundPurple.png");
        background-repeat: no-repeat;
        background-position: left;
        background-size: contain;
        margin-bottom: 100px;

        h2 {
            grid-area: title;
            padding-left: @margin-desktop;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            font-weight: 900;
            font-size: 28px;
            color: @purple;
        }

        &_img {
            grid-area: phone;

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