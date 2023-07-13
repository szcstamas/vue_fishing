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
            {{ getNumberOfStars(product.rating) }}
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
    ...mapState(["topSellingProducts"]),
    ratingStarsOfTopProducts() {},
  },

  methods: {
    getNumberOfStars(number) {
      switch (number) {
        case 1:
          return "⭐";
          break;
        case 2:
          return "⭐⭐";
          break;
        case 3:
          return "⭐⭐⭐";
          break;
        case 4:
          return "⭐⭐⭐⭐";
          break;
        case 5:
          return "⭐⭐⭐⭐⭐";
          break;
      }
    },
  },
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
    @include flexColumnOnMobile(flex-start, stretch, 8rem, column, 1100px);

    @media screen and (max-width: 1400px) { @include flexColumnOnMobile(flex-start, stretch, 4rem); }
    @media screen and (max-width: 800px) { @include flexColumnOnMobile(flex-start, stretch, 2rem); }
  }

  &__item-box {
    @include flexColumn(space-between, stretch);
    flex: 1;

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
