<template>
  <div class="card-title">
    <h2>{{ titleCard }}</h2>
    <label>{{ labelCard }}</label>
  </div>
</template>

<script>
export default {
    name: 'CardTitle',
    props: {
        titleCard: String,
        labelCard: String,
    }
}
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.card-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        font-weight: 800;
        font-size: 22px;
        line-height: 150%;
        letter-spacing: 0.1em;
        text-transform: uppercase;
    }

    label {
        font-weight: 400;
        font-size: 14px;
        letter-spacing: 0.1em
    }
}
</style>