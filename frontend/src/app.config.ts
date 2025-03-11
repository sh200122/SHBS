/*
 * @Author: alan alan.shi@duomai.com
 * @Date: 2025-03-05 10:25:40
 * @LastEditors: alan alan.shi@duomai.com
 * @LastEditTime: 2025-03-05 13:51:48
 * @FilePath: \backend\src\app.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default defineAppConfig({
  pages: [
    'pages/index/Home',
    'pages/login/Login',
    'pages/categories/Categories',
    'pages/cart/Cart',
    'pages/account/Account',
  ],
  window: {
    navigationStyle: 'custom',
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'HAO',
    navigationBarTextStyle: 'black',
  }
})
