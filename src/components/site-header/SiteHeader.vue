<template>
  <header class="site-header">
    <div class="site-header__top-line">
      <div class="site-header__search-form site-header--display-none-tablet">
        <form action="">
          <input type="text" :placeholder="$t('searchPlaceholder')" />
          <input type="submit" :value="$t('searchValue')" />
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
        <button
          @click="toggleLocale(language)"
          :disabled="language === $i18n.locale"
          v-for="language in languageArray"
        >
          {{ language }}
        </button>
      </div>
    </div>
    <div class="site-header__middle-line site-header--display-on-tablet">
      <form action="">
        <input type="text" :placeholder="$t('searchPlaceholder')" />
        <input type="submit" :value="$t('searchValue')" />
      </form>
    </div>
    <div class="site-header__button-line site-header--display-on-tablet">
      <dark-gray-button
        :buttonText="
          isMobileMenuDisplayed
            ? $t('hideMobileMenuText')
            : $t('showMobileMenuText')
        "
        @button-event="showMobileMenu"
      />
    </div>
    <nav v-if="isMobileMenuDisplayed" class="site-header__bottom-navigation">
      <router-link
        v-for="(link, index) in headerLinkHrefs"
        :key="`Links of ${$t(`headerTexts.${index}`)} in site-header component`"
        :style="{
          background: `url('${headerLinkActiveBackgrounds[index]}') no-repeat center right`,
          backgroundSize: '70%',
        }"
        :to="link"
        >{{ $t(`headerTexts.${index}`) }}</router-link
      >
    </nav>
  </header>
</template>

<script>
import DarkGrayButton from "@/components/site-buttons/DarkGrayButton.vue";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    DarkGrayButton,
  },

  computed: {
    ...mapState("header", [
      "headerLinkHrefs",
      "headerLinkActiveBackgrounds",
      "isMobileMenuDisplayed",
      "showMobileMenuText",
      "hideMobileMenuText",
      "languageArray",
    ]),

    isSelectedLanguageActive() {
      return this.$i18n.messages.en;
    },

    languageArray() {
      return Object.keys(this.$i18n.messages);
    },
  },

  methods: {
    ...mapActions("header", ["showMobileMenu"]),

    toggleLocale(languageCode) {
      this.$i18n.locale = languageCode;
    },
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
        text-transform: uppercase;
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

      input[type="submit"] {
        text-transform: uppercase;
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
    @include flexColumnOnMobile(center, center, 2rem, row);
    font-size: 18px;

    button:not([disabled]) {
      cursor: pointer;
    }

    button {
      appearance: none;
      outline: none;
      border: none;
      text-transform: uppercase;
      isolation: isolate;
      position: relative;
      transition: all 0.1s ease-in-out;
      z-index: 1;
      padding: 1rem;
      border-radius: 4px;

      &:not([disabled]):hover {
        transform: translateY(-5px);
        color: $primary_color_white;
        background-color: $primary_color_dark_blue;
      }
    }

    button:first-child {
      margin-left: auto;
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
        transition: all 0.1s ease-in-out;
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
          opacity: 1 !important;
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
