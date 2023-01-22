<template>
  <div class="ranking">
    <div class="ranking-header">
        <h1>Ranking</h1>
    </div>
    <div class="ranking-content">
        <div class="ranking-content_left">
            <div class="principal">
                <div class="second-place">
                    <div class="second-place_img">
                        <img class="img-photo" src="../assets/img/photo-girl-bigger.jpg" />
                        <div class="img-star">
                            <label>10</label>
                        </div>
                        <div class="place">2</div>
                    </div>
                    <div class="second-place_info">
                        <h5>Karina</h5>
                        <label>400 pontos</label>
                    </div>
                </div>
                <div class="first-place">
                    <div class="first-place_img">
                        <img class="img-photo" src="../assets/img/photo-girl-bigger.jpg" />
                        <div class="img-star">
                            <label>10</label>
                        </div>
                        <div class="place">1</div>
                    </div>
                    <div class="first-place_info">
                        <h5>Karina</h5>
                        <label>400 pontos</label>
                    </div>
                </div>
                <div class="third-place">
                    <div class="third-place_img">
                        <img class="img-photo" src="../assets/img/photo-girl-bigger.jpg" />
                        <div class="img-star">
                            <label>10</label>
                        </div>
                        <div class="place">3</div>
                    </div>
                    <div class="third-place_info">
                        <h5>Karina</h5>
                        <label>400 pontos</label>
                    </div>
                </div>
            </div>
            <div class="geral">
                <div class="geral-card">
                    <h2>2800</h2>
                    <label>pontos acumulados</label>
                </div>
            </div>
        </div>
        <div class="ranking-content_right">
            <div class="list">
                <div class="card">
                    <div class="card-group">
                        <div class="card-group-number">1</div>
                        <div class="card-group-img">
                        <img class="img-photo" src="../assets/img/photo-girl.jpg" />
                        <div class="img-star">
                            <label>1</label>
                        </div>
                        </div>
                        <label>Ana</label>
                    </div>
                    <div class="card-points">
                        <h6>890 pontos</h6>
                    </div>
                </div>
                <div class="card">
                    <div class="card-group">
                        <div class="card-group-number">1</div>
                        <div class="card-group-img">
                        <img class="img-photo" src="../assets/img/photo-girl.jpg" />
                        <div class="img-star">
                            <label>1</label>
                        </div>
                        </div>
                        <label>Ana</label>
                    </div>
                    <div class="card-points">
                        <h6>890 pontos</h6>
                    </div>
                </div>
                <div class="card">
                    <div class="card-group">
                        <div class="card-group-number">1</div>
                        <div class="card-group-img">
                        <img class="img-photo" src="../assets/img/photo-girl.jpg" />
                        <div class="img-star">
                            <label>1</label>
                        </div>
                        </div>
                        <label>Ana</label>
                    </div>
                    <div class="card-points">
                        <h6>890 pontos</h6>
                    </div>
                </div>
                <div class="card">
                    <div class="card-group">
                        <div class="card-group-number">1</div>
                        <div class="card-group-img">
                        <img class="img-photo" src="../assets/img/photo-girl.jpg" />
                        <div class="img-star">
                            <label>1</label>
                        </div>
                        </div>
                        <label>Ana</label>
                    </div>
                    <div class="card-points">
                        <h6>890 pontos</h6>
                    </div>
                </div>
                <div class="card">
                    <div class="card-group">
                        <div class="card-group-number">1</div>
                        <div class="card-group-img">
                        <img class="img-photo" src="../assets/img/photo-girl.jpg" />
                        <div class="img-star">
                            <label>1</label>
                        </div>
                        </div>
                        <label>Ana</label>
                    </div>
                    <div class="card-points">
                        <h6>890 pontos</h6>
                    </div>
                </div>
                <div class="card">
                    <div class="card-group">
                        <div class="card-group-number">1</div>
                        <div class="card-group-img">
                            <img class="img-photo" src="../assets/img/photo-girl.jpg" />
                            <div class="img-star">
                                <label>1</label>
                            </div>
                        </div>
                        <label>Ana</label>
                    </div>
                    <div class="card-points">
                        <h6>890 pontos</h6>
                    </div>
                </div>
            </div>
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

