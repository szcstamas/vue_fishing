<template>
  <section class="fishing-expo-section">
    <div class="container fishing-expo-section__container">
      <div class="fishing-expo-section__inner">
        <h4>{{ saveUpTo }}</h4>
        <p>
          {{ visitOurUpcomingFishingExpo }}
        </p>
        <white-button
          :buttonText="textOfExpoButton"
          isRounded
          @button-event="jumpToLink"
        />
      </div>
      <div class="fishing-expo-section__inner-image">
        <img
          src="@/assets/images/expo-images/fishing_expo_discount.png"
          alt="Discount of Fishing Expo"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import WhiteButton from "../site-buttons/WhiteButton.vue";

export default {
  components: {
    WhiteButton,
  },

  computed: {
    ...mapState("fishingExpo", [
      "saveUpTo",
      "visitOurUpcomingFishingExpo",
      "textOfExpoButton",
    ]),
  },

  methods: {
    jumpToLink() {
      window.open("https://horgaszshow.hu/hu/");
    },
  },
};
</script>

<style lang="scss" scoped>
.fishing-expo-section {
  padding-block: 5rem;
  background: url("@/assets/images/expo-images/fishing_expo_2023.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-bottom: 15px solid $primary_color_dark_blue;

  &__container {
    @include flexColumnOnMobile(space-between, center, 1rem, column, 850px);
  }

  &__inner {
    @include flexColumn(center, flex-start, 2rem);
    color: $primary_color_white;
    background-color: $primary_color_transparent_black_darker;
    padding: 2rem;
    border-radius: 10px;
    width: 50%;
    margin-right: auto;

    @media screen and (max-width: 850px) {
      width: 100%;
    }

    h4 {
      font-size: 54px;
    }
  }

  &__inner-image {
    @include flexColumn(center, center);

    aspect-ratio: 1/1;
    width: 25%;
    height: 25%;
    border-radius: 50%;
    background-color: $primary_color_white;
    animation: slow-levitate 4s ease-in-out infinite;

    @keyframes slow-levitate {
      0% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-10px);
      }
      100% {
        transform: translateY(0px);
      }
    }

    @media screen and (max-width: 850px) {
      width: 60%;
      height: 60%;
    }

    img {
      display: block;
      margin: auto;
      width: 75%;
      animation: slow-levitate 4s 0.5s ease-in-out infinite;

      @keyframes slow-levitate {
        0% {
          transform: translateY(10px);
        }
        50% {
          transform: translateY(-20px);
        }
        100% {
          transform: translateY(10px);
        }
      }
    }
  }
}
</style>
