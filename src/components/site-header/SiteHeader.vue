<template>
  <header class="site-header">
    <div class="site-header__top-line">
      <div class="site-header__search-form site-header--display-none-tablet">
        <form action="">
          <input type="text" placeholder="Search..." />
          <input type="submit" value="SEARCH" />
        </form>
      </div>

      <div class="site-header__logo-container">
        <router-link to="/">
          <img
            src="@/assets/images/site-header__logo.png"
            alt="Fishing site header logo"
          />
        </router-link>
      </div>

      <div class="site-header__language-container">
        <a href="#">EN</a>
        <span>|</span>
        <a href="#">HU</a>
      </div>
    </div>
    <div class="site-header__middle-line site-header--display-on-tablet">
      <form action="">
        <input type="text" placeholder="Search..." />
        <input type="submit" value="SEARCH" />
      </form>
    </div>
    <div class="site-header__button-line site-header--display-on-tablet">
      <dark-gray-button
        :buttonText="showMobileMenu ? hideMobileMenuText : showMobileMenuText"
        @button-event="showMobileMenu = !showMobileMenu"
      />
    </div>
    <nav v-if="showMobileMenu" class="site-header__bottom-navigation">
      <router-link
        v-for="(link, index) in headerLinkHrefs"
        :key="`Links of ${headerLinkTexts[index]} in site-header component`"
        :style="{
          background: `url('${headerLinkActiveBackgrounds[index]}') no-repeat center right`,
          backgroundSize: '70%',
        }"
        :to="link"
        >{{ headerLinkTexts[index] }}</router-link
      >
    </nav>
  </header>
</template>

<script>
import DarkGrayButton from "@/components/site-buttons/DarkGrayButton.vue";
import { mapState, mapGetters } from "vuex";

export default {
  components: {
    DarkGrayButton,
  },

  data() {
    return {
      showMobileMenu: true,
      showMobileMenuText: "Show menu",
      hideMobileMenuText: "Hide menu",
    };
  },

  computed: {
    ...mapState([
      "headerLinkHrefs",
      "headerLinkTexts",
      "headerLinkActiveBackgrounds",
    ]),
  },
};
</script>

<style lang="scss" scoped>
.site-header {
  @include flexColumn(center, center, 0);
  background-color: #ffffff;
  width: 100%;

  a {
    font-weight: bold;
    color: $primary_color_dark_blue;
    text-decoration: none;
  }

  &__top-line {
    @include flexColumnOnMobile(space-between, center, 1rem, column, 300px);

    width: 100%;
    max-width: 1400px;
    margin: auto;
    padding: 1rem;
  }

  &__search-form {
    form {
      @include flexColumnOnMobile(center, center);

      margin-right: auto;

      input[type="submit"] {
        width: 100%;
      }
    }
  }

  &__middle-line {
    @include flexColumnOnMobile(center, center, 0rem, row);
    width: 100%;

    form {
      width: 100%;

      input[type="text"],
      input[type="submit"] {
        width: 100%;
        border-radius: 0;
      }
    }
  }

  &__button-line {
    @include flexColumn(center, center);
    height: 100%;
    width: 100%;
  }

  &__logo-container {
    a {
      width: clamp(150px, 100%, 250px);

      img {
        width: clamp(150px, 100%, 250px);
        object-fit: cover;
        opacity: 0.75;
        margin: auto;
        display: block;
      }
    }
  }

  &__language-container {
    font-size: 18px;

    a {
      isolation: isolate;
      position: relative;
      transition: all 0.1s ease-in-out;
      z-index: 1;

      &:hover {
        transform: translateY(-5px);
        color: $primary_color_white;
      }

      &::after {
        content: "";
        opacity: 1;
        position: absolute;
        width: 60px;
        height: 40px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transform-origin: center;
        border-radius: 4px;
        background-color: $primary_color_dark_blue;
        transition: all 0.1s ease-in-out;
        z-index: -1;
      }

      &:hover:after {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
      }
    }

    a:first-child {
      margin-left: auto;
    }

    span {
      color: $primary_color_dark_blue;
      font-weight: bold;
      padding-inline: 2rem;
    }
  }

  &__search-form,
  &__logo-container,
  &__language-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__bottom-navigation {
    @include flexColumnOnMobile(space-between, stretch, 2px);

    width: 100%;
    margin: auto;
    margin-top: 1rem;

    background-color: $secondary_color_light_gray;
    border: 2px solid $secondary_color_light_gray;
    border-left: none;
    border-right: none;

    a {
      isolation: isolate;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      background-color: $primary_color_white;
      color: $secondary_color_dark_gray;
      width: 100%;
      padding: 2rem;
      letter-spacing: 1px;
      text-transform: uppercase;
      transition: color 0.1s ease-in-out;

      &:hover {
        color: $primary_color_dark_blue;
      }

      &::after {
        content: "";
        background: #ffffff;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -1;
      }

      &::before {
        content: "";
        position: absolute;
        height: 2px;
        width: 1px;
        background-color: $primary_color_dark_blue;
        left: 50%;
        top: 50%;
        transition: all .1s ease-in-out;
        transform: translate(-50%, 700%);
        opacity: 0;
      }

      &:hover:before {
        width: 30px;
        opacity: 1;
      }

      &.router-link-exact-active {
        color: $primary_color_dark_blue;
        font-weight: bold;
        position: relative;
        overflow: hidden;

        &::after {
          content: "";
          background: linear-gradient(45deg, #ffffff, #ffffff, transparent);
          width: 100%;
          height: 100%;
          position: absolute;
          z-index: -1;

          transition: all 2s ease-in-out;
          animation: appear 2s ease-in-out linear;

          @keyframes appear {
            0% {
              transform: scale(3);
            }
            100% {
              transform: scale(1);
            }
          }
        }

        &::before {
          content: "";
          position: absolute;
          height: 2px;
          width: 30px;
          background-color: $primary_color_dark_blue;
          left: 50%;
          top: 50%;
          transform: translate(-50%, 700%);
          opacity: 1!important;
        }
      }
    }

    @media screen and (max-width: 750px) {
      margin-top: 0;
    }
  }

  /* MEDIA QUERY CLASSES */
  &--display-on-tablet {
    display: none;

    @media screen and (max-width: 750px) {
      display: flex;
    }
  }

  @media screen and (max-width: 750px) {
    &--display-none-tablet {
      display: none;
    }
  }
}
</style>
