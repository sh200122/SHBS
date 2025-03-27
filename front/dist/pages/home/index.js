"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/home/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/home/index!./src/pages/home/index.tsx":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/home/index!./src/pages/home/index.tsx ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Dashboard; }
/* harmony export */ });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Header */ "./src/components/Header.tsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Footer */ "./src/components/Footer.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ProductBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ProductBlock */ "./src/components/ProductBlock.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);







function Dashboard() {
  const [bannerList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([{
    id: 1,
    image: "https://github.com/sh200122/SHBS/blob/main/front/public/images/banner1.jpg?raw=true"
  }, {
    id: 2,
    image: "https://github.com/sh200122/SHBS/blob/main/front/public/images/banner1.jpg?raw=true"
  }, {
    id: 3,
    image: "https://github.com/sh200122/SHBS/blob/main/front/public/images/banner1.jpg?raw=true"
  }]);
  const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const [limitTimeProducts, setLimitTimeProducts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const [hotSaleProducts, setHotSaleProducts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const [recommendProducts, setRecommendProducts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);

  // 随机打乱数组的函数
  const shuffleArray = array => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // 获取商品数据
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const fetchProducts = async () => {
      try {
        const response = await _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().request({
          url: "http://localhost:5000/api/product",
          method: "GET"
        });

        // 只过滤 status 为 active 的商品
        const activeProducts = response.data.filter(product => product.status === "active");

        // 随机打乱并分配到不同区块
        const shuffled = shuffleArray(activeProducts);
        setProducts(activeProducts);
        setLimitTimeProducts(shuffled.slice(0, 4));
        setHotSaleProducts(shuffled.slice(4, 8));
        setRecommendProducts(shuffled.slice(8, 12));
      } catch (error) {
        console.error("获取商品失败:", error);
      }
    };
    fetchProducts();
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
    className: "min-h-screen",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Header__WEBPACK_IMPORTED_MODULE_0__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.ScrollView, {
      className: "fixed top-_11p_ h-_84p_ bg-gray-100 overflow-y-scroll w-full",
      scrollY: true,
      enableFlex: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
        className: "bg-sky-500 h-_30p_",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Swiper, {
          className: "h-full w-full",
          indicatorDots: true,
          autoplay: true,
          interval: 3000,
          circular: true,
          children: bannerList.map(banner => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.SwiperItem, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Image, {
              className: "w-full h-full",
              src: banner.image,
              mode: "aspectFill"
            })
          }, banner.id))
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
        className: "h-_70p_",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
          className: "flex p-4 justify-between items-center h-_10p_ bg-white",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
            className: "text-2xl font-bold",
            children: "\u231B\u9650\u65F6\u6361\u6F0F"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
            className: "text-sm text-gray-500",
            children: "\u67E5\u770B\u66F4\u591A"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
          className: "h-_90p_ p-2",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
            className: "grid grid-cols-2 gap-2 h-full",
            children: limitTimeProducts.map(product => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_ProductBlock__WEBPACK_IMPORTED_MODULE_4__["default"], {
              id: product._id,
              image: product.image,
              name: product.name,
              price: product.price,
              description: product.description,
              onClick: () => {}
            }, product._id))
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
        className: "h-_70p_",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
          className: "flex p-4 justify-between items-center h-_10p_ bg-white",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
            className: "text-2xl font-bold",
            children: "\uD83D\uDD25\u70ED\u5356\u4E8C\u624B"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
            className: "text-sm text-gray-500",
            children: "\u67E5\u770B\u66F4\u591A"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
          className: "h-_90p_ p-2",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
            className: "grid grid-cols-2 gap-2 h-full",
            children: hotSaleProducts.map(product => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_ProductBlock__WEBPACK_IMPORTED_MODULE_4__["default"], {
              id: product._id,
              image: product.image,
              name: product.name,
              price: product.price,
              description: product.description,
              onClick: () => {}
            }, product._id))
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
        className: "h-_70p_",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
          className: "flex p-4 justify-between items-center h-_10p_ bg-white",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
            className: "text-2xl font-bold",
            children: "\uD83D\uDC40\u731C\u4F60\u559C\u6B22"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
            className: "text-sm text-gray-500",
            children: "\u67E5\u770B\u66F4\u591A"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
          className: "h-_90p_ p-2",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
            className: "grid grid-cols-2 gap-2 h-full",
            children: recommendProducts.map(product => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_ProductBlock__WEBPACK_IMPORTED_MODULE_4__["default"], {
              id: product._id,
              image: product.image,
              name: product.name,
              price: product.price,
              description: product.description,
              onClick: () => {}
            }, product._id))
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], {})]
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
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



function ProductBlock(_ref) {
  let {
    id,
    image,
    name,
    price,
    description,
    onClick
  } = _ref;
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [imageError, setImageError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const defaultImage = "/assets/images/default.png";
  const handleImageLoad = () => {
    setLoading(false);
  };
  const handleImageError = () => {
    setImageError(true);
    setLoading(false);
  };
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
    className: "bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-200 activecscale-95",
    onClick: handleClick,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
      className: "relative w-full h-32",
      children: [loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
        className: "absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
          className: "text-gray-400",
          children: "\u52A0\u8F7D\u4E2D..."
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Image, {
        className: `w-full h-full object-cover transition-opacity duration-300 ${loading ? "opacity-0" : "opacity-100"}`,
        src: imageError ? defaultImage : image,
        mode: "aspectFill",
        onLoad: handleImageLoad,
        onError: handleImageError,
        lazyLoad: true
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
      className: "p-2 flex flex-col relative",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
        className: "text-sm font-medium text-gray-800 truncate",
        children: name
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
        className: "text-xs text-gray-500 truncate mt-1",
        children: description
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
        className: "text-red-500 text-lg font-bold mt-1",
        children: ["\xA5", price]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
        className: "absolute bottom-3 right-2 flex gap-2",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
          className: "rounded-lg transition-colors duration-200",
          "hover-class": "bg-yellow-500",
          "hover-stay-time": 100,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
            className: "text-2xl text-center transition-transform duration-200",
            "hover-class": "scale-110",
            children: "\uD83D\uDECD\uFE0F"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
          className: "rounded-lg transition-colors duration-200",
          "hover-class": "bg-red-500",
          "hover-stay-time": 100,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
            className: "text-2xl text-center transition-transform duration-200",
            "hover-class": "scale-110",
            children: "\uD83D\uDED2"
          })
        })]
      })]
    })]
  });
}

/***/ }),

/***/ "./src/pages/home/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/home/index.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_home_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/home/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/home/index!./src/pages/home/index.tsx");


var config = {};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_home_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/home/index', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_home_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_home_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_home_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_home_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","common"], function() { return __webpack_exec__("./src/pages/home/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map