export default defineAppConfig({
  pages: [
    "pages/dashboard/index",
    "pages/products/index",
    "pages/cart/index",
    "pages/person/index",
    "pages/login/index",
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
        pagePath: "pages/dashboard/index",
        text: "🏠",
      },
      {
        pagePath: "pages/products/index",
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
