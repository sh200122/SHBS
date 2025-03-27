"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/products/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/products/index!./src/pages/products/index.tsx":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/products/index!./src/pages/products/index.tsx ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Products; }
/* harmony export */ });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Header */ "./src/components/Header.tsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Footer */ "./src/components/Footer.tsx");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);






function Products(_ref) {
  let {} = _ref;
  const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
  const getAdminInfo = () => {
    return _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().getStorageSync('adminInfo') || {};
  };
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    const adminInfo = getAdminInfo();
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().request({
      url: "http://localhost:5000/api/product/admin",
      method: "GET",
      header: {
        'admin-id': adminInfo._id
      },
      success: res => {
        setProducts(res.data);
      },
      fail: err => {
        console.log(err);
      }
    });
  }, []);
  const handleDeleteProduct = product => {
    const adminInfo = getAdminInfo();
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().showModal({
      title: "确认删除",
      content: `确定要删除 ${product.name} 吗？`,
      success: function (res) {
        if (res.confirm) {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().request({
            url: `http://localhost:5000/api/product/${product._id}`,
            method: "DELETE",
            header: {
              'admin-id': adminInfo._id
            },
            success: () => {
              setProducts(products.filter(p => p._id !== product._id));
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().showToast({
                title: "删除成功",
                icon: "success",
                duration: 2000
              });
            },
            fail: err => {
              console.log(err);
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().showToast({
                title: "删除失败",
                icon: "error",
                duration: 2000
              });
            }
          });
        }
      }
    });
  };
  const handleAddProduct = () => {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().reLaunch({
      url: "/pages/products/add"
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
    className: "w-screen h-screen",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Header__WEBPACK_IMPORTED_MODULE_0__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
      className: "fixed top-_89p_ left-0 right-0 h-_6p_ p-2 flex justify-center items-center bg-_hf3f4f6_",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
        className: "bg-_hfbb713_ text-white rounded-md w-full h-full flex justify-center items-center shadow-md",
        hoverClass: "bg-yellow-500",
        onClick: handleAddProduct,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
          className: "text-white text-center",
          children: "\u6DFB\u52A0\u95F2\u7F6E"
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
      className: "fixed top-_11p_ left-0 right-0 h-_78p_ bg-gray-100 flex flex-col overflow-y-scroll p-4",
      children: products.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
        className: "text-gray-500 text-center absolute top-1s2 left-1s2 -translate-x-1s2 -translate-y-1s2",
        children: "\u60A8\u8FD8\u6CA1\u6709\u95F2\u7F6E\u4EFB\u4F55\u7269\u54C1\uFF0C\u8BF7\u5148\u6DFB\u52A0\u95F2\u7F6E~"
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
        className: "flex flex-col gap-4",
        children: products.map(product => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
          className: "bg-white rounded-lg p-4 flex gap-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Image, {
            src: product.image,
            className: "w-full h-full max-w-_300px_ max-h-_300px_ object-contain rounded",
            mode: "widthFix"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
            className: "flex flex-col gap-2",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
              className: "text-lg font-bold",
              children: product.name
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
              className: "text-sm text-gray-500",
              children: product.description
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
              className: "text-sm text-gray-500",
              children: [product.price, "\uFFE5"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
              className: "flex gap-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
                className: "bg-_hfbb713_ text-white",
                hoverClass: "bg-_ha3770c_",
                onClick: () => _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().reLaunch({
                  url: `/pages/products/edit?id=${product._id}`
                }),
                children: "\u7F16\u8F91"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
                className: "bg-red-500 text-white",
                hoverClass: "bg-red-600",
                onClick: () => handleDeleteProduct(product),
                children: "\u5220\u9664"
              })]
            })]
          })]
        }, product._id))
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], {})]
  });
}

/***/ }),

/***/ "./src/pages/products/index.tsx":
/*!**************************************!*\
  !*** ./src/pages/products/index.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_products_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/products/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/products/index!./src/pages/products/index.tsx");


var config = {};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_products_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/products/index', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_products_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_products_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_products_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_products_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","common"], function() { return __webpack_exec__("./src/pages/products/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map