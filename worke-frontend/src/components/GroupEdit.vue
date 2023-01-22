<template>
  <div class="edit">
    <h1>Editar</h1>
    <div class="edit-content">
        <div class="edit-icon">
            <i class="card-icon fa-solid fa-face-laugh"></i>
        </div>
        <input type="text" placeholder="Nome"/>
        <div class="edit-group-icon">
            <div v-for="icon in setIcons" :key="icon" class="icon">
                <i :class="[ icon ]"></i>
            </div>
        </div>
        <button>Salvar alterações</button>
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

.edit {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &-content {
        display: flex;
        flex-direction: column;
        padding: 40px 0 0 0;
        border-radius: 16px;
        position: relative;
        align-items: center;
    }
    
    h1 {
        font-weight: 900;
        font-size: 22px;
        text-align: center;
        letter-spacing: 0.1em;
        text-transform: uppercase;
    }

    &-icon {
        background-color: @purple;
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
        margin-top: 40px;
    }
}
</style>