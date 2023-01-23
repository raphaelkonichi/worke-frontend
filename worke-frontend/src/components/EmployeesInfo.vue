<template>
    <div class="employee-info">
      <div class="employee-info_header">
        <div class="go-back" @click="openEmployeeInfo">
          <i class="fa-solid fa-arrow-left"></i>
        </div>
        <div class="title">
          
          <label>Criar funcionário</label>
        </div>
        <div class="blank-space">
  
        </div>
      </div>
      <div class="employee-info_content"> 
        <div class="content-grid">
            <div class="photo">
                <img src="../assets/img/photo-girl-bigger.jpg"/>
            </div>
            <div class="form">
                <div class="form-group">
                    <label>Nome completo</label>
                    <input type="text"/>
                </div>
                <div class="form-group">
                    <label>E-mail</label>
                    <input type="text"/>
                </div>
                <div class="form-group">
                    <label>Data de nascimento</label>
                    <input type="date"/>
                </div>
            </div>
            <div class="form2">
                <div class="form2-group">
                    <label>Telefone</label>
                    <input type="text"/>
                </div>
                <div class="form2-group">
                    <label>CPF</label>
                    <input type="text"/>
                </div>
                <div class="form2-group">
                    <label>Gênero</label>
                    <input type="text"/>
                </div>
            </div>
        </div>
        <div class="btn">
            <button>Salvar</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>

  export default {
    components: {
    },
    methods: {
        openEmployeeInfo() {
            this.$emit("openEmployeeInfo")
        }
    }
  }
  </script>
  
  <style lang="less" scoped>
  @import "../assets/variables.less";
  
  .employee-info {
      display: flex;
      flex-direction: column;
      width: 100%;
      min-height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      overflow: hidden;
      background-color: @white;
      padding-left: @margin-desktop;
      padding-right: @margin-desktop;
      padding-top: calc(@height-header-desktop ~'+' 50px);
  
      &_header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px 0;
  
        .go-back {
          cursor: pointer;
          
          i {
            color: @gray;
            font-size: 20px;
          }
        }
  
        .title {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
  
          label {
            font-weight: 900;
            font-size: 22px;
            text-align: center;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
        }
      }  

      &_content {
        .content-grid {
            display: grid;
            grid-template-columns: 1fr 5fr;
            grid-template-rows: auto auto;
            grid-template-areas: "photo form1"
                                 "photo form2";

            .photo {
                grid-area: photo;

                img {
                    width: 200px;
                    height: 200px;
                }
            }

            .form {
                grid-area: form1;
            }

            .form2 {
                grid-area: form2;
            }

            .form, .form2 {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-gap: 30px;

                &-group {
                    display: flex;
                    flex-direction: column;

                    label {
                        font-weight: 800;
                        font-size: 12px;
                        letter-spacing: 2px;
                        text-transform: uppercase;
                        margin-bottom: 5px;
                    }

                    input {
                        border-radius: 7px;
                        border: 1px solid @gray;
                        padding: 12px 18px;
                    }
                }
            }
        }

        .btn {
            display: flex;
            justify-content: end;

            button {
                padding: 12px 18px;
                font-size: 14px;
                text-align: center;
                letter-spacing: 0.1em;
                background-color: @black;
                color: @white;
                text-transform: uppercase;
                border-radius: 7px;
                cursor: pointer;
                min-width: 365px;
            }
        }
      }
  }
  </style>