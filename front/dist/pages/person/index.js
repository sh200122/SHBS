"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/person/index"],{

<<<<<<< HEAD
=======
/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/person/index!./src/pages/person/index.tsx":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/person/index!./src/pages/person/index.tsx ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Setting; }
/* harmony export */ });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Header */ "./src/components/Header.tsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Footer */ "./src/components/Footer.tsx");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/auth */ "./src/utils/auth.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/*
 * @Author: alan alan.shi@duomai.com
 * @Date: 2025-03-05 14:51:28
 * @LastEditors: alan alan.shi@duomai.com
 * @LastEditTime: 2025-03-05 15:43:13
 * @FilePath: \front\src\pages\Setting.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */






function Setting(_ref) {
  let {} = _ref;
  const handleLogout = () => {
    (0,_utils_auth__WEBPACK_IMPORTED_MODULE_3__.logout)(); // 使用新的 logout 函数
    setTimeout(() => {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().reLaunch({
        url: "/pages/login/index"
      });
    }, 1000);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
    className: "h-screen w-screen",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Header__WEBPACK_IMPORTED_MODULE_0__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
      className: "fixed top-_11p_ h-_84p_ bg-gray-100 w-full p-4",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
        className: "bg-white rounded-lg shadow p-6 max-w-md mx-auto",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
          formType: "submit",
          className: "bg-red-500 text-white rounded-md w-full",
          hoverClass: "bg-red-600",
          onClick: handleLogout,
          children: "\u9000\u51FA\u767B\u5F55"
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], {})]
  });
}

/***/ }),

>>>>>>> 0b656848ed1f3d3219a14cfb4bf40a131a09b680
/***/ "./src/pages/person/index.tsx":
/*!************************************!*\
  !*** ./src/pages/person/index.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
<<<<<<< HEAD
Object(function webpackMissingModule() { var e = new Error("Cannot find module '!!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/person/index!./index.tsx'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
=======
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_person_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/person/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/person/index!./src/pages/person/index.tsx");
>>>>>>> 0b656848ed1f3d3219a14cfb4bf40a131a09b680


var config = {};



<<<<<<< HEAD
var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '!!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/person/index!./index.tsx'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), 'pages/person/index', {root:{cn:[]}}, config || {})
if (Object(function webpackMissingModule() { var e = new Error("Cannot find module '!!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/person/index!./index.tsx'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) && Object(function webpackMissingModule() { var e = new Error("Cannot find module '!!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/person/index!./index.tsx'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(Object(function webpackMissingModule() { var e = new Error("Cannot find module '!!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/person/index!./index.tsx'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
=======
var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_person_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/person/index', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_person_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_person_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_person_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"].behaviors)
>>>>>>> 0b656848ed1f3d3219a14cfb4bf40a131a09b680
}
var inst = Page(taroOption)



<<<<<<< HEAD
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (Object(function webpackMissingModule() { var e = new Error("Cannot find module '!!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/person/index!./index.tsx'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
=======
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_person_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);
>>>>>>> 0b656848ed1f3d3219a14cfb4bf40a131a09b680


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
<<<<<<< HEAD
/******/ __webpack_require__.O(0, ["common"], function() { return __webpack_exec__("./src/pages/person/index.tsx"); });
=======
/******/ __webpack_require__.O(0, ["taro","common"], function() { return __webpack_exec__("./src/pages/person/index.tsx"); });
>>>>>>> 0b656848ed1f3d3219a14cfb4bf40a131a09b680
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map