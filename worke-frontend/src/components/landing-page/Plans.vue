<template>
  <div class="plans">
    <div class="plans_content">
        <h1>Já possui um plano?</h1>
        <label><router-link to="/Login"> <a>Clique aqui</a> </router-link> para acessar o Login!</label>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import "../../assets/variables.less";

.plans {
    padding: 0px @margin-mobile;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;

    &_content {
        border: 2px solid @blue;
        padding: 60px;
        border-radius: 16px;
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
            margin-bottom: 10px;
        }

        label {
            font-weight: 500;
            font-size: 16px;
            text-align: center;
            letter-spacing: 0.03em;

            a {
                color: @blue;
                font-weight: 700;
                cursor: pointer;
            }
        }
    }
}

</style>