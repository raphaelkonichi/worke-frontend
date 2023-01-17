<template>
  <div class="color-card-list">
    <div class="card">
        <div class="card-group">
            <div class="card-group-number">1</div>
            <div class="card-group-icon">
                <i class="icon-color fa-solid fa-scale-balanced"></i>
            </div>
            <label>Jurídico</label>
        </div>
        <div class="card-points">
            <h6>4230</h6>
            <label>pontos</label>
        </div>
    </div>
    <div class="card">
        <div class="card-group">
            <div class="card-group-number">1</div>
            <div class="card-group-icon">
                <i class="icon-color fa-solid fa-scale-balanced"></i>
            </div>
            <label>Jurídico</label>
        </div>
        <div class="card-points">
            <h6>4230</h6>
            <label>pontos</label>
        </div>
    </div>
    <div class="card">
        <div class="card-group">
            <div class="card-group-number">1</div>
            <div class="card-group-icon">
                <i class="icon-color fa-solid fa-scale-balanced"></i>
            </div>
            <label>Jurídico</label>
        </div>
        <div class="card-points">
            <h6>4230</h6>
            <label>pontos</label>
        </div>
    </div>
    <div class="card">
        <div class="card-group">
            <div class="card-group-number">1</div>
            <div class="card-group-icon">
                <i class="icon-color fa-solid fa-scale-balanced"></i>
            </div>
            <label>Jurídico</label>
        </div>
        <div class="card-points">
            <h6>4230</h6>
            <label>pontos</label>
        </div>
    </div>
    <div class="card">
        <div class="card-group">
            <div class="card-group-number">1</div>
            <div class="card-group-icon">
                <i class="icon-color fa-solid fa-scale-balanced"></i>
            </div>
            <label>Jurídico</label>
        </div>
        <div class="card-points">
            <h6>4230</h6>
            <label>pontos</label>
        </div>
    </div>
    <div class="card">
        <div class="card-group">
            <div class="card-group-number">1</div>
            <div class="card-group-icon">
                <i class="icon-color fa-solid fa-scale-balanced"></i>
            </div>
            <label>Jurídico</label>
        </div>
        <div class="card-points">
            <h6>4230</h6>
            <label>pontos</label>
        </div>
    </div>
    <div class="card">
        <div class="card-group">
            <div class="card-group-number">1</div>
            <div class="card-group-icon">
                <i class="icon-color fa-solid fa-scale-balanced"></i>
            </div>
            <label>Jurídico</label>
        </div>
        <div class="card-points">
            <h6>4230</h6>
            <label>pontos</label>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import "../assets/variables.less";
.color-card-list {
    margin-top: 20px;
    height: ~"calc(100vh - 405px)";
    overflow-y: scroll;
    .card {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-radius: 7px;
        padding: 15px 10px;
        margin-bottom: 15px;
        margin-right: 10px;
        border: 1px solid @black;

        &-group {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;

            &-number {
                font-weight: 800;
                padding: 5px;
                text-align: center;
                border-radius: 50%;
                height: 30px;
                width: 30px;
                margin-right: 10px;
                background-color: @lightGray;
            }

            &-icon {
                margin-right: 10px;

                .icon-color {
                    font-size: 18px;
                }
            }

            label {
                font-weight: 800;
                line-height: 14px;
                letter-spacing: 0.1em;
                text-transform: uppercase;
            }
        }

        &-points {
            display: flex;
            flex-direction: column;
            justify-content: center;

            h6 {
                font-weight: 800;
                font-size: 16px;
                text-align: center;
                letter-spacing: 0.1em;
            }

            label {
                font-weight: 800;
                font-size: 10px;
                text-align: center;
                letter-spacing: 0.1em;
                text-transform: uppercase;
                color: @gray;
            }
        }

        &:nth-child(4n+1) .card-group .card-group-icon .icon-color {
            color: @blue;
        }

        &:nth-child(4n+1) .card-group label {
            color: @blue;
        }

        &:nth-child(4n+2) .card-group .card-group-icon .icon-color {
            color: @pink;
        }

        &:nth-child(4n+2) .card-group label {
            color: @pink;
        }

        &:nth-child(4n+3) .card-group .card-group-icon .icon-color {
            color: @green;
        }

        &:nth-child(4n+3) .card-group label {
            color: @green;
        }

        &:nth-child(4n+4) .card-group .card-group-icon .icon-color {
            color: @purple;
        }

        &:nth-child(4n+4) .card-group label {
            color: @purple;
        }
    }
 
    &::-webkit-scrollbar-track {
        background-color: @white;
    }

    &::-webkit-scrollbar {
        width: 6px;
        background: @white;
    }

    &::-webkit-scrollbar-thumb {
        background: @gray;
        border-radius: 6px;
    }
}
</style>