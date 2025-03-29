"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/login/index"],{

<<<<<<< HEAD
=======
/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/login/index!./src/pages/login/index.tsx":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/login/index!./src/pages/login/index.tsx ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Login; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! taro-ui */ "webpack/container/remote/taro-ui");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(taro_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/auth */ "./src/utils/auth.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);






function Login(_ref) {
  let {} = _ref;
  const handleWxLogin = async () => {
    try {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().login({
        success: async res => {
          if (res.code) {
            const response = await _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().request({
              url: "http://localhost:5000/api/user/wx-login",
              method: "POST",
              data: {
                code: res.code
              }
            });
            if (response.data.success) {
              // 保存 token 和用户信息
              (0,_utils_auth__WEBPACK_IMPORTED_MODULE_3__.setToken)(response.data.token);
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().reLaunch({
                url: "/pages/home/index"
              });
            }
          }
        }
      });
    } catch (error) {
      console.error("登录失败:", error);
    }
  };
  const handleCancel = () => {
    // 返回上一页，如果没有上一页则进入首页
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().reLaunch({
      url: "/pages/home/index"
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
    className: "h-screen w-screen flex flex-col justify-center items-center p-4 space-y-4",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
      className: "bg-green-500 text-white rounded-md w-full flex items-center justify-center h-12",
      onClick: handleWxLogin,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_2__.AtIcon, {
        prefixClass: "at-icon",
        value: "weixin",
        size: "24",
        color: "#ffffff",
        className: "mr-2"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
        children: "\u5FAE\u4FE1\u767B\u5F55"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
      className: "bg-gray-500 text-white rounded-md w-full h-12 mt-4",
      onClick: handleCancel,
      children: "\u53D6\u6D88"
    })]
  });
}

/***/ }),

>>>>>>> 0b656848ed1f3d3219a14cfb4bf40a131a09b680
/***/ "./src/pages/login/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/login/index.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
<<<<<<< HEAD
Object(function webpackMissingModule() { var e = new Error("Cannot find module '!!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/login/index!./index.tsx'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
=======
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_login_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/login/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/login/index!./src/pages/login/index.tsx");
>>>>>>> 0b656848ed1f3d3219a14cfb4bf40a131a09b680


var config = {};



<<<<<<< HEAD
var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '!!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/login/index!./index.tsx'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), 'pages/login/index', {root:{cn:[]}}, config || {})
if (Object(function webpackMissingModule() { var e = new Error("Cannot find module '!!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/login/index!./index.tsx'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) && Object(function webpackMissingModule() { var e = new Error("Cannot find module '!!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/login/index!./index.tsx'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(Object(function webpackMissingModule() { var e = new Error("Cannot find module '!!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/login/index!./index.tsx'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
=======
var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_login_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/login/index', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_login_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_login_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_login_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"].behaviors)
>>>>>>> 0b656848ed1f3d3219a14cfb4bf40a131a09b680
}
var inst = Page(taroOption)



<<<<<<< HEAD
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (Object(function webpackMissingModule() { var e = new Error("Cannot find module '!!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/login/index!./index.tsx'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
=======
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_login_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);
>>>>>>> 0b656848ed1f3d3219a14cfb4bf40a131a09b680


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
<<<<<<< HEAD
/******/ __webpack_require__.O(0, ["common"], function() { return __webpack_exec__("./src/pages/login/index.tsx"); });
=======
/******/ __webpack_require__.O(0, ["taro","common"], function() { return __webpack_exec__("./src/pages/login/index.tsx"); });
>>>>>>> 0b656848ed1f3d3219a14cfb4bf40a131a09b680
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map