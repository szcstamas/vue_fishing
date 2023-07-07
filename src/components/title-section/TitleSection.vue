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
          <white-button isWidthAuto :buttonText="shopMore" />
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import WhiteButton from "@/components/site-buttons/WhiteButton.vue";

export default {
  components: { WhiteButton },
  data() {
    return {
      shopMore: "Shop more",
    };
  },
};
</script>

<style lang="scss" scoped>
.title-section {
  &__container {
    padding-block: 15rem 30rem;
  }

  &__right-column {
    @include flexColumn(flex-start, flex-start, 2rem);

    width: 100%;
    max-width: 600px;
    margin-left: auto;
    color: $primary_color_white;
    background-color: rgb(0, 0, 0, 0.5);
    backdrop-filter: opacity(50%);
    padding: 2rem;
  }
}
</style>
