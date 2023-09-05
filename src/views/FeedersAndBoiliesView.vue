<template>
  <subpage-hero-section v-bind="feedersAndBoiliesHeroContent" />
  <two-column-grid-section
    :arrayOfGridSections="feedersAndBoiliesGridSections"
  />
  <top-discount-section
    :arrayOfDiscountedProducts="sortedArrayOfBestDiscountedProducts"
  />
  <product-row
    :headlineOfFirstRow="textOfFirstHeadline"
    :headlineOfSecondRow="textOfSecondHeadline"
    :arrayOfFirstRow="feederAndBoiliesClothes"
    :arrayOfSecondRow="feederAndBoiliesArrayOfBrandLogoImages"
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
      "feederAndBoiliesTopDiscountProducts",
      "feederAndBoiliesClothes",
      "brandingLogoImages",
    ]),

    sortedArrayOfBestDiscountedProducts() {
      return this.feederAndBoiliesTopDiscountProducts.toSorted((a, b) => {
        return b.rating - a.rating;
      });
    },

    feederAndBoiliesArrayOfBrandLogoImages() {
      return this.brandingLogoImages
        .map((el) => ({
          ...el,
          itemImageSrc: el.brandImageSrc,
          itemName: el.brandName,
          itemLink: el.brandLink,
        }))
        .filter((el) => el.type === "feeder-fishing");
    },
  },
};
</script>
