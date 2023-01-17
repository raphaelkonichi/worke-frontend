<template>
  <div class="card-group">
    <div v-for="card in cards" :key="card.label" class="card">
      <h3>200</h3>
      <p>{{card.label}}</p>
    </div>
  </div>
</template>

<script>

export default {
    name: "CardGroup",
    components: {
    },
    data() {
      return {
        cards: [
          {
            label: 'Funcionários',
          },
          {
            label: 'Funcionários Ativos',
          },
          {
            label: 'Salas',
          }
        ]
      }
    }
}
</script>

<style lang="less" scoped>
@import "../assets/variables.less";
.card-group {
  display: flex;
  flex-direction: column;
  .card {
    background-color: @white;
    border-radius: 7px;
    padding: 30px;
    margin-bottom: 25px;

    h3 {
        font-weight: 900;
        font-size: 26px;
        text-align: center;
        letter-spacing: 0.1em;
    }

    p {
        font-weight: 400;
        font-size: 11px;
        text-align: center;
        letter-spacing: 0.1em;
        text-transform: uppercase;
    }

    &:nth-child(n+1) {
      h3 {
        color: @purple;
      }
    }

    &:nth-child(n+2) {
      h3 {
        color: @green;
      }
    }

    &:nth-child(n+3) {
      h3 {
        color: @blue;
      }
    }
  }
}
</style>