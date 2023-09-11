const productsStates = {
  heroContentOfPageOnWebshopMain: [
    {
      url: require("@/assets/images/subpage_hero-section-images/feeders-and-boilies_hero-image.jpeg"),
      headline: "Feeders & boilies",
      subline:
        "Our beloved products are always available in a wide range on our website.",
      span: "Hurry up!",
      content: "feeders-and-boilies",
    },
    {
      url: require("@/assets/images/subpage_hero-section-images/spinning_hero-image.jpg"),
      headline: "Spinning",
      subline: "It's time to catch some glorious predators!",
      span: "Buckle up!",
      content: "spinning",
    },
  ],
  brandingLogoImages: [
    {
      brandImageSrc: require("@/assets/images/title-section__branding-line-logos/white overlays/dpd.png"),
      brandName: "DPD",
      brandLink: "https://www.dpd.com",
      type: "carrier",
    },
    {
      brandImageSrc: require("@/assets/images/title-section__branding-line-logos/white overlays/expressone.png"),
      brandName: "ExpressOne",
      brandLink: "https://expressone.hu/",
      type: "carrier",
    },
    {
      brandImageSrc: require("@/assets/images/title-section__branding-line-logos/white overlays/fox.png"),
      brandName: "Fox Fishing",
      brandLink: "https://www.foxint.com/",
      type: "feeder-fishing",
    },
    {
      brandImageSrc: require("@/assets/images/title-section__branding-line-logos/white overlays/greys.png"),
      brandName: "Greys",
      brandLink: "https://greysfishing.co.uk/",
      type: "feeder-fishing",
    },
    {
      brandImageSrc: require("@/assets/images/title-section__branding-line-logos/white overlays/nash.png"),
      brandName: "Nash Fishing",
      brandLink: "https://www.nashtackle.co.uk/en/",
      type: "feeder-fishing",
    },
    {
      brandImageSrc: require("@/assets/images/title-section__branding-line-logos/white overlays/nextlevel.png"),
      brandName: "Next Level",
      brandLink: "https://www.google.com/",
      type: "feeder-fishing",
    },
    {
      brandImageSrc: require("@/assets/images/title-section__branding-line-logos/white overlays/oceanfish.png"),
      brandName: "Ocean Fish",
      brandLink: "https://www.google.com/",
      type: "feeder-fishing",
    },
    {
      brandImageSrc: require("@/assets/images/title-section__branding-line-logos/white overlays/rapala.png"),
      brandName: "Rapala",
      brandLink: "https://www.rapala.com/us_en/rapala",
      type: "spinning-fishing",
    },
    {
      brandImageSrc: require("@/assets/images/title-section__branding-line-logos/white overlays/shimano.png"),
      brandName: "Shimano",
      brandLink: "https://fish.shimano.com/en-GB",
      type: "spinning-fishing",
    },
    {
      brandImageSrc: require("@/assets/images/title-section__branding-line-logos/white overlays/berkley.png"),
      brandName: "Berkley",
      brandLink: "https://www.berkley-fishing.com/",
      type: "spinning-fishing",
    },
    {
      brandImageSrc: require("@/assets/images/title-section__branding-line-logos/white overlays/daiwa.png"),
      brandName: "Daiwa",
      brandLink: "https://www.daiwa.com/global/en/",
      type: "spinning-fishing",
    },
    {
      brandImageSrc: require("@/assets/images/title-section__branding-line-logos/white overlays/abugarcia.png"),
      brandName: "Abu Garcia",
      brandLink: "https://abugarcia-fishing.eu/",
      type: "spinning-fishing",
    },
    {
      brandImageSrc: require("@/assets/images/title-section__branding-line-logos/white overlays/savagegear.png"),
      brandName: "Savage Gear",
      brandLink: "https://savage-gear.com/",
      type: "spinning-fishing",
    },
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
      productPrice: 30.0,
      rating: 5,
    },
    {
      bannerImage: require("@/assets/images/top-products__images/sbs-pellet.png"),
      headline: "SBS Pellet mix",
      productPrice: 8.45,
      rating: 5,
    },
  ],
  feederAndBoiliesClothes: [
    {
      itemImageSrc: require("@/assets/images/clothes_images/fishing_hat_1.webp"),
      itemName: "Carp Zoom Hat",
      itemLink: "/carp-zoom-hat",
    },
    {
      itemImageSrc: require("@/assets/images/clothes_images/dam_manibota.png"),
      itemName: "DAM Manitoba Jacket",
      itemLink: "/dam-manitoba-jacket",
    },
    {
      itemImageSrc: require("@/assets/images/clothes_images/red_wing_boots.png"),
      itemName: "Red Wing Boots Bulk Mode",
      itemLink: "/red-wing-boots",
    },
    {
      itemImageSrc: require("@/assets/images/clothes_images/hudson_boots.webp"),
      itemName: "Hudson Boots Waterproof",
      itemLink: "/hudson-boots-waterproof",
    },
  ],
  spinningClothes: [
    {
      itemImageSrc: require("@/assets/images/clothes_images/jersey_pike_shirt.png"),
      itemName: "Jersey Pike Shirt",
      itemLink: "/jersey-pike-shirt",
    },
    {
      itemImageSrc: require("@/assets/images/clothes_images/striker_ice_fishing.webp"),
      itemName: "Striker Ice Fishing Jacket",
      itemLink: "/striker-ice-fishing-jacket",
    },
    {
      itemImageSrc: require("@/assets/images/clothes_images/light_blue_shirt.webp"),
      itemName: "Light Blue Shirt",
      itemLink: "/light-blue-shirt",
    },
    {
      itemImageSrc: require("@/assets/images/clothes_images/slaney_fishing_boots.webp"),
      itemName: "Slaney Fishing Boots",
      itemLink: "/slaney-fishing-boots",
    },
  ],
  feederAndBoiliesTopDiscountProducts: [
    {
      bannerImage: require("@/assets/images/top-products__images/fishing_rod_feeder.png"),
      headline: "Frenzee FXT",
      productPrice: 42,
      rating: 3,
      productLink: "/frenzee-fxt",
    },
    {
      bannerImage: require("@/assets/images/top-products__images/big_river_reel.png"),
      headline: "Big River 6000 3:2:1",
      productPrice: 30,
      rating: 4,
      productLink: "/big-river-6000",
    },
    {
      bannerImage: require("@/assets/images/top-products__images/fox_vest.png"),
      headline: "FOX Camo West - Natural",
      productPrice: 52.55,
      rating: 5,
      productLink: "/fox-camo-west",
    },
    {
      bannerImage: require("@/assets/images/top-products__images/sbs-pellet.png"),
      headline: "SBS Pellet mix",
      productPrice: 8.45,
      rating: 5,
      productLink: "/sbs-pellet-mix",
    },
  ],
  spinningTopDiscountProducts: [
    {
      bannerImage: require("@/assets/images/clothes_images/slaney_fishing_boots.webp"),
      headline: "Slaney Fishing Boots",
      productPrice: 62,
      rating: 4,
      productLink: "/slaney-fishing-boots",
    },
    {
      bannerImage: require("@/assets/images/top-products__images/rapala_kalon_orange_reel.webp"),
      headline: "Rapala Kalon Reel (Orange)",
      productPrice: 73.99,
      rating: 4,
      productLink: "/rapala-kalon-reel-orange",
    },
    {
      bannerImage: require("@/assets/images/top-products__images/lil_finz_kids_4_3.webp"),
      headline: "Lil Finz for Kids 4'3",
      productPrice: 65,
      rating: 3,
      productLink: "/lil-finz-for-kids-43",
    },
    {
      bannerImage: require("@/assets/images/top-products__images/rapala_spd_spin_hook.png"),
      headline: "Rapala SPD Spin Hook (2/0)",
      productPrice: 15.99,
      rating: 4,
      productLink: "/rapala-spd-spin-hook-20",
    },
    {
      bannerImage: require("@/assets/images/top-products__images/rapala_sunglasses.webp"),
      headline: 'Rapala "Hardcore Pike" Sunglasses',
      productPrice: 26,
      rating: 4,
      productLink: "/rapala-hardcore-pike-sunglasses",
    },
    {
      bannerImage: require("@/assets/images/top-products__images/uzuki_reel.webp"),
      headline: "Uzuki Reel & Spinning Rod Combination",
      productPrice: 125.99,
      rating: 5,
      productLink: "/uzuki-reel-and-spinning-rod",
    },
    {
      bannerImage: require("@/assets/images/top-products__images/berkley_spinning_bag.png"),
      headline: "Berkley Spinning Bag (25 L)",
      productPrice: 86.99,
      rating: 5,
      productLink: "/berkley-spinning-bag",
    },
  ],
  feedersAndBoiliesGridSections: [
    {
      title: "Boilie rods",
      background: require("@/assets/images/subpage_grid__images/boilierod.jpg"),
      url: "/",
      content:
        "Thanks to the quality carp fishing rods we manufacture and distribute, catching even the biggest catch is not a problem!",
    },
    {
      title: "Feeder rods",
      background: require("@/assets/images/subpage_grid__images/feederrod.jpg"),
      url: "/",
      content:
        "Flexible, reliable, lightweight, medium, and heavy feeder rods are an essential part of quality fishing!",
    },
    {
      title: "Reels",
      background: require("@/assets/images/subpage_grid__images/reels.jpg"),
      url: "/",
      content:
        "When it comes to fishing reels, besides the operation of the bearings, the composition of the structure, line management, and brake adjustment, quality is also not the last on the list!",
    },
    {
      title: "Baits & feeds",
      background: require("@/assets/images/subpage_grid__images/baitsandfeeds.jpg"),
      url: "/",
      content:
        "The feed and bait products manufactured and distributed by our company are market leaders to this day!",
    },
    {
      title: "Clothes",
      background: require("@/assets/images/subpage_grid__images/clothes.jpg"),
      url: "/",
      content:
        "Whether it's about heat or freezing cold, a hallmark of a good fisherman is always high-quality and practical attire, which is an essential part of fishing.",
    },
    {
      title: "Accessories",
      background: require("@/assets/images/subpage_grid__images/accessories.jpg"),
      url: "/",
      content:
        "Do you need something else? Not a problem at all, you will always find what you desire with us!",
    },
  ],
  spinningGridSections: [
    {
      title: "Spinning rods",
      background: require("@/assets/images/subpage_grid__images/spinning_rod_main.jpg"),
      url: "/",
      content:
        "Are you ready to take your fishing game to the next level? Look no further than our cutting-edge spinning rods, designed to elevate your angling experience like never before!",
    },
    {
      title: "Spinning reels",
      background: require("@/assets/images/subpage_grid__images/spinning_reel_main.webp"),
      url: "/",
      content:
        "Unleash the power of precision with our spinning reels, where seamless design meets effortless control. Elevate your angling game today!",
    },
    {
      title: "Lures & tackles",
      background: require("@/assets/images/subpage_grid__images/spinning_lures_main.jpg"),
      url: "/",
      content:
        "Elevate your fishing game with our premium lures and tackles. Crafted for success, they're your trusted companions for landing the ultimate catch every time.",
    },
    {
      title: "Clothes",
      background: require("@/assets/images/subpage_grid__images/spinning_clothes_main.webp"),
      url: "/",
      content:
        "Experience ultimate comfort and style on the water with our spinning clothes. Crafted for anglers, by anglers - because fishing should be as comfortable as it is exciting!",
    },
    {
      title: "Hooks & lines",
      background: require("@/assets/images/subpage_grid__images/spinning_hooks.jpg"),
      url: "/",
      content:
        "Hook into success with our cutting-edge spinning hooks. Designed to entice and land the biggest catches, these tools are your secret weapons for angling triumphs!",
    },
    {
      title: "Other equipments",
      background: require("@/assets/images/subpage_grid__images/spinning_accessories.jpg"),
      url: "/",
      content:
        "Explore the pinnacle of angling gear with our comprehensive range of top-notch fishing equipment. From fishing nets and bags to other gears and beyond, we've got you covered for every angler's dream adventure.",
    },
  ],
  headlineTexts: [
    {
      textOfFirstHeadline: "Popular feeder clothes",
      textOfSecondHeadline: "Popular feeder brands",
    },
    {
      textOfFirstHeadline: "Popular spinning clothes",
      textOfSecondHeadline: "Popular spinning brands",
    },
  ],
};

export default productsStates;
