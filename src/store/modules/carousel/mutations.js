const carouselMutations = {
  SET_CAROUSEL_INDEX(state, newIndex) {
    state.carouselIndex = newIndex;
  },
  RESET_CAROUSEL_INDEX(state) {
    state.carouselIndex = 0;
  },
  INCREASE_CAROUSEL_INDEX(state) {
    state.carouselIndex += 100;
  },
  DECREASE_CAROUSEL_INDEX(state) {
    state.carouselIndex -= 100;
  },
};

export default carouselMutations;
