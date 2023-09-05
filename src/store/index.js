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
    titleSectionBackgroundImages: [
      require("@/assets/images/title-section__backgroundImages/landing-page__hero1.jpg"),
      require("@/assets/images/title-section__backgroundImages/landing-page__hero2.jpg"),
      require("@/assets/images/title-section__backgroundImages/landing-page__hero3.jpg"),
      require("@/assets/images/title-section__backgroundImages/landing-page__hero4.jpg"),
      require("@/assets/images/title-section__backgroundImages/landing-page__hero5.jpg"),
    ],
    brandLogoImages: [
      {
        brandLink: require("@/assets/images/title-section__branding-line-logos/white overlays/dpd.png"),
        brandName: "DPD"
      },
      {
        brandLink: require("@/assets/images/title-section__branding-line-logos/white overlays/expressone.png"),
        brandName: "ExpressOne"
      },
      {
        brandLink: require("@/assets/images/title-section__branding-line-logos/white overlays/fox.png"),
        brandName: "Fox Fishing"
      },
      {
        brandLink: require("@/assets/images/title-section__branding-line-logos/white overlays/greys.png"),
        brandName: "Greys"
      },
      {
        brandLink: require("@/assets/images/title-section__branding-line-logos/white overlays/nash.png"),
        brandName: "Nash Fishing"
      },
      {
        brandLink: require("@/assets/images/title-section__branding-line-logos/white overlays/nextlevel.png"),
        brandName: "Next Level"
      },
      {
        brandLink: require("@/assets/images/title-section__branding-line-logos/white overlays/oceanfish.png"),
        brandName: "Ocean Fish"
      },
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
        productPrice: 52.55,
        rating: 3,
      },
      {
        bannerImage: require("@/assets/images/top-products__images/reels.jpg"),
        headline: "Big River 5000 5:2:2",
        productPrice: 60.99,
        rating: 4,
      },
      {
        bannerImage: require("@/assets/images/top-products__images/vest.jpg"),
        headline: "FOX Camo Vest - waterproof",
        productPrice: 30.00,
        rating: 5,
      },
      {
        bannerImage: require("@/assets/images/top-products__images/sbs-pellet.png"),
        headline: "SBS Pellet mix",
        productPrice: 8.45,
        rating: 5,
      },
    ],
    topDiscountProducts: [
      {
        bannerImage: require("@/assets/images/top-products__images/fishing_rod_feeder.png"),
        headline: "Frenzee FXT",
        productPrice: 42,
        rating: 3,
      },
      {
        bannerImage: require("@/assets/images/top-products__images/big_river_reel.png"),
        headline: "Big River 6000 3:2:1",
        productPrice: 30,
        rating: 4,
      },
      {
        bannerImage: require("@/assets/images/top-products__images/fox_vest.png"),
        headline: "FOX Camo West - Natural",
        productPrice: 52.55,
        rating: 5,
      },
      {
        bannerImage: require("@/assets/images/top-products__images/sbs-pellet.png"),
        headline: "SBS Pellet mix",
        productPrice: 8.45,
        rating: 5,
      },
    ],
    starRatings: {
      1: "⭐",
      2: "⭐⭐",
      3: "⭐⭐⭐",
      4: "⭐⭐⭐⭐",
      5: "⭐⭐⭐⭐⭐",
    },
    footerTabs: [
      {
        footerTabTitle: "Home",
        footerTabLinks: [
          {
            linkTitle: "Top products",
            linkText: "/",
          },
          {
            linkTitle: "Best of Berkley",
            linkText: "/best-of-berkley",
          },
          {
            linkTitle: "Privacy notice",
            linkText: "/privacy-notice",
          },
          {
            linkTitle: "Impressum",
            linkText: "/impressum",
          },
        ],
      },
      {
        footerTabTitle: "Products",
        footerTabLinks: [
          {
            linkTitle: "Feeder",
            linkText: "/feeders-and-boilies",
          },
          {
            linkTitle: "Boilies",
            linkText: "/feeders-and-boilies",
          },
          {
            linkTitle: "Spinning",
            linkText: "/spinning",
          },
          {
            linkTitle: "Clothes",
            linkText: "/clothes",
          },
          {
            linkTitle: "Licenses",
            linkText: "/licenses",
          },
        ],
      },
      {
        footerTabTitle: "Community",
        footerTabLinks: [
          {
            linkTitle: "Facebook",
            linkText: "/about",
          },
          {
            linkTitle: "Instagram",
            linkText: "/about",  
          },
          {
            linkTitle: "TikTok",
            linkText: "/about",
          },
        ],
      },
    ],
    feedersAndBoiliesGridSections: [
      {
        title: "Boilie rods",
        background: require("@/assets/images/subpage_grid__images/boilierod.jpg"),
        url: "/",
        content: "Thanks to the quality carp fishing rods we manufacture and distribute, catching even the biggest catch is not a problem!"
      },
      {
        title: "Feeder rods",
        background: require("@/assets/images/subpage_grid__images/feederrod.jpg"),
        url: "/",
        content: "Flexible, reliable, lightweight, medium, and heavy feeder rods are an essential part of quality fishing!"
      },
      {
        title: "Reels",
        background: require("@/assets/images/subpage_grid__images/reels.jpg"),
        url: "/",
        content: "When it comes to fishing reels, besides the operation of the bearings, the composition of the structure, line management, and brake adjustment, quality is also not the last on the list!"
      },
      {
        title: "Baits & feeds",
        background: require("@/assets/images/subpage_grid__images/baitsandfeeds.jpg"),
        url: "/",
        content: "The feed and bait products manufactured and distributed by our company are market leaders to this day!"
      },
      {
        title: "Clothes",
        background: require("@/assets/images/subpage_grid__images/clothes.jpg"),
        url: "/",
        content: "Whether it's about heat or freezing cold, a hallmark of a good fisherman is always high-quality and practical attire, which is an essential part of fishing."
      },
      {
        title: "Accessories",
        background: require("@/assets/images/subpage_grid__images/accessories.jpg"),
        url: "/",
        content: "Do you need something else? Not a problem at all, you will always find what you desire with us!"
      }
    ]
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
