<template>
    <div class="card">
      <CardTitle :titleCard="titleCard" :labelCard="labelCard"/>
      <CardList/>
    </div>
  </template>
  
  <script>
  import CardTitle from "../components/CardTitle.vue"; 
  import CardList from "../components/CardList.vue"; 
  
  export default {
    name: 'TopCard',
    components: {
      CardTitle,
      CardList,
    },
    data() {
      return {
        titleCard: 'ranking',
        labelCard: 'salas',
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
    // height: ~"calc(100vh - 288px)";
}

</style>