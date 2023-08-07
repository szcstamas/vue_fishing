<template>
  <subpage-hero-section v-bind="feedersAndBoiliesHeroContent" />
</template>

<script>
import SubpageHeroSection from "@/components/feeders-and-boilies/hero-section/SubpageHeroSection.vue";

export default {
  components: { SubpageHeroSection },
  data() {
    return {
      feedersAndBoiliesHeroContent: {
        url: require("@/assets/images/footer_images/footer_background_image.jpeg"),
        headline: "Feeders and boilies",
        subline:
          "Our beloved products are always available in a wide range on our website.",
        span: "Hurry up!",
      },
    };
  },
};
</script>

<style lang="scss"></style>
