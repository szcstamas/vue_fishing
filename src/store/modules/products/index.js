import productsGetters from "./getters";
import productsStates from "./states";

const productsModule = {
  namespaced: true,
  state: productsStates,
  getters: productsGetters,
};

export default productsModule;
