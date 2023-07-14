<template>
  <section class="top-selling-products-section">
    <div class="container top-selling-products-section__container">
      <h2>Featured collection</h2>
      <div class="top-selling-products-section__item-container">
        <div
          v-for="(product, index) in topSellingProducts"
          class="top-selling-products-section__item-box"
        >
          <div class="top-selling-products-section__item-box__image-container">
            <img
              :src="product.bannerImage"
              :alt="'Picture of ' + product.headline"
            />
          </div>
          <h4>{{ product.headline }}</h4>
          <div class="top-selling-products-section__rating-container">
            {{ starRatings[product.rating] }}
          </div>
          <div class="top-selling-products-section__price-container">
            {{ product.productPrice }}
          </div>
          <dark-gray-button :buttonText="'Add to cart'"></dark-gray-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import DarkGrayButton from "../site-buttons/DarkGrayButton.vue";

export default {
  components: {
    DarkGrayButton,
  },

  computed: {
    ...mapState(["topSellingProducts", "starRatings"]),
  }
};
</script>

<style lang="scss" scoped>
.top-selling-products-section {
  padding-bottom: 4rem;

  &__container {
    max-width: 1780px;

    h2 {
      text-transform: uppercase;
      text-align: center;
      padding-block: 6rem;
    }
  }

  &__item-container { 
    @include gridResponsiveColumnLayout();
    gap: 4rem;
  }

  &__item-box {
    @include flexColumn(space-between, stretch);
    height: 100%;

    &__image-container {
      width: 100%;
      height: 300px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
