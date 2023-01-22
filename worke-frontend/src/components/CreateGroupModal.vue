<template>
  <div class="background">
    <div class="modal">
        <div class="close-button">
            <img src="../assets/img/close-gray.svg" @click="openModal"/>
        </div>
        <h1>dê um nome à sala</h1>
        <div class="modal-icon">
            <i class="card-icon fa-solid fa-face-laugh"></i>
        </div>
        <input type="text" placeholder="Nome"/>
        <div class="modal-group-icon">
            <div v-for="icon in setIcons" :key="icon" class="icon">
                <i :class="[ icon ]"></i>
            </div>
        </div>
        <button>Salvar</button>
    </div>
  </div>
</template>

<script>
const ICONS = {
    SMILE: 'fa-solid fa-face-laugh',
    PLATTE: 'fa-solid fa-palette',
    BOOK: 'fa-solid fa-book',
    PEOPLE: 'fa-solid fa-people-group',
    COMMENT: 'fa-solid fa-comment-dots',
    FINANCE: 'fa-solid fa-credit-card',
    LAPTOP: 'fa-solid fa-laptop',
    BUG: 'fa-solid fa-bug',
    CAMERA: 'fa-solid fa-camera',
    BALANCE: 'fa-solid fa-scale-balanced',
    HEADPHONE: 'fa-solid fa-headphones',
    MUG: 'fa-solid fa-mug-saucer',
}

export default {
    data() {
        return {
            
        }
    },
    computed: {
        setIcons() {
            return ICONS
        }
    },
    methods: {
        openModal() {
            this.$emit("openModal");
        }
    }
}
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.background {
  display: flex;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 6;
  justify-content: center;
  align-items: center;
  background-color: @black-50;
  overflow: hidden;

  .modal {
    display: flex;
    flex-direction: column;
    background-color: @white;
    padding: 40px;
    border-radius: 16px;
    position: relative;
    align-items: center;

    .close-button {
        position: absolute;
        top: 25px;
        right: 25px;
        display: flex;
        justify-content: end;
        align-items: center;
        width: 100%;

        img {
            cursor: pointer;
        }
    }

    h1 {
        font-weight: 900;
        font-size: 22px;
        text-align: center;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        margin-bottom: 20px;
    }

    &-icon {
        background-color: @pink;
        padding: 20px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin-bottom: 20px;

        .card-icon {
            color: @white;
            font-size: 20px;
            cursor: pointer;
        }
    }

    input {
        border: 1px solid @gray;
        border-radius: 7px;
        padding: 10px;
        text-align: center;
        margin-bottom: 20px;
        font-size: 14px;
    }

    &-group-icon {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-gap: 15px;
        margin-bottom: 20px;

        .icon {
            border: 1px solid @gray;
            border-radius: 50%;
            height: 50px;
            width: 50px;
            display: flex;
            justify-content: center;
            align-items: center;

            i {
                font-size: 15px;
                color: @gray;
            }
        }
    }
    
    button {
        padding: 15px 80px;
        background-color: @black;
        color: @white;
        text-transform: uppercase;
        text-align: center;
        letter-spacing: 2px;
        border-radius: 7px;
        font-size: 12px;
    }
  }
}

</style>