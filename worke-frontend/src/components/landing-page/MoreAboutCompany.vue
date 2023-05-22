<template>
    <div class="about">
      <h1>{{ moreAboutSectionTitle }}</h1>
      <div class="about-group">
          <div>
              <h2>{{ moreAboutTitle }}</h2>
              <img class="group-title" src="../../assets/img/salas-title.svg"/>
          </div>
          <div class="about-group_img">
              <img src="../../assets/img/salas-new.png" />
          </div>
          <label>{{ moreAboutText }}</label>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      moreAboutSectionTitle: String,
      moreAboutTitle: String,
      moreAboutText: String,
    }
  }
  </script>
  
  <style lang="less" scoped>
  @import "../../assets/variables.less";
  
  .about {
      h1 {
          font-weight: 600;
          font-size: 28px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: @black;
          text-align: center;
          padding: 90px 0;
      }
  
      &-group {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 70px;
          grid-template-areas: "title phone text";
          align-items: center;
          background-image: url("../../assets/img/backgroundPurple.png");
          background-repeat: no-repeat;
          background-position: left;
          background-size: contain;
          padding-bottom: 50px;
  
          h2 {
              grid-area: title;
              padding-left: @margin-desktop;
              text-transform: uppercase;
              letter-spacing: 0.1em;
              font-weight: 500;
              font-size: 28px;
              color: @purple;
          }
  
          .group-title{
              padding-left: 70px;
          }
  
          &_img {
              grid-area: phone;
  
              img {
                  width: 96%;
              }
          }
  
          label {
              grid-area: text;
              padding-right: @margin-desktop;
              font-size: 16px;
              letter-spacing: 0.03em;
              color: @black;
          }
      }
  
      @media (max-width: 900px) {
          &-group {
              grid-template-columns: 1fr 1fr;
              grid-gap: unset;
              grid-template-areas: "title phone"
                                   "text phone";
  
              h2 {
                  display: flex;
                  align-items: end;
                  height: 100%;
                  padding: 0 @margin-desktop 10px;
              }
  
              &_img {
                  img {
                      padding-right: 40px;
                  }
              }
  
              label {
                  display: flex;
                  height: 100%;
                  align-items: start;
                  padding: 0 @margin-desktop; 
              }
          }
      }
  
      @media (max-width: 660px) {
          h1 {
              padding: 90px @margin-mobile;
          }
  
          &-group {
              display: flex;
              flex-direction: column;
              background-image: url("../../assets/img/backgroundPurple.png");
              background-repeat: no-repeat;
              background-position: left;
              background-size: cover;
  
              h2 {
                  text-align: center;
              }
  
              &_img {
                  img {
                      padding-right: unset;
                      height: 450px;
                      padding: 40px 0;
                  }
              }
          }
          
      }
  }
  </style>