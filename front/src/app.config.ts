export default defineAppConfig({
  pages: [
    "pages/home/index",
    "pages/classify/index",
    "pages/cart/index",
    "pages/person/index",
    "pages/login/index",
    "pages/search/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationStyle: "custom",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    custom: true,
    list: [
      {
        pagePath: "pages/home/index",
        text: "🏠",
      },
      {
        pagePath: "pages/classify/index",
        text: "🗂️",
      },
      {
        pagePath: "pages/cart/index",
        text: "🛒",
      },
      {
        pagePath: "pages/person/index",
        text: "👤",
      },
    ],
  },
});
