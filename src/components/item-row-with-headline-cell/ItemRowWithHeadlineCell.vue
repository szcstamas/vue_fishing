<template>
  <div
    class="item-row-with-headline-cell"
    :class="{ 'reverse-row': isReversed }"
  >
    <div
      class="item-row-with-headline-cell__box item-row-with-headline-cell__headline-cell"
    >
      {{ textOfHeadline }}
    </div>
    <a
      v-if="isExternalPagesWithExternalUrls"
      v-for="{
        itemImageSrc,
        itemName,
        itemLink,
      } in itemArrayMaxOfThreeElements"
      :href="itemLink"
      :target="isBlankPage ? '_blank' : '_self'"
      class="item-row-with-headline-cell__box item-row-with-headline-cell__content-cell"
      :class="{
        'blue-background': isBlueBackgroundEnabled,
        'white-background': isWhiteBackgroundEnabled,
      }"
    >
      <h5>{{ itemName }}</h5>
      <img :src="itemImageSrc" :alt="`Item image of ${itemName}`" />
    </a>
    <router-link
      v-else
      v-for="{
        itemImageSrc,
        itemName,
        itemLink,
      } in itemArrayMaxOfThreeElements"
      :to="itemLink"
      class="item-row-with-headline-cell__box item-row-with-headline-cell__content-cell"
      :class="{
        'blue-background': isBlueBackgroundEnabled,
        'white-background': isWhiteBackgroundEnabled,
      }"
    >
      <h5>{{ itemName }}</h5>
      <img :src="itemImageSrc" :alt="`Item image of ${itemName}`" />
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    isReversed: Boolean,
    isBlueBackgroundEnabled: Boolean,
    isWhiteBackgroundEnabled: Boolean,
    isBlankPage: Boolean,
    isExternalPagesWithExternalUrls: Boolean,
    textOfHeadline: {
      type: String,
      required: true,
    },
    itemArray: {
      type: Array,
      required: true,
    },
  },

  computed: {
    itemArrayMaxOfThreeElements() {
      return this.itemArray.slice(0, 3);
    },
  },
};
</script>

<style lang="scss" scoped>
.reverse-row {
  flex-direction: row-reverse;
}

.item-row-with-headline-cell {
  @include flexColumnOnMobile(center, center);

  .white-background {
    background-color: $primary_color_white;
  }

  .blue-background {
    background-color: $primary_color_dark_blue;
  }

  &__box {
    border-radius: 10px;
    aspect-ratio: 1/1;
    padding: 2rem;
    flex: 1;
  }

  &__headline-cell {
    @include flexColumn(center, center);

    background-color: $secondary_color_unsaturated_light_gray;
    color: $primary_color_dark_blue_lowest;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 32px;
    line-height: 42px;
    text-align: center;
    pointer-events: none;
  }

  &__content-cell {
    overflow: hidden;
    box-shadow: 0px 40px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.25s ease-in-out;
    position: relative;

    &:hover {
      transform: translateY(-10px);

      h5 {
        transform: translateY(0);
      }
    }

    h5 {
      font-size: 20px;
      line-height: 25px;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: $primary_color_white;
      background-color: $primary_color_transparent_black;
      padding: 2rem;
      width: 100%;
      left: 0;
      bottom: 0;
      position: absolute;
      transform: translateY(100%);
      transition: all .25s ease-in-out;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
