<template>
  <div class="group-cards">
    <div class="card" @click="openInfo">
        <i class="card-icon fa-solid fa-scale-balanced"></i>
        <label>Jurídico</label>
    </div>
    <div class="card" @click="openInfo">
        <i class="card-icon fa-solid fa-scale-balanced"></i>
        <label>Jurídico</label>
    </div>  
    <div class="card" @click="openInfo">
        <i class="card-icon fa-solid fa-scale-balanced"></i>
        <label>Jurídico</label>
    </div>  
    <div class="card" @click="openInfo">
        <i class="card-icon fa-solid fa-scale-balanced"></i>
        <label>Jurídico</label>
    </div>  
    <div class="card" @click="openInfo">
        <i class="card-icon fa-solid fa-scale-balanced"></i>
        <label>Jurídico</label>
    </div>     
  </div>
</template>

<script>
export default {
    methods: {
        openInfo() {
            this.$emit("openInfo")
        }
    }
}
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.group-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    .card {
        height: 100px;
        background-color: @white;
        border-radius: 7px;
        justify-content: center;
        align-items: center;
        padding: 35px 45px;
        cursor: pointer;

        &-icon {
            font-size: 20px;
            margin-right: 10px;
            cursor: pointer;
        }

        label {
            font-weight: 900;
            text-align: center;
            letter-spacing: 2px;
            text-transform: uppercase;
            cursor: pointer;
        }

        &:nth-child(4n + 1) .card-icon, &:nth-child(4n+1) label{
            color: @blue;
        }

        &:nth-child(4n + 2) .card-icon, &:nth-child(4n+2) label{
            color: @pink;
        }

        &:nth-child(4n + 3) .card-icon, &:nth-child(4n+3) label{
            color: @green;
        }

        &:nth-child(4n + 4) .card-icon, &:nth-child(4n+4) label{
            color: @purple;
        }
    }
}
</style>