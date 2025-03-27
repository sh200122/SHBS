"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/products/edit"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/products/edit!./src/pages/products/edit.tsx":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/products/edit!./src/pages/products/edit.tsx ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ edit; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




function edit(_ref) {
  let {} = _ref;
  const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const adminInfo = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getStorageSync('adminInfo');
    const id = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getCurrentInstance().router?.params?.id;
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().request({
      url: `http://localhost:5000/api/product/${id}`,
      method: "GET",
      header: {
        'admin-id': adminInfo._id
      },
      success: res => {
        const product = res.data;
        setName(product.name);
        setPrice(product.price);
        setDescription(product.description);
        setImage(product.image);
      },
      fail: err => {
        console.log(err);
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
          title: "获取商品失败",
          icon: "none"
        });
      }
    });
  }, []);
  const handleSubmit = async e => {
    e.preventDefault();
    const adminInfo = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getStorageSync('adminInfo');
    const id = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getCurrentInstance().router?.params?.id;
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().request({
      url: `http://localhost:5000/api/product/${id}`,
      method: "PUT",
      header: {
        'admin-id': adminInfo._id
      },
      data: {
        name,
        price: Number(price),
        description,
        image
      },
      success: () => {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
          title: "编辑商品成功",
          icon: "success"
        });
        setTimeout(() => {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().reLaunch({
            url: "/pages/products/index"
          });
        }, 1500);
      },
      fail: err => {
        console.log(err);
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
          title: "编辑商品失败，请重试",
          icon: "none"
        });
      }
    });
  };
  const handleChooseImage = async () => {
    try {
      const res = await _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().chooseImage({
        count: 1,
        sizeType: ["compressed"],
        sourceType: ["album", "camera"]
      });

      // 将图片转换为Base64
      const tempFilePath = res.tempFilePaths[0];
      const fileContent = await _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getFileSystemManager().readFileSync(tempFilePath, "base64");
      const base64Image = `data:image/jpeg;base64,${fileContent}`;
      setImage(base64Image);
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
        title: "图片选择成功",
        icon: "success"
      });
    } catch (error) {
      console.error("图片处理失败:", error);
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
        title: "图片处理失败",
        icon: "none"
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
        children: "\u7F16\u8F91\u5546\u54C1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Label, {
        className: "block text-gray-700 text-sm font-bold",
        children: "\u56FE\u7247:"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: "w-full flex items-center justify-center space-x-2",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Image, {
          src: image,
          className: "w-full h-full max-w-_300px_ max-h-_300px_ object-contain rounded",
          mode: "widthFix"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          className: "bg-_hfbb713_ text-white h-6 w-30 rounded text-xs leading-6",
          hoverClass: "bg-_ha3770c_",
          onClick: handleChooseImage,
          children: "\u91CD\u65B0\u9009\u62E9\u56FE\u7247"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Label, {
        className: "block text-gray-700 text-sm font-bold mt-1",
        children: "\u5546\u54C1:"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Input, {
        name: "name",
        type: "text",
        value: name,
        onInput: e => setName(e.detail.value),
        className: "w-full h-_50px_ border-solid border-_1px_ p-2 border-gray-300 rounded"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Label, {
        className: "block text-gray-700 text-sm font-bold mt-1",
        children: "\u4EF7\u683C:"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Input, {
        name: "price",
        type: "number",
        value: price,
        onInput: e => setPrice(e.detail.value),
        className: "w-full h-_50px_ border-solid border-_1px_ p-2 border-gray-300 rounded"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Label, {
        className: "block text-gray-700 text-sm font-bold mt-1",
        children: "\u63CF\u8FF0:"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Textarea, {
        name: "description",
        value: description,
        onInput: e => setDescription(e.detail.value),
        className: "w-full h-_100px_ border-solid border-_1px_ p-2 border-gray-300 rounded"
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

/***/ "./src/pages/products/edit.tsx":
/*!*************************************!*\
  !*** ./src/pages/products/edit.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_products_edit_edit_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/products/edit!./edit.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/products/edit!./src/pages/products/edit.tsx");


var config = {};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_products_edit_edit_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/products/edit', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_products_edit_edit_tsx__WEBPACK_IMPORTED_MODULE_1__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_products_edit_edit_tsx__WEBPACK_IMPORTED_MODULE_1__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_products_edit_edit_tsx__WEBPACK_IMPORTED_MODULE_1__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_products_edit_edit_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","common"], function() { return __webpack_exec__("./src/pages/products/edit.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=edit.js.map