<template>
  <section
    class="title-section"
    :class="{ 'fade-in': isFadeEnabled }"
    :style="{
      background: `url('${titleSectionBackgroundImages[backgroundImageIndex]}') no-repeat center top`,
      backgroundSize: 'cover',
    }"
  >
    <div class="container title-section__container">
      <div class="title-section__right-column">
        <h1>BERKLEY FISHING</h1>
        {{ increasedBackgroundImageIndex(backgroundImageIndex) }}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
          consequatur! Aliquam amet cumque, autem earum pariatur error totam cum
          itaque?
        </p>
        <router-link to="/about">
          <white-button isRounded isWidthAuto :buttonText="shopMore" />
        </router-link>
      </div>
    </div>
    <div class="title-section__branding-container">
      <div class="title-section__branding-container__headline">
        <h4>Our partners</h4>
      </div>
      <div
        v-for="{ brandLink, brandName } in brandLogoImages"
        :key="`Key of ${brandName} company`"
        class="title-section__branding-logo-box"
      >
        <img :src="brandLink" :alt="`Image of ${brandName} company`" />
      </div>
    </div>
    <div class="title-section__blurred-background"></div>
  </section>
</template>

<script>
import WhiteButton from "@/components/site-buttons/WhiteButton.vue";
import { mapState } from "vuex";

export default {
  components: { WhiteButton },
  data() {
    return {
      shopMore: "Shop more",
      backgroundImageIndex: 0,
      isFadeEnabled: false,
    };
  },
  computed: {
    ...mapState(["brandLogoImages", "titleSectionBackgroundImages"]),
  },
  methods: {
    increasedBackgroundImageIndex(index) {
      setTimeout(() => {
        setTimeout(() => {
          this.backgroundImageIndex <=
          this.titleSectionBackgroundImages.length - 2
            ? (this.backgroundImageIndex += 1)
            : (this.backgroundImageIndex = 0);
        }, 3000);
      }, 3000);
    },
  },
};
</script>

<style lang="scss" scoped>
.title-section {
  position: relative;
  isolation: isolate;

  &__container {
    padding-block: 15rem 30rem;
  }

  &__right-column {
    @include flexColumn(flex-start, flex-start, 2rem);

    width: 100%;
    max-width: 600px;
    margin-left: auto;
    color: $primary_color_white;
    background-color: rgb(0, 0, 0, 0.45);
    backdrop-filter: blur(3px);
    padding: 2rem;
    border-radius: 10px;
    animation: blurChange 2s ease-in-out infinite;

    @keyframes blurChange {
      0% {
        backdrop-filter: blur(3px);
      }
      50% {
        backdrop-filter: blur(0px);
      }
      100% {
        backdrop-filter: blur(3px);
      }
    }
  }

  &__branding-container {
    @include flexColumnOnMobile(space-between, center, 1rem, column, 850px);
    flex-wrap: wrap;

    background-color: $primary_color_transparent_black;
    backdrop-filter: blur(2px);
    color: $primary_color_white;
    padding: 2rem;
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    border-top: 3px solid $primary_color_white;

    @media screen and (max-width: 1050px) {
      @include flexColumnOnMobile(center, center);
    }

    @media screen and (max-width: 852px) {
      position: static;
    }

    @media screen and (max-width: 722px) {
      padding-top: 6rem;
    }

    &__headline {
      position: absolute;
      padding: 2rem;
      background-color: $primary_color_dark_blue_lowest;
      backdrop-filter: blur(5000px);
      border: 3px solid $primary_color_white;
      border-radius: 10px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -150%);
      text-align: center;

      @media screen and (max-width: 1050px) {
        transform: translate(-50%, -225%);
      }

      @media screen and (max-width: 850px) {
        transform: translate(-50%, -575%);
      }

      @media screen and (max-width: 722px) {
        width: 80%;
        transform: translate(-50%, -610%);
      }

      @media screen and (max-width: 482px) {
        transform: translate(-50%, -475%);
      }
    }
  }

  &__branding-logo-box {
    place-self: center;
    width: clamp(125px, 125px, 125px);

    img {
      max-height: 125px;
    }
  }

  &__blurred-background {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    backdrop-filter: blur(20px);
    background: $primary_color_transparent_white;
    animation: fade-in 6s ease-in-out infinite;

    @keyframes fade-in {
      0% { opacity: 1; }
      10% { opacity: 0; }
      90% { opacity: 0; }
      100% { opacity: 1; }
    }
  }
}
</style>
