"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/components/Footer.tsx":
/*!***********************************!*\
  !*** ./src/components/Footer.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Footer; }
/* harmony export */ });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



function Footer(_ref) {
  let {} = _ref;
  // 获取当前页面路径
  const currentPath = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getCurrentInstance().router?.path || "";

  // 判断是否为当前页面的函数
  const isActive = path => currentPath.includes(path);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
    className: "fixed bottom-0 left-0 right-0 flex justify-between items-center bg-white py-2 border-t border-gray-200 h-_5p_",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
      className: "flex-1 flex flex-col items-center",
      onClick: () => _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().switchTab({
        url: "/pages/home/index"
      }),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
        className: `text-2xl ${isActive("home") ? "text-_hfbb713_" : ""}`,
        children: "\uD83C\uDFE0"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
      className: "flex-1 flex flex-col items-center",
      onClick: () => _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().switchTab({
        url: "/pages/classify/index"
      }),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
        className: `text-2xl ${isActive("classify") ? "text-_hfbb713_" : ""}`,
        children: "\uD83D\uDDC2\uFE0F"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
      className: "flex-1 flex flex-col items-center",
      onClick: () => _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().switchTab({
        url: "/pages/cart/index"
      }),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
        className: `text-2xl ${isActive("cart") ? "text-_hfbb713_" : ""}`,
        children: "\uD83D\uDED2"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
      className: "flex-1 flex flex-col items-center",
      onClick: () => _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().switchTab({
        url: "/pages/person/index"
      }),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
        className: `text-2xl ${isActive("person") ? "text-_hfbb713_" : ""}`,
        children: "\uD83D\uDC64"
      })
    })]
  });
}

/***/ }),

/***/ "./src/components/Header.tsx":
/*!***********************************!*\
  !*** ./src/components/Header.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




function Header(_ref) {
  let {} = _ref;
  const handleInputClick = () => {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
      url: "/pages/search/index"
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: "flex items-center justify-between bg-white border-b border-gray-200 fixed top-_3p_ left-0 right-0",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Image, {
      src: "https://github.com/sh200122/SHBS/blob/main/front/public/images/logo.png?raw=true",
      className: "w-20 h-20"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: "flex items-center justify-center w-_55p_ mr-28",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: "w-full border-solid border-_1px_ p-2 border-gray-300 rounded bg-gray-50 text-gray-400",
        onClick: handleInputClick,
        children: "\uD83D\uDD0D \u641C\u7D22\u5546\u54C1"
      })
    })]
  });
}

/***/ }),

/***/ "./src/components/ProductBlock.tsx":
/*!*****************************************!*\
  !*** ./src/components/ProductBlock.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ProductBlock; }
/* harmony export */ });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




function ProductBlock(_ref) {
  let {
    id,
    image,
    name,
    price,
    description,
    onClick,
    adminId
  } = _ref;
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const [imageError, setImageError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const defaultImage = "/assets/images/default.png";
  const handleImageLoad = () => {
    setLoading(false);
  };
  const handleImageError = () => {
    setImageError(true);
    setLoading(false);
  };
  const handleAddToCart = async e => {
    e.stopPropagation();

    // 检查登录状态
    const token = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync("token");
    if (!token) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
        title: "请先登录",
        icon: "error",
        duration: 2000
      });
      return;
    }

    // 检查商品ID
    if (!id) {
      console.error("Product ID is missing");
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
        title: "商品信息错误",
        icon: "error",
        duration: 2000
      });
      return;
    }
    try {
      const response = await _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
        url: "http://localhost:5000/api/cart/add",
        method: "POST",
        data: {
          productId: id,
          adminId
        },
        header: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.statusCode === 200) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
          title: "已添加到购物车",
          icon: "success",
          duration: 2000
        });
        console.log("购物车更新成功:", response.data);
      } else {
        throw new Error(response.data.message || "添加失败");
      }
    } catch (error) {
      console.error("添加购物车错误:", error);
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
        title: error.message || "添加失败",
        icon: "error",
        duration: 2000
      });
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: "bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-200 activecscale-95",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: "relative w-full h-32",
      children: [loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: "absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
          className: "text-gray-400",
          children: "\u52A0\u8F7D\u4E2D..."
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Image, {
        className: `w-full h-full object-cover transition-opacity duration-300 ${loading ? "opacity-0" : "opacity-100"}`,
        src: imageError ? defaultImage : image,
        mode: "aspectFill",
        onLoad: handleImageLoad,
        onError: handleImageError,
        lazyLoad: true
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: "p-2 flex flex-col relative",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
        className: "text-sm font-medium text-gray-800 truncate",
        children: name
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
        className: "text-xs text-gray-500 truncate mt-1",
        children: description
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
        className: "text-red-500 text-lg font-bold mt-1",
        children: ["\xA5", price]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: "absolute bottom-3 right-2 flex gap-2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
          className: "rounded-lg transition-colors duration-200",
          "hover-class": "bg-red-500",
          "hover-stay-time": 100,
          onClick: handleAddToCart,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
            className: "text-2xl text-center transition-transform duration-200",
            "hover-class": "scale-110",
            children: "\uD83D\uDED2"
          })
        })
      })]
    })]
  });
}

/***/ }),

/***/ "./src/utils/auth.ts":
/*!***************************!*\
  !*** ./src/utils/auth.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getToken: function() { return /* binding */ getToken; },
/* harmony export */   logout: function() { return /* binding */ logout; },
/* harmony export */   setToken: function() { return /* binding */ setToken; },
/* harmony export */   setUserId: function() { return /* binding */ setUserId; }
/* harmony export */ });
/* unused harmony exports removeToken, getUserId, removeUserId */
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);

const setToken = token => {
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorageSync("token", token);
};
const getToken = () => {
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync("token");
};
const removeToken = () => {
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().removeStorageSync("token");
};
const getUserId = () => {
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync("userId");
};
const setUserId = userId => {
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorageSync("userId", userId);
};
const removeUserId = () => {
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().removeStorageSync("userId");
};
const logout = () => {
  removeToken();
  removeUserId();
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().removeStorageSync("searchHistory"); // 清空搜索历史记录
};

/***/ })

}]);
//# sourceMappingURL=common.js.map