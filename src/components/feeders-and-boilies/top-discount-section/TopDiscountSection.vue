<template>
  <section class="top-discount-section">
    <h4 class="top-discount-section__heading">Best deals</h4>
    <div
      v-for="{
        headline,
        productPrice,
        bannerImage,
      } in arrayOfBestRatedProductObjectFromTopSellingProductsWithLowestPrice"
      class="container top-discount-section__container"
    >
      <div
        class="top-discount-section__box top-discount-section__image-container"
      >
        <img
          :src="bannerImage"
          :alt="`Image of best product of week: ${headline}`"
        />
      </div>
      <div
        class="top-discount-section__box top-discount-section__text-container"
      >
        <p class="top-discount-section__text-container__headline">
          {{ headline }}
        </p>
        <p class="top-discount-section__text-container__product-price">
          {{ productPrice }} €
        </p>
        <primary-blue-button
          :buttonText="'Check it out!'"
        ></primary-blue-button>
        <div class="top-discount-section__arrow-container">
          <svg
            width="75"
            height="88"
            viewBox="0 0 75 88"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M75 44L-4.07833e-06 87.3013L-2.92811e-07 0.698727L75 44Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import PrimaryBlueButton from "../../site-buttons/PrimaryBlueButton.vue";

export default {
  components: {
    PrimaryBlueButton,
  },

  computed: {
    ...mapState(["topSellingProducts"]),

    arrayOfBestRatedProductObjectFromTopSellingProductsWithLowestPrice() {
      const filteredProducts = this.topSellingProducts
        .filter(({ rating }) => rating === 5)
        .reduce((prev, curr) =>
          prev.productPrice < curr.productPrice ? prev : curr
        );
      return [filteredProducts];
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
    @include flexColumnOnMobile(space-between, center);
    position: relative;

    @media screen and (max-width: 1275px) {
      margin-top: 4rem;
    }

    @media screen and (max-width: 560px) {
      margin-top: 2rem;
    }
  }

  &__image-container {
    img {
      margin: auto;
      display: block;
      width: 50%;
      animation: levitating 5s ease-in-out infinite;

      @keyframes levitating {
        0% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-15px);
        }
        100% {
          transform: translateY(0px);
        }
      }

      @media screen and (max-width: 1275px) {
        width: 70%;
      }

      @media screen and (max-width: 900px) {
        width: 100%;
      }
    }
  }

  &__text-container {
    @include flexColumn(center, flex-start, 0);

    &__head-section {
      font-size: 48px;
      color: $primary_color_dark_blue;
      margin-bottom: 2rem;
    }

    &__headline {
      font-size: 48px;
      line-height: 48px;
      font-weight: bold;
      margin-bottom: 3rem;

      @media screen and (max-width: 560px) {
        margin-bottom: 2rem;
      }
    }

    &__product-price {
      font-weight: bold;
      padding: 25px;
      border-radius: 10px 10px 0px 0px;
      background-color: $primary_color_white;
      font-size: 24px;
      width: 50%;
      text-align: center;

      @media screen and (max-width: 1275px) {
        width: 100%;
      }
    }

    button {
      width: 50%;
      border-radius: 0px 0px 10px 10px;
      transition: all 0.1s ease-in-out;
      font-size: 20px;

      &:hover {
        background-color: $primary_color_dark_blue_lowest;
      }

      @media screen and (max-width: 1275px) {
        width: 100%;
      }

      @media screen and (max-width: 580px) {
        font-size: 24px;
      }
    }
  }

  &__arrow-container {
    @include flexColumn(center, center);

    background-color: $primary_color_dark_blue;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    transition: all 0.15s ease-in-out;

    &:hover {
      transform: translateY(-50%) translateX(8px);
      box-shadow: 0px 10px 10px $primary_color_transparent_black;
      background-color: $secondary_color_dark_gray;
    }

    svg {
      width: 20px;
      height: 20px;
    }

    @media screen and (max-width: 1275px) {
      top: -10%;
    }

    @media screen and (max-width: 560px) {
      top: 0%;
    }
  }

  &__box {
    flex: 1;
  }
}
</style>
