<template>
  <div class="dashboard">
    <Title />
    <div class="dashboard-group">
      <CardGroup class="dashboard-group_small" />
      <CardCharts class="dashboard-group_pieChart" />
      <BarCardCharts class="dahsboard-group_barChart" />
      <RankingCard class="dashboard-group_ranking" />
      <TopCard class="dashboard-group_top" />
    </div>
  </div>
</template>

<script>
import Title from "../components/DashboardTitle.vue";
import CardGroup from "../components/InfoCards.vue";
import TopCard from "../components/TopCard.vue";
import RankingCard from "../components/RankingCard.vue";
import CardCharts from "../components/PieCardCharts.vue";
import BarCardCharts from "../components/BarCardCharts.vue";

export default {
  name: "Dashboard",
  components: {
    Title,
    CardGroup,
    RankingCard,
    TopCard,
    CardCharts,
    BarCardCharts,
  },
  data() {
    return {};
  },
  created() {
    this.hasMenu();
  },
  computed: {},
  methods: {
    hasMenu() {
      this.$emit("hasMenu");
    },
  },
};
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.dashboard {
  margin-top: 150px;
  padding: 30px @margin-desktop;

  &-group {
    display: grid;
    grid-template-columns: 3fr 2fr 2fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 25px;
    grid-template-areas:
      "pie ranking rankingTop cards"
      "bar ranking rankingTop cards";

    &_pieChart {
      grid-area: pie;
    }

    &_barChart {
      grid-area: bar;
    }

    &_ranking {
      grid-area: ranking;
    }

    &_top {
      grid-area: rankingTop;
    }

    &_small {
      grid-area: cards;
    }
  }

  @media (max-width: 1470px) {
    &-group {
      display: grid;
      grid-template-columns: 3fr 2fr 2fr;
      grid-template-rows: 1fr 3fr 3fr;
      grid-gap: 25px;
      grid-template-areas:
        "cards ranking rankingTop"
        "pie ranking rankingTop"
        "bar ranking rankingTop";
      height: ~"calc(100vh - 288px)";
    }
  }

  @media (max-width: 1360px) {
    &-group {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 2fr 3fr;
      grid-gap: 25px;
      grid-template-areas:
        "cards cards"
        "pie bar"
        "ranking rankingTop";
    }
  }

  @media (max-width: 768px) {
    padding: 0 @margin-mobile 40px;

    &-group {
      display: flex;
      flex-direction: column;
    }
  }

  @media (max-width: 525px) {
    padding: 0 @margin-mobile 40px;

    &-group {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
