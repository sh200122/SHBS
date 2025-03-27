"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/setting/edit"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/setting/edit!./src/pages/setting/edit.tsx":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/setting/edit!./src/pages/setting/edit.tsx ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EditAdmin; }
/* harmony export */ });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




function EditAdmin() {
  const [admin, setAdmin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    name: "",
    email: "",
    password: ""
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const adminInfo = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('adminInfo');
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
      url: "http://localhost:5000/api/admin",
      method: "GET",
      header: {
        'admin-id': adminInfo._id
      },
      success: res => {
        if (res.data.success) {
          setAdmin(res.data.data);
        } else {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
            title: res.data.message || '获取用户信息失败',
            icon: 'error'
          });
        }
      },
      fail: err => {
        console.error('获取用户数据失败:', err);
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
          title: '获取用户信息失败',
          icon: 'error'
        });
      }
    });
  }, []);
  const handleSubmit = e => {
    e.preventDefault();
    const adminInfo = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('adminInfo');
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
      url: "http://localhost:5000/api/admin",
      method: "PUT",
      data: admin,
      header: {
        'admin-id': adminInfo._id
      },
      success: () => {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
          title: '更新成功',
          icon: 'success'
        });
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().reLaunch({
          url: "/pages/setting/index"
        });
      },
      fail: err => {
        console.error('更新失败:', err);
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
          title: '更新失败',
          icon: 'error'
        });
      }
    });
  };
  const handleCancel = () => {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().reLaunch({
      url: "/pages/setting/index"
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("view", {
    className: "w-screen h-screen bg-_he8e8e8_ flex items-center justify-center p-4",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Form, {
      onSubmit: handleSubmit,
      className: "w-full max-w-lg h-auto bg-white rounded-lg shadow-lg p-6 space-y-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
        className: "text-2xl font-bold block text-center mb-6",
        children: "\u7F16\u8F91\u7BA1\u7406\u5458"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Label, {
        className: "block text-gray-700 text-sm font-bold mt-1",
        children: "\u540D\u79F0:"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Input, {
        name: "name",
        value: admin.name,
        onInput: e => setAdmin({
          ...admin,
          name: e.detail.value
        }),
        className: "w-full h-_50px_ border-solid border-_1px_ p-2 border-gray-300 rounded"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Label, {
        className: "block text-gray-700 text-sm font-bold mt-1",
        children: "\u90AE\u7BB1:"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Input, {
        name: "email",
        value: admin.email,
        onInput: e => setAdmin({
          ...admin,
          email: e.detail.value
        }),
        className: "w-full h-_50px_ border-solid border-_1px_ p-2 border-gray-300 rounded"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Label, {
        className: "block text-gray-700 text-sm font-bold mt-1",
        children: "\u5BC6\u7801:"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Input, {
        name: "password",
        value: admin.password,
        onInput: e => setAdmin({
          ...admin,
          password: e.detail.value
        }),
        className: "w-full h-_50px_ border-solid border-_1px_ p-2 border-gray-300 rounded"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        className: "w-full bg-_hfbb713_ text-white h-12 rounded mt-6",
        hoverClass: "bg-yellow-500",
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

/***/ "./src/pages/setting/edit.tsx":
/*!************************************!*\
  !*** ./src/pages/setting/edit.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_setting_edit_edit_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/setting/edit!./edit.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/setting/edit!./src/pages/setting/edit.tsx");


var config = {};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_setting_edit_edit_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/setting/edit', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_setting_edit_edit_tsx__WEBPACK_IMPORTED_MODULE_1__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_setting_edit_edit_tsx__WEBPACK_IMPORTED_MODULE_1__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_setting_edit_edit_tsx__WEBPACK_IMPORTED_MODULE_1__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_setting_edit_edit_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","common"], function() { return __webpack_exec__("./src/pages/setting/edit.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=edit.js.map