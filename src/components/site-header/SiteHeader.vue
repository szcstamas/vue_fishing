<template>
  <header class="site-header">
    <div class="site-header__top-line">
      <div class="site-header__search-form">
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
    <nav class="site-header__bottom-navigation">
      <router-link to="/">Home</router-link>
      <router-link to="/feeders-boilies">Feeders & Boilies</router-link>
      <router-link to="/spinning">Spinning</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/about">About</router-link>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.site-header {
  @include flexColumn(center, center);
  background-color: #ffffff;
  width: 100%;
  position: sticky;

  a {
    font-weight: bold;
    color: $primary_color;
    text-decoration: none;
  }

  &__top-line {
    @include flexColumnOnMobile(space-between, center);

    width: 100%;
    max-width: 1400px;
    margin: auto;
    padding: 1rem;
  }

  &__search-form {
    form {
      @include flexColumnOnMobile(center, center);

      margin-right: auto;
    }
  }

  &__logo-container {
    a {
      width: clamp(150px, 100%, 250px);

      img {
        object-fit: cover;
        width: 100%;
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
        background-color: $primary_color;
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
      color: $primary_color;
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
    @include flexColumnOnMobile(space-between, center, 2px);

    width: 100%;
    margin: auto;

    background-color: $secondary_color_light_gray;
    border: 2px solid $secondary_color_light_gray;
    border-left: none;
    border-right: none;

    a {
      background-color: $primary_color_white;
      text-align: center;
      width: 100%;
      padding: 1rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: $secondary_color_dark_gray;
      transition: color .1s ease-in-out;

      &:hover {
        color: $primary_color;
      }

      &.router-link-exact-active {
        color: $primary_color;
        font-weight: bold;
        position: relative;

        &::after {
          content: "";

          position: absolute;
          right: 30%;
          top: -20%;
          display: block;
          background: url("@/assets/images/site-header__active.png") no-repeat
            center center;
          background-size: cover;
          width: 70px;
          height: 70px;

          animation: rotate-hook 4s ease-in-out infinite;

          @keyframes rotate-hook {
            0% {
              rotate: 0deg;
            }
            33.333% {
              rotate: 20deg;
            }
            66.666% {
              rotate: -20deg;
            }
            100% {
              rotate: 0deg;
            }
          }
        }

        &::before {
          content: "";
          position: absolute;
          height: 10px;
          width: 10px;
          background-color: $primary_color;
          border-radius: 50%;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          opacity: 0;

          animation: slide 4s ease-in-out infinite;

          @keyframes slide {
            0% {
              transform: translate(-50%, -50%);
              opacity: 0;
            }
            20% {
              transform: translate(-50%, 200%);
              opacity: 1;
            }
            80% {
              transform: translate(-50%, 200%);
              opacity: 1;
            }
            100% {
              transform: translate(-50%, -50%);
              opacity: 0;
            }
          }
        }
      }
    }
  }
}
</style>
