<template>
  <div class="participants">
    <div class="participants-content">
        <div class="participants-group_header">
            <h1>Participantes</h1>
            <div class="search">
                <div class="search-icon" @click="openSearch()">
                    <i class="fa-solid fa-search"></i>
                </div>
                <transition name="slide-fade" mode="out-in">
                    <input type="text" v-if="isSearch"/>
                </transition>
            </div>
        </div>
        <div class="participants-group">
            <div class="participants-group_item">
                <img src="../assets/img/photo-girl.jpg"/>
                <label>Ana</label>
            </div>
            <div class="participants-group_item">
                <img src="../assets/img/photo-girl.jpg"/>
                <label>Ana</label>
            </div>
        </div>
    </div>
    <div class="participants-info">
        <div class="participants-info_card green">
            <div class="number">25</div>
            <label>Participantes</label>
        </div>
        <div class="participants-info_card blue">
            <div class="number">20</div>
            <label>Participantes ativos</label>
        </div>
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
        }
    }
}
</script>

<style lang="less" scoped>
@import "../assets/variables.less"; 

.participants {
    display: grid;
    grid-gap: 40px;
    grid-template-columns: 2fr 1fr;

    &-group {
        border: 1px solid @gray;
        border-radius: 7px;
        height: fit-content;

        &_header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;

            h1 {
                font-weight: 800;
                font-size: 20px;
                text-align: center;
                letter-spacing: 0.1em;
                text-transform: uppercase;
            }

            .search {
                display: flex;
                flex-direction: row-reverse;
                align-items: center;
                cursor: pointer;

                &-icon {
                    cursor: pointer;
                    display: flex;
                    background-color: @lightGray;
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    justify-content: center;
                    align-items: center;

                    i {
                        color: @gray;
                    }
                }

                input {
                    padding: 10px;
                    background-color: @lightGray;
                    border-radius: 7px;
                    margin-right: 10px;
                }
            }
        }

        &_item {
            display: flex;
            align-items: center;
            border-bottom: 1px solid @gray;
            padding: 15px;

            img {
                margin-right: 10px;
            }

            label {
                font-weight: 600;
                letter-spacing: 0.05em;
            }

            &:last-child {
                border-bottom: unset;
            }
        }
    }

    &-info {
        &_card {
            display: flex;
            padding: 20px;
            border-radius: 7px;
            align-items: center;
            margin-bottom: 20px;
            .number{
                border-radius: 50%;
                padding: 7px 9px;
                font-weight: 800;
                font-size: 18px;
                line-height: 30px;
                text-align: center;
                letter-spacing: 0.1em;
                margin-right: 20px;
            }

            label {
                text-align: center;
                letter-spacing: 0.1em;
                text-transform: uppercase;
            }

            &.green {
                border: 1px solid @green;
                .number {
                    background-color: @lightGreen;
                    color: @green;
                }
            }

            &.blue {
                border: 1px solid @blue;

                .number {
                    background-color: @lightBlue;
                    color: @blue;
                }
            }
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