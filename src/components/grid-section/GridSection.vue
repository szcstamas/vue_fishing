<template>
  <section class="grid-section">
    <div class="container grid-section__container">
      <div class="grid-section__grid-container">
        <div
          v-for="(headline, index) in homepageGridSectionHeadlines"
          :style="{
            background: `url('${homepageGridSectionBackgroundImages[index]}') no-repeat center right`,
            backgroundSize: 'cover',
          }"
          class="grid-section__grid-box"
        >
          <h4>{{ headline }}</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
            consequatur! Aliquam amet cumque, autem earum pariatur error totam
            cum itaque?
          </p>
          <router-link to="/feeders-and-boilies">
            <white-button isWidthAuto :buttonText="'Visit Subpage'" />
          </router-link>
        </div>
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
    @include flexColumn(center, flex-start);

    padding: 2rem 3rem;
    h4,
    p {
      color: $primary_color_white;
    }

    p {
      width: 70%;
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
