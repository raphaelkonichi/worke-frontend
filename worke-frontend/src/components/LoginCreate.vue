<template>
  <div class="card">
        <div class="card-header">
          <i class="fa-solid fa-arrow-left" @click="openCreate"></i>
          <h2>CRIAR CONTA</h2>
          <div class="blank"></div>
        </div>
        <form class="card-form" @submit.prevent="create">
          <input 
            v-model="formCreate.nome"
            type="text" 
            class="input width-100" 
            placeholder="Nome"
            :class="{ 'input__error': $v.formCreate.nome.$error }"/>
          <div v-if="isSent">
            <span class="input-error" v-if="!$v.formCreate.nome.required">Coloque o nome de sua empresa!</span>
          </div>
          <div class="form-group">
            <div class="form-group__content">
              <input 
                v-model="formCreate.email"
                type="text" 
                class="input" 
                placeholder="E-mail"
                :class="{ 'input__error': $v.formCreate.email.$error }"/>
              <div v-if="isSent" class="input-group">
                <span class="input-error" v-if="!$v.formCreate.email.required">Ops! Insira um e-mail!</span>
                <span class="input-error" v-if="!$v.formCreate.email.email">Ops! E-mail inválido!</span>
              </div>
            </div>
            <div class="form-group__content">
              <masked-input 
                v-model="formCreate.cnpj"
                type="text" 
                class="input" 
                placeholder="CNPJ"
                mask="11.111.111/1111-11"
                :class="{ 'input__error': $v.formCreate.cnpj.$error }"/>
              <div v-if="isSent" class="input-group">
                <span class="input-error" v-if="!$v.formCreate.cnpj.required">Ops! Insira um cnpj!</span>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="form-group__content">
              <masked-input  
                v-model="formCreate.telefone"
                type="text" 
                class="input" 
                placeholder="Telefone"
                mask="(11) 11111-1111"
                :class="{ 'input__error': $v.formCreate.telefone.$error }"/>
              <div v-if="isSent" class="input-group">
                <span class="input-error" v-if="!$v.formCreate.telefone.required">Ops! Insira um telefone!</span>
              </div>
            </div>
            <div class="form-group__content">
              <input 
                v-model="formCreate.senha"
                type="password" 
                class="input" 
                placeholder="Senha"
                :class="{ 'input__error': $v.formCreate.senha.$error }"/>
                <div v-if="isSent" class="input-group">
                  <span class="input-error" v-if="!$v.formCreate.senha.required">Ops! Insira uma senha!</span>
                </div>
            </div>
          </div>
          <button class="mt-20">CRIAR CONTA</button>
        </form>
      </div>
</template>

<script>
import axios from "axios";
import MaskedInput from 'vue-masked-input'
import { required, email, sameAs } from 'vuelidate/lib/validators'

export default {
    components: {
    MaskedInput,
  },
  validations: {
        formCreate: {
            nome: {
                required
            },
            email: {
                required,
                email,
            },
            cnpj: {
                required
            },
            telefone: {
                required
            },
            senha: {
                required,
            },
        },
        senhaConfirmation: {
            sameAsPassword: sameAs('senha')
        },
    },
    data() {
        return {
            formCreate: {
                nome: "",
                email: "",
                senha: "",
                cnpj: "",
                telefone: "",
            },
            senhaConfirmation: "",
            isSent: false,
        }
    },
    methods: {  
        async create() {
            this.isSent = true;
            this.$v.$touch();
            if (this.$v.$invalid) {
                return;
            }
            await axios
                .post(
                "http://127.0.0.1:8000/registerEmpresa",
                this.formCreate,
                {
                    headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    },
                },
                )
                .then(() => {
                    this.openCreate()
                })
                .catch((error) => console.log(error));
        },
        openCreate() {
            this.$emit('openCreate')
        }
    }
}
</script>

<style scoped lang="less">
@import "../assets/variables.less";

.card {  
    display: flex;
    flex-direction: column;
    box-shadow: 0px 4px 18px -3px rgba(0, 0, 0, 0.15);
    background-color: @white;
    padding: 40px;
    border-radius: 30px;
    z-index: 2;
    margin-bottom: 80px;

    &-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;

      i {
        color: @black;
        cursor: pointer;
      }

      h2 {
        letter-spacing: 0.1em;
        font-weight: 800;
      }
    }

    .mt-20 {
      margin-top: 20px;
    }

    &-form {
      display: flex;
      flex-direction: column;

      .input {
        padding: 14px;
        border-radius: 7px;
        border: 1px solid @gray;
        color: @black;
        font-size: 14px;
        width: 385px;
        margin-top: 20px;
        font-family: "Nunito";

        &__error {
          border: 1px solid @red;
        }

        &-error {
          color: @red;
          margin: unset
        }
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

      .form-group {
        display: flex;
        gap: 20px;
      }

      .width-100 {
        width: 100%;
      }

      .width-250 {
        width: 250px;
      }

      &__error {
        .span {
          color: @red;
        }
      }
    }

    &-create {
      padding: 20px 0 0 0;
      display: flex;
      justify-content: center;

      label {
        letter-spacing: 0.5px;

        a {
          color: @blue;
          font-weight: 800;
          text-transform: uppercase;
        }
      }
    }
  }
</style>