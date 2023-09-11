import { createStore } from "vuex";
import productsModule from "./modules/products";
import headerModule from "./modules/header";
import footerModule from "./modules/footer";
import homepageModule from "./modules/homepage";

export default createStore({
  modules: {
    header: headerModule,
    footer: footerModule,
    homepage: homepageModule,
    products: productsModule,
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {},
});
