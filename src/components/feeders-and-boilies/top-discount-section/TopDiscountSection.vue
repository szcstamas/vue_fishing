<template>
  <section class="top-discount-section">
    <h4 class="top-discount-section__heading">Best deals</h4>
    <div class="container top-discount-section__container">
      <product-carousel :arrayOfProducts="sortedArrayOfBestDiscountedProducts" />
    </div>
  </section>
</template>

<script>
import ProductCarousel from '@/components/carousel/ProductCarousel.vue';
import { mapState } from "vuex";

export default {
  components: {
    ProductCarousel
  },

  computed: {
    ...mapState(["topDiscountProducts"]),

    sortedArrayOfBestDiscountedProducts() {
      return this.topDiscountProducts.toSorted((a, b) => {
        return b.rating - a.rating;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.top-discount-section {
  background-color: $secondary_color_unsaturated_light_gray;
  border-block: 15px solid $primary_color_dark_blue;
  padding-block: 2rem 3rem;
  position: relative;

  &__heading {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-205%);
    color: $primary_color_white;
    background-color: $primary_color_dark_blue;
    padding: 1rem 3rem 2rem 3rem;
    border-end-start-radius: 10px;
    border-end-end-radius: 10px;

    @media screen and (max-width: 1275px) {
      transform: translateX(-50%);
    }

    @media screen and (max-width: 560px) {
      text-align: center;
    }
  }

  &__container {
    @media screen and (max-width: 1275px) {
      margin-top: 4rem;
    }

    @media screen and (max-width: 560px) {
      margin-top: 2rem;
    }
  }
}
</style>
