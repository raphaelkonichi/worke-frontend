<template>
  <div class="color-card-list">
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
        <h6>890</h6>
        <label>pontos</label>
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
        <h6>890</h6>
        <label>pontos</label>
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
        <h6>890</h6>
        <label>pontos</label>
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
        <h6>890</h6>
        <label>pontos</label>
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
        <h6>890</h6>
        <label>pontos</label>
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
        <h6>890</h6>
        <label>pontos</label>
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
        <h6>890</h6>
        <label>pontos</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "../assets/variables.less";
.color-card-list {
  margin-top: 20px;
  // height: ~"calc(100vh - 405px)";
  overflow-y: scroll;
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

    &:nth-child(4n + 2) {
      border: 1px solid @blue;
    }

    &:nth-child(4n + 2) .card-group .card-group-number {
      background-color: @lightBlue;
      color: @blue;
    }

    &:nth-child(4n + 2) .card-group .card-group-img .img-star {
      background: url("../assets/img/star-blue.svg");
      background-repeat: no-repeat;
      background-position-x: right;
      background-position-y: bottom;
    }

    &:nth-child(4n + 3) {
      border: 1px solid @purple;
    }

    &:nth-child(4n + 3) .card-group .card-group-number {
      background-color: @lightPurple;
      color: @purple;
    }

    &:nth-child(4n + 3) .card-group .card-group-img .img-star {
      background: url("../assets/img/star-purple.svg");
      background-repeat: no-repeat;
      background-position-x: right;
      background-position-y: bottom;
    }

    &:nth-child(4n + 4) {
      border: 1px solid @pink;
    }

    &:nth-child(4n + 4) .card-group .card-group-number {
      background-color: @lightPink;
      color: @pink;
    }

    &:nth-child(4n + 4) .card-group .card-group-img .img-star {
      background: url("../assets/img/star-pink.svg");
      background-repeat: no-repeat;
      background-position-x: right;
      background-position-y: bottom;
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
