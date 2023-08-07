<template>
  <section
    class="subpage-hero-section"
    :style="{
      background: `url('${url}') no-repeat center`,
      backgroundSize: 'cover',
    }"
  >
    <div class="container subpage-hero-section__container">
      <span>{{ span }}</span>
      <h1>{{ headline }}</h1>
      <p>
        {{ subline }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    url: { type: String, required: true },
    span: { type: String, required: true },
    headline: { type: String, required: true },
    subline: { type: String, required: true },
  },
};
</script>

<style lang="scss" scoped>
.subpage-hero-section {
  padding-block: 6rem;

  &__container {
    @include flexColumn(center, center);
    text-align: center;
    background: $primary_color_transparent_black;
    padding: 2rem;
    color: $primary_color_white;
    background-color: $primary_color_transparent_black;
    backdrop-filter: blur(3px);
    border-radius: 10px;

    span {
      text-transform: uppercase;
      font-weight: bold;
      color: $primary_color;
    }

    p {
      font-size: 18px;
    }
  }
}
</style>
