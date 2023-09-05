<template>
  <section class="product-row">
    <div class="container product-row__container">
      <item-row-with-headline-cell
        :textOfHeadline="clothesTextOfHeadline"
        :itemArray="bestClothes"
        isWhiteBackgroundEnabled
      />
      <item-row-with-headline-cell
        :textOfHeadline="brandingsTextOfHeadline"
        :itemArray="changedArrayOfBrandLogoImages"
        isBlueBackgroundEnabled
        isReversed
        isBlankPage
        isExternalPagesWithExternalUrls
      />
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import ItemRowWithHeadlineCell from "@/components/item-row-with-headline-cell/ItemRowWithHeadlineCell.vue";

export default {
  data() {
    return {
      clothesTextOfHeadline: "Top selling clothes for fishing",
      brandingsTextOfHeadline: "Most popular brands",
    };
  },

  components: {
    ItemRowWithHeadlineCell,
  },

  computed: {
    ...mapState(["bestClothes", "brandLogoImages"]),

    changedArrayOfBrandLogoImages() {
      return this.brandLogoImages
        .map(({ brandImageSrc, brandLink, brandName, type }) => ({
          itemImageSrc: brandImageSrc,
          itemName: brandName,
          itemLink: brandLink,
          type,
        }))
        .filter((el) => el.type === "fishing");
    },
  },
};
</script>

<style lang="scss" scoped>
.product-row {
  padding-block: 2rem;

  &__container {
    @include flexColumn(center, center, 2rem);
  }
}
</style>
