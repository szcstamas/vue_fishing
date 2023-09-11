import { createStore } from "vuex";
import productsModule from "./modules/products";

export default createStore({
  modules: {
    products: productsModule,
  },
  state: {
    headerLinkHrefs: [
      "/",
      "/feeders-and-boilies",
      "/spinning",
      "/contact",
      "/about",
    ],
    headerLinkTexts: [
      "Home",
      "Feeders & Boilies",
      "Spinning",
      "Contact",
      "About",
    ],
    titleSectionBackgroundImages: [
      require("@/assets/images/title-section__backgroundImages/landing-page__hero1.jpg"),
      require("@/assets/images/title-section__backgroundImages/landing-page__hero2.jpg"),
      require("@/assets/images/title-section__backgroundImages/landing-page__hero3.jpg"),
      require("@/assets/images/title-section__backgroundImages/landing-page__hero4.jpg"),
      require("@/assets/images/title-section__backgroundImages/landing-page__hero5.jpg"),
    ],
    headerLinkActiveBackgrounds: [
      require("@/assets/images/site-header__backgroundImages/01.jpg"),
      require("@/assets/images/site-header__backgroundImages/02.png"),
      require("@/assets/images/site-header__backgroundImages/03.jpg"),
      require("@/assets/images/site-header__backgroundImages/04.jpg"),
      require("@/assets/images/site-header__backgroundImages/05.jpg"),
    ],
    homepageGridSectionHeadlines: [
      "Clothes",
      "Rods and reels",
      "Baits and lures",
      "Community",
      "Catches",
    ],
    homepageGridSectionBackgroundImages: [
      require("@/assets/images/homepage-grid-section__images/clothes.jpg"),
      require("@/assets/images/homepage-grid-section__images/rods-and-reels.jpg"),
      require("@/assets/images/homepage-grid-section__images/lures.jpg"),
      require("@/assets/images/homepage-grid-section__images/community.jpg"),
      require("@/assets/images/homepage-grid-section__images/catches.jpg"),
    ],
    starRatings: {
      1: "⭐",
      2: "⭐⭐",
      3: "⭐⭐⭐",
      4: "⭐⭐⭐⭐",
      5: "⭐⭐⭐⭐⭐",
    },
    footerTabs: [
      {
        footerTabTitle: "Home",
        footerTabLinks: [
          {
            linkTitle: "Top products",
            linkText: "/",
          },
          {
            linkTitle: "Best of Berkley",
            linkText: "/best-of-berkley",
          },
          {
            linkTitle: "Privacy notice",
            linkText: "/privacy-notice",
          },
          {
            linkTitle: "Impressum",
            linkText: "/impressum",
          },
        ],
      },
      {
        footerTabTitle: "Products",
        footerTabLinks: [
          {
            linkTitle: "Feeder",
            linkText: "/feeders-and-boilies",
          },
          {
            linkTitle: "Boilies",
            linkText: "/feeders-and-boilies",
          },
          {
            linkTitle: "Spinning",
            linkText: "/spinning",
          },
          {
            linkTitle: "Clothes",
            linkText: "/clothes",
          },
          {
            linkTitle: "Licenses",
            linkText: "/licenses",
          },
        ],
      },
      {
        footerTabTitle: "Community",
        footerTabLinks: [
          {
            linkTitle: "Facebook",
            linkText: "/about",
          },
          {
            linkTitle: "Instagram",
            linkText: "/about",
          },
          {
            linkTitle: "TikTok",
            linkText: "/about",
          },
        ],
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
});
