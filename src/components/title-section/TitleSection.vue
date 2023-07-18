<template>
  <section class="title-section">
    <div class="container title-section__container">
      <div class="title-section__right-column">
        <h1>BERKLEY FISHING</h1>
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
      <div v-for="{ brandLink, brandName } in brandLogoImages" :key="`Key of ${brandName} company`" class="title-section__branding-logo-box">
        <img :src="brandLink" :alt="`Image of ${brandName} company`" />
      </div>
    </div>
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
    };
  },
  computed: {
    ...mapState(["brandLogoImages"]),
  },
};
</script>

<style lang="scss" scoped>
.title-section {
  background: url("@/assets/images/landing-page__hero.jpg") no-repeat center top;
  background-size: cover;
  position: relative;

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
    @include flexColumnOnMobile(space-between, center);

    background-color: $primary_color_transparent_black;
    backdrop-filter: blur(2px);
    color: $primary_color_white;
    padding: 2rem;
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;

    img {
      max-height: 125px;
    }
  }
}
</style>
