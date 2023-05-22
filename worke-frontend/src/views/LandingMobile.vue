<template>
  <div class="landing">
    <Introduction :introdutionTitle="introdutionTitle" :introdutionText="introdutionText" :introAvailable="introAvailable"/>
    <MoreAbout :moreAboutSectionTitle="moreAboutSectionTitle" :moreAboutTitle="moreAboutTitle" :moreAboutText="moreAboutText"/>
    <Competition :competitionTitle="competitionTitle" :competitionText="competitionText"/> 
    <Exercise :exerciseTitle="exerciseTitle" :exerciseText="exerciseText"/>
    <IsCompany/>
    <Footer />
  </div>
</template>

<script>
import Introduction from "../components/landing-page/Introduction.vue";
import MoreAbout from "../components/landing-page/MoreAbout.vue";
import Competition from "../components/landing-page/Competition.vue";
import Exercise from "../components/landing-page/Exercise.vue";
import IsCompany from '../components/landing-page/IsCompany.vue';
import Footer from '../components/Footer.vue';

export default {
  name: "LandingMobile",
  components: {
    Introduction,
    MoreAbout,
    Competition,
    Exercise,
    IsCompany,
    Footer,
  },
  data() {
    return {
      introAvailable: 'Disponível em breve',
      introdutionTitle: 'o app para',
      introdutionText: 'Exercite seu corpo, estabeleça uma rotina e junte-se com seus amigos para competir de forma saudável e inovadora. Movimente-se com worke!',
      moreAboutSectionTitle: 'saiba mais sobre o app',
      moreAboutTitle: 'entre em um',
      moreAboutText: 'Entre em um grupo com seus amigos e compartilhe seu progresso.',
      competitionTitle: 'entre amigos',
      competitionText: 'Estando em um grupo é possível ver seu progresso e de seu amigos, gerando uma competição saudável para motivar seu grupo.',
      exerciseTitle: 'inicie um',
      exerciseText: 'Selecione o exercício, e deixe que nossa inteligência artificial identifique se você está realizando de forma correta!'
    }
  },
};
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.landing {
  background-color: @white;
}

</style>
