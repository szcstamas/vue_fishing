import { createStore } from "vuex";
import productsModule from "./modules/products";
import headerModule from "./modules/header";
import footerModule from "./modules/footer";
import homepageModule from "./modules/homepage";
import fishingExpoModule from "./modules/fishing-expo";

export default createStore({
  modules: {
    header: headerModule,
    footer: footerModule,
    homepage: homepageModule,
    products: productsModule,
    fishingExpo: fishingExpoModule
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {},
});
