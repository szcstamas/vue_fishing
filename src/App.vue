<template>
  <site-header />
  <router-view />
</template>

<script>
import SiteHeader from "./components/SiteHeader.vue";

export default {
  components: {
    SiteHeader,
  },
};
</script>

//GLOBAL STYLE-DEFINITIONS
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  section {
    padding-inline: 2rem;

    .container {
      max-width: 1200px;
      width: 100%;
      margin: auto;

      &__flex {
        @include flexColumn(center, center, 0.5rem);
      }
    }
  }
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $primary_color;
    &.router-link-exact-active {
      color: $secondary_color;
    }
  }
}
</style>

//GLOBAL CUSTOM-CLASSES
<style lang="scss">
.flex-column-mobile {
  @include flexColumnOnMobile(center, center);
}
.flex-column {
  @include flexColumn(center, center);
}
.grid-responsive-columns {
  @include gridResponsiveColumnLayout();
}
</style>
