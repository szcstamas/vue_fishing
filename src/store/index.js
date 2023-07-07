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
      require("@/assets/images/site-header__backgroundImages/05.jpg")
    ]
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
