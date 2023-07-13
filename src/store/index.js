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
      require("@/assets/images/site-header__backgroundImages/01.jpg"),
      require("@/assets/images/site-header__backgroundImages/02.png"),
      require("@/assets/images/site-header__backgroundImages/03.jpg"),
      require("@/assets/images/site-header__backgroundImages/04.jpg"),
      require("@/assets/images/site-header__backgroundImages/05.jpg"),
    ],
    topSellingProducts: [
      {
        bannerImage: require("@/assets/images/site-header__backgroundImages/01.jpg"),
        headline: "Carp Dinasty XXL 420",
        productPrice: "52.55 €",
        rating: 4
      },
      {
        bannerImage: require("@/assets/images/site-header__backgroundImages/02.png"),
        headline: "Big River 5000 5:2:2",
        productPrice: "60.99 €",
        rating: 4
      },
      {
        bannerImage: require("@/assets/images/site-header__backgroundImages/03.jpg"),
        headline: "FOX Camo Vest - waterproof",
        productPrice: "30.00 €",
        rating: 5
      },
      {
        bannerImage: require("@/assets/images/site-header__backgroundImages/04.jpg"),
        headline: "SBS Pellet mix",
        productPrice: "8.45 €",
        rating: 3
      },
    ]
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
