<template>
  <subpage-hero-section v-bind="feedersAndBoiliesHeroContent" />
  <two-column-grid-section />
</template>

<script>
import SubpageHeroSection from "@/components/feeders-and-boilies/hero-section/SubpageHeroSection.vue";
import TwoColumnGridSection from '@/components/feeders-and-boilies/two-columns-grid-section/TwoColumnGridSection.vue';

export default {
  components: { SubpageHeroSection, TwoColumnGridSection },
  data() {
    return {
      feedersAndBoiliesHeroContent: {
        url: require("@/assets/images/subpage_hero-section-images/feeders-and-boilies_hero-image.jpeg"),
        headline: "Feeders & boilies",
        subline:
          "Our beloved products are always available in a wide range on our website.",
        span: "Hurry up!",
      },
    };
  },
};
</script>

<style lang="scss"></style>
