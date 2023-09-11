const carouselActions = {
  setCarouselIndex({ commit }, newIndex) {
    commit("SET_CAROUSEL_INDEX", newIndex);
  },
  resetCarouselIndex({ commit }) {
    commit("RESET_CAROUSEL_INDEX");
  },
  increaseCarouselIndex({ commit }) {
    commit("INCREASE_CAROUSEL_INDEX");
  },
  decreaseCarouselIndex({ commit }) {
    commit("DECREASE_CAROUSEL_INDEX");
  },
};

export default carouselActions;
