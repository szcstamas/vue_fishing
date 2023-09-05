<template>
  <section class="two-columns-grid-section">
    <div class="container two-columns-grid-section__container">
      <div class="two-columns-grid-section__grid-container">
        <router-link
          :to="url"
          v-for="{
            title,
            background,
            url,
            content,
          } in arrayOfGridSections"
          :key="`Link box of ${title} in home page grid-section`"
          :style="{
            background: `url('${background}') no-repeat center center`,
            backgroundSize: 'cover',
          }"
          class="two-columns-grid-section__grid-box"
        >
          <div class="two-columns-grid-section__grid-box__text-container">
            <h4>{{ title }}</h4>
            <p>
              {{ content }}
            </p>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    arrayOfGridSections: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.two-columns-grid-section {
  &__grid-container {
    display: grid;
    grid-template-columns: repeat(4, minmax(200px, 1fr));
    gap: 1rem;
    padding-block: 1rem;

    @media screen and (max-width: 930px) {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

      .two-columns-grid-section__grid-box {
        &:nth-child(1) {
          grid-area: auto;
        }

        &:nth-child(2) {
          grid-area: auto;
        }
      }
    }
  }

  &__grid-box {
    @include flexColumn(center, center);

    text-decoration: none;
    color: $primary_color_white;
    background-color: $primary_color_dark_blue !important;
    padding: 2rem;
    text-align: center;
    aspect-ratio: 1/1;
    border-radius: 10px;
    position: relative;
    overflow: hidden;

    &:nth-child(1) {
      grid-area: 1 / 1 / 1 / 3;
    }

    &:nth-child(2) {
      grid-area: 1 / 3 / 1 / 5;
    }

    &:hover {
      .two-columns-grid-section__grid-box__text-container {
        background-color: $primary_color_transparent_black;

        h4 {
          opacity: 0;
        }

        p {
          transform: translate(-50%, -50%);
        }
      }
    }

    &__text-container {
      @include flexColumn(center, center);

      position: absolute;
      background-color: transparent;
      width: 100%;
      height: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.1s ease-in-out;

      h4 {
        font-family: "DM Sans", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        font-size: 24px;
        letter-spacing: 2px;
        text-shadow: 0px 10px 10px rgba(0, 0, 0, 1);
        transition: all 0.5s ease-in-out;
      }

      p {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 80%;
        font-size: 18px;
        transform: translate(-50%, 500px);
        transition: transform 1s ease-in-out;
      }

      h4,
      p {
        pointer-events: none;
      }
    }
  }
}
</style>
