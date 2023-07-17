<template>
  <footer class="site-footer">
    <div class="container site-footer__top">
      <div class="site-footer__top-line">
        <div class="site-footer__top-line__link-container">
          <div
            class="site-footer__top-line__link-box"
            v-for="{ footerTabTitle, footerTabLinks } in footerTabs"
          >
            <h4>{{ footerTabTitle }}</h4>
            <li v-for="{ linkText, linkTitle } in footerTabLinks">
              <router-link :to="linkText">
                {{ linkTitle }}
              </router-link>
            </li>
          </div>
        </div>
        <div class="site-footer__top-line__form-container">
          <form>
            <h4>Subscribe to our newsletter</h4>
            <input type="email" placeholder="E-mail address..." />
            <input type="text" placeholder="Your name..." />
            <input type="submit" value="SUBSCRIBE" />
          </form>
        </div>
      </div>
    </div>
    <div class="site-footer__bottom">
      <p>Szűcs Tamás &copy; 2023</p>
    </div>
  </footer>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["footerTabs"]),
  },
};
</script>

<style lang="scss" scoped>
.site-footer {
  background: url("https://www.fishermanholidays.com/images-waters/etang-carpanium/swims/_1600x980_crop_center-center_80_line/65160/Carpanium-Carp-Fishing-France_9177.jpeg");
  background-size: cover;
  background-position: center;
  position: relative;
  isolation: isolate;

  &::after {
    content: "";
    background-color: rgba(255, 255, 255, 0.45);
    width: 100%;
    height: calc(100% - 85px);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  &__top {
    @media screen and (max-width: 1860px) {
      padding-inline: 2rem;
    }
  }

  &__top-line {
    @include flexColumnOnMobile(space-between, stretch, 1rem, column, 1350px);
    padding-block: 2.5rem;

    &__link-container {
      @include flexColumnOnMobile(normal, stretch, 4rem, column, 850px);

      @media screen and (max-width: 1350px) {
        @include flexColumnOnMobile(normal, stretch, 2rem);
        width: 100%;
      }

      @media screen and (max-width: 800px) {
        @include flexColumnOnMobile(space-between, flex-start, 1rem);
      }
    }

    &__form-container {
      background-color: $primary_color_white;
      padding: 2rem;
      border-radius: 10px;

      @media screen and (max-width: 1350px) {
        width: 100%;
      }

      form {
        @include flexColumn(space-between, space-between);

        h4 {
          margin-bottom: 1.1rem;
          text-transform: none;
        }
      }
    }

    &__link-box {
      @include flexColumn(flex-start, stretch);
      min-width: 300px;
      background-color: $primary_color_transparent_white;
      border: 4px solid $primary_color_white;
      padding: 2rem;
      border-radius: 10px;
      backdrop-filter: blur(5px);
      box-shadow: 0px 40px 20px rgba(0, 0, 0, 0.1);

      @media screen and (max-width: 1350px) {
        min-width: 0;
        width: 100%;
      }

      h4 {
        margin-bottom: 1.1rem;
        text-transform: none;
      }

      a {
        text-decoration: none;
        color: $secondary_color_dark_gray;
        transition: transform 0.1s ease-in-out;
        display: block;
        font-size: 1.1rem;
        position: relative;
        padding: 0.25rem;

        &::after {
          content: "";
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: $secondary_color_dark_gray;
          position: absolute;
          left: 0;
          top: 50%;
          transition: all 0.5s ease-in-out;
          transform: translate(50%, -50%);
          opacity: 0;
          pointer-events: none;
        }

        &:hover {
          color: $primary_color_dark_blue;
        }

        &:hover:after {
          transform: translate(-185%, -50%);
          background-color: $primary_color_dark_blue;
          opacity: 1;
        }
      }
    }
  }

  &__bottom {
    font-size: 1rem;
    color: $secondary_color_dark_gray;
    background-color: $secondary_color_unsaturated_light_gray;
    text-align: center;
    padding-block: 2rem;
  }
}
</style>
