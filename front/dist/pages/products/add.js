"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/products/add"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/products/add!./src/pages/products/add.tsx":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/products/add!./src/pages/products/add.tsx ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ add; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




function add(_ref) {
  let {} = _ref;
  const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    image: "",
    name: "",
    price: "",
    description: ""
  });
  const handleSubmit = async e => {
    e.preventDefault();
    if (!formData.image || !formData.name || !formData.price) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
        title: '请填写必选项',
        icon: 'error',
        duration: 2000
      });
      return;
    }
    const adminInfo = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getStorageSync('adminInfo');
    try {
      const res = await _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().request({
        url: "http://localhost:5000/api/product/add",
        method: "POST",
        header: {
          'admin-id': adminInfo._id
        },
        data: formData
      });
      if (res.statusCode === 201) {
        setFormData({
          image: "",
          name: "",
          price: "",
          description: ""
        });
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
          title: "添加成功",
          icon: "success"
        });
        setTimeout(() => {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().reLaunch({
            url: "/pages/products/index"
          });
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleChooseImage = async () => {
    try {
      const res = await _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().chooseImage({
        count: 1,
        sizeType: ["compressed"],
        sourceType: ["album", "camera"]
      });
      setFormData({
        ...formData,
        image: res.tempFilePaths[0]
      });
    } catch (error) {
      console.log(error);
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
        title: '添加失败',
        icon: 'error'
      });
    }
  };
  const handleCancel = () => {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().reLaunch({
      url: "/pages/products/index"
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("view", {
    className: "w-screen h-screen bg-_he8e8e8_ flex items-center justify-center p-4",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Form, {
      onSubmit: handleSubmit,
      className: "w-full max-w-lg h-auto bg-white rounded-lg shadow-lg p-6 space-y-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
        className: "text-2xl font-bold block text-center mb-6",
        children: "\u6DFB\u52A0\u95F2\u7F6E"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Label, {
        className: "block text-gray-700 text-sm font-bold",
        children: "\u56FE\u7247:"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: "w-full flex flex-col items-center space-y-2",
        children: formData.image ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Image, {
          src: formData.image,
          className: "w-full h-full max-w-_300px_ max-h-_300px_ object-contain rounded",
          mode: "widthFix"
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
          className: "w-32 h-32 bg-gray-200 rounded flex items-center justify-center cursor-pointer hovercbg-gray-300",
          onClick: handleChooseImage,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
            className: "text-gray-500 text-2xl",
            children: "+"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Label, {
        className: "block text-gray-700 text-sm font-bold mt-1",
        children: "\u5546\u54C1:"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Input, {
        name: "name",
        type: "text",
        value: formData.name,
        onInput: e => setFormData({
          ...formData,
          name: e.detail.value
        }),
        className: "w-full h-_50px_ border-solid border-_1px_ p-2 border-gray-300 rounded",
        placeholder: "\u8BF7\u8F93\u5165\u5546\u54C1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Label, {
        className: "block text-gray-700 text-sm font-bold mt-1",
        children: "\u4EF7\u683C:"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Input, {
        name: "price",
        type: "number",
        value: formData.price,
        onInput: e => setFormData({
          ...formData,
          price: e.detail.value
        }),
        className: "w-full h-_50px_ border-solid border-_1px_ p-2 border-gray-300 rounded",
        placeholder: "\u8BF7\u8F93\u5165\u4EF7\u683C"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Label, {
        className: "block text-gray-700 text-sm font-bold mt-1",
        children: "\u63CF\u8FF0:"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Textarea, {
        name: "description",
        value: formData.description,
        onInput: e => setFormData({
          ...formData,
          description: e.detail.value
        }),
        className: "w-full h-_100px_ border-solid border-_1px_ p-2 border-gray-300 rounded",
        placeholder: "\u8BF7\u8F93\u5165\u63CF\u8FF0..."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        className: "w-full bg-_hfbb713_ text-white h-12 rounded mt-6",
        hoverClass: "bg-_ha3770c_",
        formType: "submit",
        children: "\u4FDD\u5B58"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        className: "w-full bg-red-500 text-white h-12 rounded mt-4",
        hoverClass: "bg-red-600",
        onClick: handleCancel,
        children: "\u53D6\u6D88"
      })]
    })
  });
}

/***/ }),

/***/ "./src/pages/products/add.tsx":
/*!************************************!*\
  !*** ./src/pages/products/add.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_products_add_add_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/products/add!./add.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/products/add!./src/pages/products/add.tsx");


var config = {};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_products_add_add_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/products/add', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_products_add_add_tsx__WEBPACK_IMPORTED_MODULE_1__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_products_add_add_tsx__WEBPACK_IMPORTED_MODULE_1__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_products_add_add_tsx__WEBPACK_IMPORTED_MODULE_1__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_products_add_add_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","common"], function() { return __webpack_exec__("./src/pages/products/add.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=add.js.map