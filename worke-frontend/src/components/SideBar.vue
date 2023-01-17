<template>
  <div class="side-bar">
    <ul>
      <li>Dashboard</li>
      <li>Funcionários</li>
      <li>Salas</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SideBar'
}
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.side-bar {
  background-color: @white;
  width: 360px;
  height: calc(100% ~"-" @height-header-desktop);
  position: fixed;
  z-index: 4;
  left: 0;
  padding: 50px @margin-desktop;
  filter: drop-shadow(10px 0px 10px rgba(147, 147, 147, 0.1));
  top: 150px;

  ul {
    li {
      font-weight: 500;
      font-size: 14px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      padding: 20px 0;
      cursor: pointer;

      &:hover {
        font-weight: bold;
      }
    }
  }

  @media (max-width: 768px) {
    height: calc(100% ~"-" @height-header-mobile);
    padding: 30px @margin-mobile;
    top: 120px;
  }

  @media (max-width: 525px) {
    width: 80%;
  }
}
</style>