<template>
  <subpage-hero-section v-bind="feedersAndBoiliesHeroContent" />
  <two-column-grid-section
    :arrayOfGridSections="feedersAndBoiliesGridSections"
  />
  <top-discount-section
    :arrayOfDiscountedProducts="sortedArrayOfBestDiscountedProducts"
  />
  <product-row
    :headlineOfFirstRow="'Top selling clothes for fishing'"
    :headlineOfSecondRow="'Most popular brands'"
    :arrayOfFirstRow="bestClothes"
    :arrayOfSecondRow="changedArrayOfBrandLogoImages"
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
      feedersAndBoiliesHeroContent: {
        url: require("@/assets/images/subpage_hero-section-images/feeders-and-boilies_hero-image.jpeg"),
        headline: "Feeders & boilies",
        subline:
          "Our beloved products are always available in a wide range on our website.",
        span: "Hurry up!",
      },
    };
  },

  computed: {
    ...mapState([
      "feedersAndBoiliesGridSections",
      "topDiscountProducts",
      "bestClothes",
      "brandLogoImages",
    ]),

    sortedArrayOfBestDiscountedProducts() {
      return this.topDiscountProducts.toSorted((a, b) => {
        return b.rating - a.rating;
      });
    },

    changedArrayOfBrandLogoImages() {
      return this.brandLogoImages
        .map((el) => ({
          ...el,
          itemImageSrc: el.brandImageSrc,
          itemName: el.brandName,
          itemLink: el.brandLink,
        }))
        .filter((el) => el.type === "fishing");
    },
  },
};
</script>
