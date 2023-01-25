<template>
  <div class="is-company">
    <h1>É UMA EMPRESA?</h1>
    <label>CONHEÇA NOSSOS SERVIÇOS PARA SUA EMPRESA</label>
    <router-link to="/Empresas">
        <button>Entre aqui!</button>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import "../../assets/variables.less";

.is-company {
    background-color: @lightGray;
    padding: 100px @margin-mobile;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        font-weight: 900;
        font-size: 28px;
        text-align: center;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        margin-bottom: 20px;
    }

    label {
        font-weight: 500;
        font-size: 16px;
        text-align: center;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        margin-bottom: 20px;
    }

    button {
        background-color: @black;
        padding: 18px 120px;
        border-radius: 7px;
        font-weight: 900;
        text-align: center;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: @white;
        cursor: pointer;
    }
}

</style>