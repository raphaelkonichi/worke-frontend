<template>
  <div class="add-button">
    <div class="button" @click="openModal">
        <img src="../assets/img/plus.svg"/>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        openModal() {
            this.$emit("openModal");
        }
    }
}
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.add-button {
    position: absolute;
    bottom: 40px;
    right: @margin-desktop;

    .button {
        padding: 20px;
        background-color: @pink;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        img {
            height: 20px;
            cursor: pointer;
        }
    }
}

</style>