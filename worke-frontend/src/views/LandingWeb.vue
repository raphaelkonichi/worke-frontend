<template>
  <div class="landing">
    <Introduction :introdutionTitle="introdutionTitle" :introdutionText="introdutionText" :introAvailable="introAvailable"/>
    <MoreAboutCompany :moreAboutSectionTitle="moreAboutSectionTitle" :moreAboutTitle="moreAboutTitle" :moreAboutText="moreAboutText"/>
    <Competition :competitionTitle="competitionTitle" :competitionText="competitionText"/> 
    <Exercise :exerciseTitle="exerciseTitle" :exerciseText="exerciseText"/>
    <CompanyDash :companyTitle="companyTitle" :companyText="companyText"/>
    <Footer />
  </div>
</template>

<script>
import Introduction from "../components/landing-page/IntroductionCompany.vue";
import MoreAboutCompany from "../components/landing-page/MoreAboutCompany.vue";
import Competition from "../components/landing-page/Competition.vue";
import Exercise from "../components/landing-page/Exercise.vue";
import CompanyDash from '../components/landing-page/CompanyDash.vue';
import Plans from '../components/landing-page/Plans.vue';
import Footer from '../components/Footer.vue';

export default {
  name: "LandingMobile",
  components: {
    Introduction,
    MoreAboutCompany,
    Competition,
    Exercise,
    CompanyDash,
    Plans,
    Footer,
  },
  data() {
    return {
      introAvailable: 'entre em contato para adquirir!',
      introdutionTitle: 'o app para',
      introdutionText: 'Um app para motivar e estimular a saúde e o bem-estar,  junte seus funcionários para fazer dessa jornada algo divertido. ',
      moreAboutSectionTitle: 'saiba mais sobre o app',
      moreAboutTitle: 'entre em',
      moreAboutText: 'Entre em uma sala e compartilhe seu progresso com seus colegas de trabalho.',
      competitionTitle: 'saudável',
      competitionText: 'Estando em uma sala é possível ver seu progresso e de seus colegas, gerando uma competição saudável para motivar sua empresa.',
      exerciseTitle: 'inicie um',
      exerciseText: 'Selecione o exercício, e deixe que nossa inteligência artificial identifique se você está realizando de forma correta!',
      companyTitle: 'Planos empresariais',
      companyText: 'Contratando o plano empresarial, será possível ter um conteúdo exclusivo para a gestão de seu app, possibilitando também realizar análises sobre seu uso e ter acesso a várias outras funções!',
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  }
};
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.landing {
  background-color: @white;
}

</style>
