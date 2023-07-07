<template>
  <site-header />
  <router-view />
</template>

<script>
import SiteHeader from "./components/site-header/SiteHeader.vue";

export default {
  components: {
    SiteHeader,
  },
};
</script>

//GLOBAL STYLE-DEFINITIONS
<style lang="scss">
/* Roboto Slab for headlines */
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;500;700;900&display=swap");
/* Ubuntu for main texts */
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,400;1,500;1,700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Ubuntu", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

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

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Roboto Slab", "Ubuntu", "Segoe UI", Tahoma, Geneva, Verdana,
    sans-serif;
  line-height: 1;
}

h1 {
  font-size: 64px;
}

p, span {
  font-size: 16px;
  line-height: 24px;
}

form {
  input[type="text"],
  input[type="number"],
  input[type="submit"],
  input[type="password"] {
    font-family: inherit;
    font-size: 16px;
    appearance: none;
    padding: 1rem;
    border: none;
    border-radius: 4px;
    background-color: #ededed;

    &:focus,
    &:active {
      border: none;
      outline: none;
    }

    &::placeholder {
      font-family: inherit;
    }
  }

  input[type="submit"] {
    cursor: pointer;
    background-color: $primary_color_dark_blue;
    color: $primary_color_white;
    transition: all 0.1s ease-in-out;
    font-weight: bold;

    &:hover {
      background-color: $secondary_color_dark_green;
    }
  }
}

*::-webkit-scrollbar {
  width: 25px;
  background-color: $primary_color_dark_blue;
}

*::-webkit-scrollbar-thumb {
  border: 6px solid $primary_color_dark_blue;
  background-color: $primary_color_white;
}
</style>

//GLOBAL CUSTOM-CLASSES
<style lang="scss">
.flex-column-mobile-center {
  @include flexColumnOnMobile(center, center);
}
.flex-column-mobile-start {
  @include flexColumnOnMobile(flex-start, center);
}
.flex-column-center {
  @include flexColumn(center, center);
}
.flex-column-start {
  @include flexColumn(flex-start, center);
}
.grid-responsive-columns {
  @include gridResponsiveColumnLayout();
}
</style>
