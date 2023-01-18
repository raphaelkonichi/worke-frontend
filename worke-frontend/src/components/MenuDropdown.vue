<template>
  <div class="menu-dropdown">
    <div class="menu-dropdown_item">
        <p class="title">perfil</p>
        <p class="subtitle">Aqui você pode acessar o perfil da empresa, alterar dados e senhas.</p>
    </div>
    <div class="menu-dropdown_logout">
        <p>Sair</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.menu-dropdown {
    height: auto;
    position: fixed;
    z-index: 3;
    background-color: white;
    border-radius: 0 0 16px 16px;
    box-shadow: 0px 30px 30px 7px #0000001a;
    right: @margin-desktop;

    &_item {
        cursor: pointer;
        padding: 25px;
        border-bottom: 1px solid @lightGray;
        .title {
            color: @blue;
            font-weight: 700;
            letter-spacing: 0.1em;
            text-transform: uppercase;
        }
    }

    &_logout {
        padding: 25px;
        cursor: pointer;

        p {
            font-weight: 700;
            line-height: 22px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
        }
    }

    @media (max-width: 768px) {
        right: unset;
        width: 100%;
        border-radius: unset;
        top: calc(@height-header-mobile ~'+' @height-menu-mobile);

        &_item {
            padding: 25px @margin-mobile;
        }

        &_logout {
            padding: 25px @margin-mobile;
        }
    }
}
</style>