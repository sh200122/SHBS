export default defineAppConfig({
  pages: [
    "pages/dashboard/index",
    "pages/products/index",
    "pages/order/index",
    "pages/setting/index",
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
        text: "首页",
      },
      {
        pagePath: "pages/products/index",
        text: "商品管理",
      },
      {
        pagePath: "pages/order/index",
        text: "订单管理",
      },
      {
        pagePath: "pages/setting/index",
        text: "我的",
      },
    ],
  },
});
