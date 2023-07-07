<template>
  <button :class="{ rounded: isRounded, 'width-auto': isWidthAuto }" @click="$emit('buttonEvent')">{{ buttonText }}</button>
</template>

<script>
export default {
  props: {
    buttonText: String,
    isRounded: Boolean,
    isWidthAuto: Boolean
  }
};
</script>

<style lang="scss" scoped>
button {
  appearance: none;
  border: none;
  outline: none;
  color: $primary_color_white;
  background-color: $secondary_color_dark_gray;
  font-family: inherit;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  width: 100%;
  padding: 1rem 2rem;
  cursor: pointer;
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
