<template>
  <div class="company-dash">
    <div class="company-dash_img">
        <img src="../../assets/img/dashboard-landing.png"/>
    </div>
    <div class="company-dash_info">
        <h1>{{ companyTitle }}</h1>
        <label>{{ companyText }}</label>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        companyText: String,
        companyTitle: String,
    }
}
</script>

<style lang="less" scoped>
@import "../../assets/variables.less";
.company-dash{
    background-image: url("../../assets/img/backgroundBlue.png");
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "web text";
    align-items: center;
    margin-top: 130px;
    padding: 0px @margin-desktop;
    grid-gap: 70px;

    &_img {
        grid-area: web;
        display: flex;
        justify-content: center;

        img {
            width: 100%;
        }
    }
    

    &_info {
        grid-area: text;

        h1 {
            text-transform: uppercase;
            letter-spacing: 0.1em;
            font-weight: 900;
            font-size: 28px;
            color: @blue;
        }

        label {
            font-size: 16px;
            letter-spacing: 0.03em;
            color: @black;
        }
    }

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        grid-template-areas: "web" 
                             "text";
        grid-gap: unset;
        
        &_img {
            margin-bottom: 20px;

            img {
                width: 60%;
            }
        }

        &_info {
            display: flex;
            flex-direction: column;
            justify-content: center;

            h1 {
                text-align: center;
                margin-bottom: 10px;
            }

            label {
                text-align: center;
            }
        }
    }

    @media (max-width: 660px) {
        margin-top: 50px;
        background-image: url("../../assets/img/backgroundBlue.png");
        background-repeat: no-repeat;
        background-position: right;
        background-size: cover;
        padding: 0px @margin-mobile;

        &_img {
            img {
                width: 90%;
            }
        }
    }
}
</style>