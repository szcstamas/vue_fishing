<template>
  <section class="top-selling-products-section">
    <div class="container top-selling-products-section__container">
      <h2>Featured collection</h2>
      <div class="top-selling-products-section__title-image-container">
        <img
          class="top-selling-products-section__title-image"
          src="@/assets/images/title-hook.png"
          alt="Fishing hook decoration"
        />
      </div>
      <div class="top-selling-products-section__item-container">
        <router-link
          to="/feeders-and-boilies"
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
        </router-link>
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
  },
};
</script>

<style lang="scss" scoped>
.top-selling-products-section {
  background-color: $secondary_color_unsaturated_light_gray;
  padding-bottom: 4rem;
  border-top: 15px solid $primary_color_dark_blue;

  &__container {
    max-width: 1780px;

    h2 {
      text-transform: uppercase;
      text-align: center;
      padding-top: 6rem;
      color: $primary_color_dark_blue;
    }

    .top-selling-products-section__title-image-container {
      margin-block: 3rem;
      position: relative;

      &::after,
      &::before {
        content: "";
        position: absolute;
        height: 2px;
        width: calc(50% - 70px);
        top: 50%;
        background-color: $secondary_color_light_gray;
      }

      &::before {
        right: 0;
      }

      .top-selling-products-section__title-image {
        width: 70px;
        display: block;
        margin: auto;
        animation: swinging 3s ease-in-out infinite;
        transform-origin: top;

        @keyframes swinging {
          0% {
            rotate: -40deg;
          }
          50% {
            rotate: 40deg;
          }
          100% {
            rotate: -40deg;
          }
        }
      }
    }
  }

  &__item-container {
    @include gridResponsiveColumnLayout();
    gap: 4rem;
  }

  &__item-box {
    @include flexColumn(space-between, stretch);
    height: 100%;
    background-color: $primary_color_white;
    padding: 1rem;
    box-shadow: 0px 40px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.25s ease-in;
    position: relative;
    overflow: hidden;
    text-decoration: none;
    color: inherit;

    &:nth-child(2n) {
      button {
        background-color: $primary_color_dark_blue;
      }
    }

    &:hover {
      transform: translateY(-5px);
      animation: changeOpacity 0.5s linear;
    }

    &::after {
      content: "";
      position: absolute;
      width: 50px;
      height: 100%;
      background-color: $primary_color_white;
      transition: transform 0.25s ease-in-out;
      transform: skew(-45deg) translate(-650%, 0%);
      opacity: 0.25;
    }

    &:hover:after {
      animation: changePosition 0.25s linear;
    }

    @keyframes changeOpacity {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0.5;
      }
      100% {
        opacity: 1;
      }
    }

    @keyframes changePosition {
      from {
        transform: skew(-45deg) translate(-650%, 0%);
      }
      to {
        transform: skew(-45deg) translate(1580%, 0%);
      }
    }

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

  &__price-container {
    font-size: 20px;
  }
}
</style>
