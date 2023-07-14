import { createStore } from "vuex";

export default createStore({
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
    topSellingProducts: [
      {
        bannerImage: require("@/assets/images/top-products__images/rod.jpg"),
        headline: "Delphin Dinasty XXL 420",
        productPrice: "52.55 €",
        rating: 4
      },
      {
        bannerImage: require("@/assets/images/top-products__images/reels.jpg"),
        headline: "Big River 5000 5:2:2",
        productPrice: "60.99 €",
        rating: 4
      },
      {
        bannerImage: require("@/assets/images/top-products__images/vest.jpg"),
        headline: "FOX Camo Vest - waterproof",
        productPrice: "30.00 €",
        rating: 5
      },
      {
        bannerImage: require("@/assets/images/top-products__images/sbs-pellet.png"),
        headline: "SBS Pellet mix",
        productPrice: "8.45 €",
        rating: 3
      },
    ],
    starRatings: {
      1 : "⭐", 
      2 : "⭐⭐", 
      3 : "⭐⭐⭐", 
      4 : "⭐⭐⭐⭐", 
      5 : "⭐⭐⭐⭐⭐", 
    },
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
