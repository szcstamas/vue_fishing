<template>
  <button
    :class="{ rounded: isRounded, 'width-auto': isWidthAuto }"
    @click="$emit('buttonEvent')"
  >
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  props: {
    buttonText: String,
    isRounded: Boolean,
    isWidthAuto: Boolean,
  },
};
</script>

<style lang="scss" scoped>
button {
  appearance: none;
  border: none;
  outline: none;
  color: $secondary_color_dark_gray;
  background-color: $primary_color_white;
  font-family: inherit;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  width: 100%;
  padding: 1rem 2rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  transition: all .25s ease-in-out;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    left: -110%;
    top: 0;
    position: absolute;
    background-color: $primary_color_dark_blue;
    z-index: -1;
    transition: all .25s ease-in-out;
    transform: skew(-20deg);
  }

  &:hover {
    color: $primary_color_white;

    &:after {
      left: 10%;
    }
  }
}

.rounded {
  border-radius: 4px;
}

.width-auto {
  width: auto;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
}
</style>
