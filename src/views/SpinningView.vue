<template>
  <subpage-hero-section v-bind="spinningHeroContent" />
</template>

<script>
import SubpageHeroSection from "@/components/feeders-and-boilies/hero-section/SubpageHeroSection.vue";

export default {
  components: { SubpageHeroSection },
  data() {
    return {
      spinningHeroContent: {
        url: require("@/assets/images/subpage_hero-section-images/spinning_hero-image.jpg"),
        headline: "Spinning",
        subline:
          "It's time to catch some glorious predators!",
        span: "Buckle up!",
      },
    };
  },
};
</script>

<style lang="scss"></style>
