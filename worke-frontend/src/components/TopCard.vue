<template>
  <div class="card">
    <CardTitle :titleCard="titleCard" :labelCard="labelCard"/>
    <ColorCardList/>
  </div>
</template>

<script>
import CardTitle from "../components/CardTitle.vue"; 
import ColorCardList from "../components/TopList.vue"; 

export default {
  name: 'TopCard',
  components: {
    CardTitle,
    ColorCardList,
  },
  data() {
    return {
      titleCard: 'top 15',
      labelCard: 'funcionários',
    }
  }
}
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.card {
    background: @white;
    border-radius: 7px;
    padding: 25px;
    height: ~"calc(100vh - 288px)";
}

</style>