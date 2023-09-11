const productsGetters = {
  headlineTextsOfPage: (state) => (currentURL) => {
    if (currentURL === "/feeders-and-boilies") {
      return state.headlineTexts[0];
    } else if (currentURL === "/spinning") {
      return state.headlineTexts[1];
    }
  },
  heroContentOfPage: (state) => (currentURL) => {
    return state.heroContentOfPageOnWebshopMain.find(
      ({ content }) => currentURL === `/${content}`
    );
  },
  topGridSectionOfPage: (state) => (currentURL) => {
    if (currentURL === "/feeders-and-boilies") {
      return state.feedersAndBoiliesGridSections;
    } else if (currentURL === "/spinning") {
      return state.spinningGridSections;
    }
  },
  sortedArrayOfBestDiscountedProducts: (state) => (currentURL) => {
    const sortedProducts =
      currentURL === "/feeders-and-boilies"
        ? state.feederAndBoiliesTopDiscountProducts
        : currentURL === "/spinning"
        ? state.spinningTopDiscountProducts
        : null;

    if (sortedProducts) {
      return sortedProducts.sort((a, b) => b.rating - a.rating);
    }
  },
  arrayOfProductsInFirstRow: (state) => (currentURL) => {
    return currentURL === "/feeders-and-boilies"
      ? state.feederAndBoiliesClothes
      : currentURL === "/spinning"
      ? state.spinningClothes
      : [];
  },
  arrayOfProductsInSecondRow: (state) => (currentURL) => {
    return state.brandingLogoImages
      .filter(
        (el) =>
          (currentURL === "/feeders-and-boilies" &&
            el.type === "feeder-fishing") ||
          (currentURL === "/spinning" && el.type === "spinning-fishing")
      )
      .map(({ brandImageSrc, brandName, brandLink }) => ({
        itemImageSrc: brandImageSrc,
        itemName: brandName,
        itemLink: brandLink,
      }));
  },
};

export default productsGetters;
