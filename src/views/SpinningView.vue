<template>
  <subpage-hero-section v-bind="spinningHeroContent" />
  <two-column-grid-section :arrayOfGridSections="spinningGridSections" />
  <top-discount-section
    :arrayOfDiscountedProducts="sortedArrayOfBestDiscountedProducts"
  />
  <product-row
    :headlineOfFirstRow="textOfFirstHeadline"
    :headlineOfSecondRow="textOfSecondHeadline"
    :arrayOfFirstRow="spinningClothes"
    :arrayOfSecondRow="spinningBrandLogoImages"
  />
  <fishing-expo-section />
</template>

<script>
import { mapState } from "vuex";
import SubpageHeroSection from "@/components/feeders-and-boilies/hero-section/SubpageHeroSection.vue";
import TwoColumnGridSection from "@/components/feeders-and-boilies/two-columns-grid-section/TwoColumnGridSection.vue";
import TopDiscountSection from "@/components/feeders-and-boilies/top-discount-section/TopDiscountSection.vue";
import ProductRow from "@/components/feeders-and-boilies/product-row/ProductRow.vue";
import FishingExpoSection from "@/components/fishing-expo-section/FishingExpoSection.vue";

export default {
  components: {
    SubpageHeroSection,
    TwoColumnGridSection,
    TopDiscountSection,
    ProductRow,
    FishingExpoSection,
  },
  data() {
    return {
      textOfFirstHeadline: "Most popular clothes",
      textOfSecondHeadline: "Most popular brands",
      spinningHeroContent: {
        url: require("@/assets/images/subpage_hero-section-images/spinning_hero-image.jpg"),
        headline: "Spinning",
        subline: "It's time to catch some glorious predators!",
        span: "Buckle up!",
      },
    };
  },

  computed: {
    ...mapState([
      "spinningGridSections",
      "spinningTopDiscountProducts",
      "spinningClothes",
      "brandingLogoImages",
    ]),

    sortedArrayOfBestDiscountedProducts() {
      return this.spinningTopDiscountProducts.toSorted((a, b) => {
        return b.rating - a.rating;
      });
    },

    spinningBrandLogoImages() {
      return this.brandingLogoImages
        .map((el) => ({
          ...el,
          itemImageSrc: el.brandImageSrc,
          itemName: el.brandName,
          itemLink: el.brandLink,
        }))
        .filter((el) => el.type === "spinning-fishing");
    },
  },
};
</script>

<style lang="scss"></style>
