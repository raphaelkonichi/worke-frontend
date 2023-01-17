<template>
  <div class="title">
    <h1>{{ title }}</h1>
    <label>{{ subtitle }}</label>
  </div>
</template>

<script>
export default {
    name: 'ChartTitle',
    props: {
        title: String,
        subtitle: String,
    }
}
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.title {
    display: flex;
    justify-content: center;
    align-items: baseline;
    margin-bottom: 15px;

    h1 {
        font-weight: 800;
        font-size: 18px;
        line-height: 150%;
        letter-spacing: 0.1em;
        margin-right: 8px;
        text-transform: uppercase;
    }

    label {
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
        letter-spacing: 0.1em;
    }
}

</style>