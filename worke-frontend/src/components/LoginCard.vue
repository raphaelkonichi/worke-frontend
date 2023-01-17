<template>
  <div class="login-card">
    <div class="container">
      <div class="logo">
        <img src="../assets/img/logo-empresas.png" alt="" />
      </div>
      <div class="card">
        <h1>LOGIN</h1>
        <input type="text" class="text" placeholder="E-mail" />
        <input type="text" class="text" placeholder="Senha" />
        <span>Esqueceu sua senha?</span>
        <button>ENTRAR</button>
      </div>
    </div>
    <div class="background-lines">
      <img src="../assets/img/background-lines.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginCard",
};
</script>

<style scoped lang="less">
@import "../assets/variables.less";

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  z-index: 2;
  background-color: @white;

  .logo {
    margin-bottom: 35px;
  }

  h1 {
    font-size: 32px;
    letter-spacing: 0.1em;
    font-weight: 800;
    margin-bottom: 5px;
  }
  .card {
    display: flex;
    flex-direction: column;
    box-shadow: 0px 4px 18px -3px rgba(0, 0, 0, 0.15);
    background-color: @white;
    padding: 50px;
    border-radius: 30px;
    z-index: 2;
    margin-bottom: 80px;

    input {
      padding: 14px 20px;
      border-radius: 7px;
      border: 1px solid @gray;
      color: @gray;
      font-size: 14px;
      width: 320px;
      margin-top: 20px;
    }

    ::placeholder {
      color: @gray;
      font-family: "Nunito";
      font-size: 14px;
    }

    span {
      font-size: 12px;
      color: @black;
      font-weight: 600;
      margin: 15px 0 25px 0;
      cursor: pointer;
    }

    button {
      color: @white;
      background-color: @black;
      letter-spacing: 2px;
      font-weight: 900;
      font-size: 12px;
      padding: 15px;
      border-radius: 7px;
      cursor: pointer;
    }
  }
}

.background-lines {
  position: absolute;
  width: 100%;
  bottom: 0px;
  z-index: 1;

  img {
    width: 100%;
    z-index: 1;
  }
}
</style>
