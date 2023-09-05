<template>
  <div class="carousel-container">
    <div
      class="carousel-container__carousel-box"
      v-for="(
        { headline, productPrice, bannerImage }, index
      ) in arrayOfProducts"
      :style="{ transform: `translateX(${xValue}%)` }"
    >
      <div class="carousel-container__cell carousel-container__image-container">
        <img
          :src="bannerImage"
          :alt="`Image of best product of week: ${headline}`"
        />
      </div>
      <div class="carousel-container__cell carousel-container__text-container">
        <p class="carousel-container__text-container__headline">
          {{ headline }}
        </p>
        <p class="carousel-container__text-container__product-price">
          {{ productPrice }} €
        </p>
        <primary-blue-button
          :buttonText="'Check it out!'"
        ></primary-blue-button>
        <div
          class="carousel-container__arrow-container carousel-container__arrow-container--left"
          v-if="index != 0"
          @click="increaseXValue"
        >
          <svg
            width="75"
            height="88"
            viewBox="0 0 75 88"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.18557e-06 44L75 87.3013L75 0.698727L2.18557e-06 44Z"
              fill="white"
            />
          </svg>
        </div>
        <div
          class="carousel-container__arrow-container carousel-container__arrow-container--right"
          v-if="index != arrayOfProducts.length - 1"
          @click="decreaseXValue"
        >
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
  </div>
</template>

<script>
import PrimaryBlueButton from "../site-buttons/PrimaryBlueButton.vue";

export default {
  props: {
    arrayOfProducts: {
      type: Array,
      required: true,
    },
  },

  components: {
    PrimaryBlueButton,
  },

  data() {
    return {
      xValue: 0,
    };
  },

  methods: {
    increaseXValue() {
      return (this.xValue += 100);
    },
    decreaseXValue() {
      return (this.xValue -= 100);
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel-container {
  @include flexColumnOnMobile(space-between, center, 0, row);
  overflow: hidden;

  &__carousel-box {
    @include flexColumnOnMobile(space-between, center);
    position: relative;
    flex: 0 0 auto;
    width: 100%;
    transition: all 0.25s ease-in-out;
  }

  &__cell {
    flex: 1;
  }

  &__image-container {
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

    img {
      margin: auto;
      display: block;
      width: 50%;

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

    &__headline {
      font-size: 48px;
      line-height: 54px;
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
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    transition: all 0.15s ease-in-out;

    &--left {
      left: 5px;

      &:hover {
        transform: translateY(-60%);
        box-shadow: 0px 10px 10px $primary_color_transparent_black;
        background-color: $secondary_color_dark_gray;
      }

      svg {
        width: 20px;
        height: 20px;
        transform: translateX(-3px);
      }
    }

    &--right {
      right: 5px;

      &:hover {
        transform: translateY(-60%);
        box-shadow: 0px 10px 10px $primary_color_transparent_black;
        background-color: $secondary_color_dark_gray;
      }

      svg {
        width: 20px;
        height: 20px;
        transform: translateX(3px);
      }
    }
  }
}
</style>
