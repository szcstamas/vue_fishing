<template>
  <section class="product-row">
    <div class="product-row__spacer"></div>
    <div class="container product-row__container">
      <item-row-with-headline-cell
        :textOfHeadline="headlineOfFirstRow"
        :itemArray="arrayOfFirstRow"
        isWhiteBackgroundEnabled
      />
      <item-row-with-headline-cell
        :textOfHeadline="headlineOfSecondRow"
        :itemArray="arrayOfSecondRow"
        isBlueBackgroundEnabled
        isReversed
        isBlankPage
        isExternalPagesWithExternalUrls
      />
    </div>
  </section>
</template>

<script>
import ItemRowWithHeadlineCell from "@/components/item-row-with-headline-cell/ItemRowWithHeadlineCell.vue";

export default {
  props: {
    headlineOfFirstRow: {
      type: String,
      required: true,
    },
    headlineOfSecondRow: {
      type: String,
      required: true,
    },
    arrayOfFirstRow: {
      type: Array,
      required: true,
    },
    arrayOfSecondRow: {
      type: Array,
      required: true,
    },
  },

  components: {
    ItemRowWithHeadlineCell,
  },
};
</script>

<style lang="scss" scoped>
.product-row {
  padding-block: 2rem;
  position: relative;
  isolation: isolate;

  &__spacer {
    position: absolute;
    top: 49%;
    left: 0;
    height: 1rem;
    background-color: $secondary_color_unsaturated_light_gray;
    width: 100%;
    z-index: -1;

    @media screen and (max-width: 560px) {
      top: 50%;
    }
  }

  &__container {
    @include flexColumn(center, center, 4rem);
  }
}
</style>
