<template>
  <div>
    <IntroductionMobile />
    <MoreAboutMobile />
    <CompetitionMobile />
  </div>
</template>

<script>
import IntroductionMobile from "../components/landing-page/IntroductionMobile.vue";
import MoreAboutMobile from "../components/landing-page/MoreAboutMobile.vue";
import CompetitionMobile from "../components/landing-page/CompetitionMobile.vue";

export default {
  name: "LandingMobile",
  components: {
    IntroductionMobile,
    MoreAboutMobile,
    CompetitionMobile,
  },
};
</script>
