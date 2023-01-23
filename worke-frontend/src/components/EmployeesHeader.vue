<template>
  <div class="employees-header">
    <div class="header">
        <h1>Funcionários</h1>
        <button class="header-new" @click="openEmployeeInfo">Novo funcionário</button>
        <button class="header-upload">Importar .csv</button>
    </div>
    <div class="search">
        <div class="search-icon" @click="openSearch()">
            <i class="fa-solid fa-search"></i>
        </div>
        <transition name="slide-fade" mode="out-in">
            <input type="text" v-if="isSearch"/>
        </transition>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            isSearch: false,
        }
    },  
    methods: {
        openSearch() {
            console.log('indo')
            return (this.isSearch = !this.isSearch);
        },
        openEmployeeInfo() {
            this.$emit("openEmployeeInfo");
        }
    }
}
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.employees-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    .header {
        display: flex;
        align-items: center;
        gap: 20px;

        h1 {
            font-weight: 900;
            font-size: 24px;
            letter-spacing: 0.1em;
            color: @purple;
            text-transform: uppercase;
        }

        &-new {
            padding: 10px;
            font-size: 12px;
            text-align: center;
            letter-spacing: 0.1em;
            background-color: @purple;
            color: @white;
            text-transform: uppercase;
            border-radius: 7px;
            cursor: pointer;
            min-width: 215px;
        }

        &-upload {
            padding: 10px;
            font-size: 12px;
            text-align: center;
            letter-spacing: 2px;
            border: 1px solid @blue;
            background-color: transparent;
            color: @blue;
            text-transform: uppercase;
            border-radius: 7px;
            cursor: pointer;
            min-width: 215px;

            &:hover {
                background-color: @blue;
                color: @white;
            }
        }
    }

    .search {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        cursor: pointer;

        &-icon {
            background-color: @black;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px;
            cursor: pointer;

            i {
                color: @white;
                cursor: pointer;
            }
        }

        input {
            padding: 10px;
            background-color: @white;
            border-radius: 7px;
            margin-right: 10px;
        }
    }

    .slide-fade-enter-active {
      transition: all 0.5s;
    }

    .slide-fade-leave-active {
      transition: all 0.5s ease;
    } 

    .slide-fade-enter,
    .slide-fade-leave-to {
      transform: translateX(10px);
      opacity: 0;
    }
}

</style>