<template>
  <subpage-hero-section v-bind="feedersAndBoiliesHeroContent" />
  <two-column-grid-section />
  <top-discount-section />
  <product-row />
</template>

<script>
import SubpageHeroSection from "@/components/feeders-and-boilies/hero-section/SubpageHeroSection.vue";
import TwoColumnGridSection from '@/components/feeders-and-boilies/two-columns-grid-section/TwoColumnGridSection.vue';
import TopDiscountSection from '@/components/feeders-and-boilies/top-discount-section/TopDiscountSection.vue';
import ProductRow from '@/components/feeders-and-boilies/product-row/ProductRow.vue';

export default {
  components: { SubpageHeroSection, TwoColumnGridSection, TopDiscountSection, ProductRow },
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
