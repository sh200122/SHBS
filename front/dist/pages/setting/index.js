"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/setting/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/setting/index!./src/pages/setting/index.tsx":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/setting/index!./src/pages/setting/index.tsx ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Setting; }
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
/*
 * @Author: alan alan.shi@duomai.com
 * @Date: 2025-03-05 14:51:28
 * @LastEditors: alan alan.shi@duomai.com
 * @LastEditTime: 2025-03-05 15:43:13
 * @FilePath: \front\src\pages\Setting.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */






const StatListItem = _ref => {
  let {
    item
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
    className: "flex justify-between items-center border-b border-gray-100 pb-2",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
      className: "flex items-center gap-2",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
        className: "text-gray-600",
        children: [item.icon, " ", item.name]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
      className: "text-sm text-gray-500",
      children: [item.count, item.unit]
    })]
  });
};
function Setting(_ref2) {
  let {} = _ref2;
  const statData = [{
    icon: '👁️',
    name: '小米20',
    count: '1w',
    unit: '人浏览'
  }, {
    icon: '💬',
    name: '水果10',
    count: '1k',
    unit: '人评论'
  }, {
    icon: '👁️',
    name: '小米20',
    count: '1w',
    unit: '人浏览'
  }, {
    icon: '👁️',
    name: '小米20',
    count: '1w',
    unit: '人浏览'
  }, {
    icon: '💬',
    name: '水果10',
    count: '1k',
    unit: '人评论'
  }, {
    icon: '👁️',
    name: '小米20',
    count: '1w',
    unit: '人浏览'
  }, {
    icon: '👁️',
    name: '小米20',
    count: '1w',
    unit: '人浏览'
  }, {
    icon: '💬',
    name: '水果10',
    count: '1k',
    unit: '人评论'
  }, {
    icon: '👁️',
    name: '小米20',
    count: '1w',
    unit: '人浏览'
  }];
  const [admin, setAdmin] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    name: "",
    email: "",
    password: ""
  });
  const getAdmin = () => {
    const adminInfo = _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().getStorageSync('adminInfo');
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().request({
      url: "http://localhost:5000/api/admin",
      method: "GET",
      header: {
        'admin-id': adminInfo._id
      },
      success: res => {
        setAdmin({
          name: res.data.data.name,
          email: res.data.data.email,
          password: ""
        });
      },
      fail: err => {
        console.log(err);
      }
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    getAdmin();
  }, []);
  const handleLogout = () => {
    console.log("退出登录...");

    // 清除 Token
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().removeStorageSync("token");
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().removeStorageSync('adminInfo');

    // 提示信息
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().showToast({
      title: "已退出登录",
      icon: "success"
    });

    // 跳转回登录页
    setTimeout(() => {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().redirectTo({
        url: "/pages/login/index"
      });
    }, 1000); // 延迟 1 秒，让用户看到退出提示
  };
  const handleEdit = () => {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().reLaunch({
      url: "/pages/setting/edit"
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
    className: "h-screen w-screen",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Header__WEBPACK_IMPORTED_MODULE_0__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
      className: "fixed top-_11p_ h-_84p_ bg-gray-100 w-full p-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
        className: "bg-white rounded-lg shadow p-6 max-w-md mx-auto",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
          className: "mb-6 flex items-center justify-center gap-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
            className: "text-lg font-bold mt-1",
            children: "\uD83D\uDDFF"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
            className: "text-lg font-bold mt-1",
            children: admin.name
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
          className: "bg-_hfbb713_ text-white rounded-md w-full mb-4",
          hoverClass: "bg-yellow-500",
          onClick: handleEdit,
          children: "\u7F16\u8F91\u4E2A\u4EBA\u4FE1\u606F"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
          formType: "submit",
          className: "bg-red-500 text-white rounded-md w-full",
          hoverClass: "bg-red-600",
          onClick: handleLogout,
          children: "\u9000\u51FA\u767B\u5F55"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
        className: "bg-white rounded-lg shadow p-6 mx-auto mt-4 h-_66p_",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
          className: "text-lg font-bold",
          children: "\u6211\u7684\u53D1\u5E03"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.ScrollView, {
          className: "overflow-y-scroll h-_90p_ py-4",
          scrollY: true,
          enableFlex: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
            className: "space-y-4 pr-4",
            children: statData.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(StatListItem, {
              item: item
            }, index))
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], {})]
  });
}

/***/ }),

/***/ "./src/pages/setting/index.tsx":
/*!*************************************!*\
  !*** ./src/pages/setting/index.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_setting_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/setting/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/setting/index!./src/pages/setting/index.tsx");


var config = {};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_setting_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/setting/index', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_setting_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_setting_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_setting_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_setting_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","common"], function() { return __webpack_exec__("./src/pages/setting/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map