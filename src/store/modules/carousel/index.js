import carouselActions from "./actions";
import carouselMutations from "./mutations";
import carouselStates from "./states";

const carouselModule = {
  namespaced: true,
  state: carouselStates,
  mutations: carouselMutations,
  actions: carouselActions
};

export default carouselModule;
