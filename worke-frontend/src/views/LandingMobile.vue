<template>
  <div>
    <Introduction :introdutionTitle="introdutionTitle" :introdutionText="introdutionText"/>
    <MoreAbout :moreAboutSectionTitle="moreAboutSectionTitle" :moreAboutTitle="moreAboutTitle" :moreAboutText="moreAboutText"/>
    <Competition :competitionTitle="competitionTitle" :competitionText="competitionText"/> 
    <Exercise :exerciseTitle="exerciseTitle" :exerciseText="exerciseText"/>
    <Footer />
  </div>
</template>

<script>
import Introduction from "../components/landing-page/Introduction.vue";
import MoreAbout from "../components/landing-page/MoreAbout.vue";
import Competition from "../components/landing-page/Competition.vue";
import Exercise from "../components/landing-page/Exercise.vue";
import Footer from '../components/Footer.vue';

export default {
  name: "LandingMobile",
  components: {
    Introduction,
    MoreAbout,
    Competition,
    Exercise,
    Footer,
  },
  data() {
    return {
      introdutionTitle: 'o app para movimentar seu corpo',
      introdutionText: 'Exercite seu corpo, estabeleça uma rotina e junte-se com seus amigos para competir de forma saudável e inovadora. Movimente-se com worke!',
      moreAboutSectionTitle: 'saiba mais sobre o app',
      moreAboutTitle: 'entre em um grupo',
      moreAboutText: 'Entre em um grupo com seus amigos e compartilhe seu progresso.',
      competitionTitle: 'competição entre amigos',
      competitionText: 'Estando em um grupo é possível ver seu progresso e de seu amigos, gerando uma competição saudável para motivar seu grupo.',
      exerciseTitle: 'inicie um exercício',
      exerciseText: 'Selecione o exercício, e deixe que nossa inteligência artificial identifique se você está realizando de forma correta!'
    }
  },
};
</script>
