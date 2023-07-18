<template>
  <section class="grid-section">
    <div class="container grid-section__container">
      <div class="grid-section__grid-container">
        <router-link
          to="/feeders-and-boilies"
          v-for="(headline, index) in homepageGridSectionHeadlines"
          :key="`Link box of ${headline} in home page grid-section`"
          :style="{
            background: `url('${homepageGridSectionBackgroundImages[index]}') no-repeat center right`,
            backgroundSize: 'cover',
          }"
          class="grid-section__grid-box"
        >
          <div class="grid-section__grid-box__text-container">
            <h4>{{ headline }}</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              consequatur! Aliquam amet cumque, autem earum pariatur error totam
              cum itaque?
            </p>
            <router-link to="/feeders-and-boilies">
              <white-button
                isRounded
                isWidthAuto
                :buttonText="'Visit Subpage'"
              />
            </router-link>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import WhiteButton from "../site-buttons/WhiteButton.vue";
import { mapState } from "vuex";

export default {
  components: {
    WhiteButton,
  },
  computed: {
    ...mapState([
      "homepageGridSectionHeadlines",
      "homepageGridSectionBackgroundImages",
    ]),
  },
};
</script>

<style lang="scss" scoped>
.grid-section {
  &__container {
    max-width: 1780px;
  }

  &__grid-container {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    padding: 0;
    padding-block: 1rem;

    @media screen and (max-width: 1200px) {
      padding-block: 2rem;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
    @media screen and (max-width: 700px) {
      grid-template-columns: auto;
    }
  }

  &__grid-box {
    text-decoration: none;
    color: inherit;
    border-radius: 10px;
    overflow: hidden;

    &__text-container {
      @include flexColumn(center, flex-start);
      padding: 2rem 3rem;
      transition: all 0.5s ease-in-out;
      height: 100%;
      position: relative;
      isolation: isolate;

      &::after,
      &::before {
        content: "";
        position: absolute;
        transition: all 0.25s ease-in-out;
      }

      &::after {
        width: 75%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.45);
        z-index: -1;
      }

      &::before {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: $primary_color_white;
        right: 0;
        bottom: 0;
        transform: translate(200%, 200%);
        transition-delay: .25s;
      }

      &:hover:after {
        background-color: rgba(0, 0, 0, 0.55);
        width: 100%;
      }

      &:hover:before {
        transform: translate(-200%, -200%);
      }

      h4,
      p {
        color: $primary_color_white;
      }

      p {
        width: 75%;
      }
    }

    &:nth-child(2) {
      grid-area: 1 / 2 / 3 / 3;
    }

    &:last-child {
      grid-area: 3 / 3 / 2 / 3;
    }

    @media screen and (max-width: 1200px) {
      &:nth-child(2) {
        grid-area: auto;
      }

      &:last-child {
        grid-area: auto;
      }
    }
  }
}
</style>
