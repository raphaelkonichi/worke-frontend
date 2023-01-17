<template>
  <div class="title">
    <h1>Dashboard</h1>
    <p>Ultima atualização: dd/mm/aaaa às hh:mm.</p>
  </div>
</template>

<script>
export default {
    name: "Title",
}
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.title {
  margin-bottom: 30px;
    h1 {
      font-weight: 900;
      font-size: 24px;
      letter-spacing: 0.1em;
      color: @blue;
      text-transform: uppercase;
    }

    p {
      font-size: 12px;
    }
}

</style>