<template>
  <subpage-hero-section v-bind="heroContent" />
  <two-column-grid-section :arrayOfGridSections="topGridSection" />
  <top-discount-section :arrayOfDiscountedProducts="sortedArray" />
  <product-row
    :headlineOfFirstRow="headlineTextsOfClothesAndBrandings.textOfFirstHeadline"
    :headlineOfSecondRow="headlineTextsOfClothesAndBrandings.textOfSecondHeadline"
    :arrayOfFirstRow="firstRowOfProducts"
    :arrayOfSecondRow="secondRowOfProducts"
  />
  <fishing-expo-section />
</template>

<script>
import { mapGetters } from "vuex";
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

  computed: {
    ...mapGetters("products", [
      "headlineTextsOfPage",
      "heroContentOfPage",
      "topGridSectionOfPage",
      "sortedArrayOfBestDiscountedProducts",
      "arrayOfProductsInFirstRow",
      "arrayOfProductsInSecondRow",
    ]),

    currentURLOfSite() {
      return this.$route.path;
    },

    headlineTextsOfClothesAndBrandings() {
      return this.headlineTextsOfPage(this.currentURLOfSite);
    },

    heroContent() {
      return this.heroContentOfPage(this.currentURLOfSite);
    },

    topGridSection() {
      return this.topGridSectionOfPage(this.currentURLOfSite);
    },

    sortedArray() {
      return this.sortedArrayOfBestDiscountedProducts(this.currentURLOfSite);
    },

    firstRowOfProducts() {
      return this.arrayOfProductsInFirstRow(this.currentURLOfSite);
    },

    secondRowOfProducts() {
      return this.arrayOfProductsInSecondRow(this.currentURLOfSite);
    },
  },
};
</script>