.ranking {
    &-header {
        h1 {
            font-weight: 800;
            font-size: 20px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            margin-bottom: 20px;
        }
    }

    &-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 25px;

        &_left {
            .principal {
                display: flex;
                align-items: end;
                margin-bottom: 30px;
                .first-place, .second-place, .third-place {
                    &_img {
                        margin-right: 10px;
                        display: grid;
                        grid-template-areas: "group";

                        .img-photo {
                            border-radius: 7px;
                            grid-area: group;
                            height: 100px;
                            width: 100px;
                        }

                        .img-star {
                            height: 33px;
                            width: 34px;
                            grid-area: group;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            padding-bottom: -28px;
                            color: @white;
                            font-weight: bold;
                            background-repeat: no-repeat;
                            margin: -10px 0 0 80px;
                            z-index: 2;
                        }

                        .place {
                            height: 40px;
                            width: 40px;
                            grid-area: group;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            padding-bottom: -28px;
                            font-weight: 900;
                            margin: 80px 0px 0px 30px;
                            z-index: 2;
                            border-radius: 50%;
                            font-size: 18px;
                        }
                    }

                    &_info {
                        margin-right: 20px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;

                        h5 {
                            font-weight: 800;
                            font-size: 18px;
                            letter-spacing: 0.1em;
                        }

                        label {
                            font-weight: 800;
                            letter-spacing: 0.1em;
                        }
                    }
                }

                .first-place {
                    padding-bottom: 50px;

                    &_img {
                        .img-star{
                            background: url("../assets/img/star-purple.svg");
                            background-repeat: no-repeat;
                        }

                        .place {
                            color: @purple;
                            background-color: @lightPurple;
                        }
                    }

                    &_info {
                        label {
                            color: @purple;
                        }
                    }
                }

                .second-place {
                    &_img {
                        .img-star{
                            background: url("../assets/img/star-pink.svg");
                            background-repeat: no-repeat;
                        }

                        .place {
                            color: @pink;
                            background-color: @lightPink;
                        }
                    }

                    &_info {
                        label {
                            color: @pink;
                        }
                    }
                }

                .third-place {
                    &_img {
                        .img-star{
                            background: url("../assets/img/star-blue.svg");
                            background-repeat: no-repeat;
                        }

                        .place {
                            color: @blue;
                            background-color: @lightBlue;
                        }
                    }

                    &_info {
                        label {
                            color: @blue;
                        }
                    }
                }
            }

            .geral {
                &-card {
                    background-color: @lightGray;
                    padding: 30px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-items: center;
                    border-radius: 7px;

                    h2 {
                        font-weight: 800;
                        font-size: 28px;
                        letter-spacing: 0.05em;
                    }

                    label {
                        font-weight: 400;
                        font-size: 16px;
                        letter-spacing: 0.05em;
                        text-transform: uppercase;
                    }
                }
            }
        }

        &_right {
            .list {
                .card {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    border-radius: 7px;
                    padding: 10px 20px 10px 15px;
                    margin-bottom: 15px;
                    margin-right: 10px;

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
                    }

                    &-img {
                        margin-right: 10px;
                        display: grid;
                        grid-template-areas: "group";

                        .img-photo {
                            border-radius: 7px;
                            grid-area: star;
                            height: 50px;
                            width: 50px;
                        }

                        .img-star {
                            height: 60px;
                            width: 60px;
                            grid-area: star;
                            display: flex;
                            align-items: end;
                            justify-content: right;
                            padding-right: 10.5px;
                            padding-bottom: 6px;
                            color: @white;
                            font-size: 12px;
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
                            font-size: 14px;
                            text-align: center;
                            letter-spacing: 0.1em;
                        }
                    }

                    &:nth-child(4n + 1) {
                        border: 1px solid @green;
                    }

                    &:nth-child(4n + 1) .card-group .card-group-number {
                        background-color: @lightGreen;
                        color: @green;
                    }

                    &:nth-child(4n + 1) .card-group .card-group-img .img-star {
                        background: url("../assets/img/star-green.svg");
                        background-repeat: no-repeat;
                        background-position-x: right;
                        background-position-y: bottom;
                    }

                    &:nth-child(4n + 1) .card-points h6 {
                        color: @green;
                    }

                    &:nth-child(4n + 2) {
                        border: 1px solid @purple;
                    }

                    &:nth-child(4n + 2) .card-group .card-group-number {
                        background-color: @lightPurple;
                        color: @purple;
                    }

                    &:nth-child(4n + 2) .card-group .card-group-img .img-star {
                        background: url("../assets/img/star-purple.svg");
                        background-repeat: no-repeat;
                        background-position-x: right;
                        background-position-y: bottom;
                    }
                    &:nth-child(4n + 2) .card-points h6 {
                        color: @purple;
                    }

                    &:nth-child(4n + 3) {
                        border: 1px solid @pink;
                    }

                    &:nth-child(4n + 3) .card-group .card-group-number {
                        background-color: @lightPink;
                        color: @pink;
                    }

                    &:nth-child(4n + 3) .card-group .card-group-img .img-star {
                        background: url("../assets/img/star-pink.svg");
                        background-repeat: no-repeat;
                        background-position-x: right;
                        background-position-y: bottom;
                    }

                    &:nth-child(4n + 3) .card-points h6 {
                        color: @pink;
                    }

                    &:nth-child(4n + 4) {
                     border: 1px solid @blue;
                    }

                    &:nth-child(4n + 4) .card-group .card-group-number {
                        background-color: @lightBlue;
                        color: @blue;
                    }

                    &:nth-child(4n + 4) .card-group .card-group-img .img-star {
                        background: url("../assets/img/star-blue.svg");
                        background-repeat: no-repeat;
                        background-position-x: right;
                        background-position-y: bottom;
                    }

                    &:nth-child(4n + 4) .card-points h6 {
                        color: @blue;
                    }
                }
            }
        }
    }
}

</style>