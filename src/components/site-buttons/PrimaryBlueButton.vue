<template>
  <button :class="{ rounded: isRounded, 'width-auto': isWidthAuto, 'small-rounded': isSmallRounded }" @click="$emit('buttonEvent')">{{ buttonText }}</button>
</template>

<script>
export default {
  props: {
    buttonText: String,
    isRounded: Boolean,
    isWidthAuto: Boolean,
    isSmallRounded: Boolean
  }
};
</script>

<style lang="scss" scoped>
button {
  appearance: none;
  border: none;
  outline: none;
  color: $primary_color_white;
  background-color: $primary_color_dark_blue;
  font-family: inherit;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  width: 100%;
  padding: 1rem 2rem;
  cursor: pointer;
}

.rounded {
  border-radius: 10px;
}

.small-rounded {
  border-radius: 4px;
}

.width-auto {
  width: auto;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
}
</style>
