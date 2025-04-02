"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/cart/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/cart/index!./src/pages/cart/index.tsx":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/cart/index!./src/pages/cart/index.tsx ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ index; }
/* harmony export */ });
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Header */ "./src/components/Header.tsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Footer */ "./src/components/Footer.tsx");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







function index() {
  const [cartItems, setCartItems] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
  const [isModalVisible, setIsModalVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const fetchCartItems = async () => {
    try {
      const response = await _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().request({
        url: "http://localhost:5000/api/cart",
        method: "GET",
        header: {
          Authorization: `Bearer ${_tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().getStorageSync("token")}`
        }
      });

      // 确保返回的数据存在且有items数组
      if (response.data && response.data.items) {
        setCartItems(response.data.items);
      } else {
        setCartItems([]);
      }
    } catch (error) {
      console.error("获取购物车失败:", error);
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().showToast({
        title: "获取购物车失败",
        icon: "error"
      });
    } finally {
      setLoading(false);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    fetchCartItems();
  }, []);
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__.useDidShow)(() => {
    fetchCartItems();
  });
  if (loading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
      className: "min-h-screen",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Header__WEBPACK_IMPORTED_MODULE_0__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
        className: "flex items-center justify-center h-_84p_",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
          children: "\u52A0\u8F7D\u4E2D..."
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], {})]
    });
  }
  const updateQuantity = async (productId, newQuantity) => {
    if (newQuantity < 1) return;
    try {
      const response = await _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().request({
        url: "http://localhost:5000/api/cart/update",
        method: "PUT",
        header: {
          Authorization: `Bearer ${_tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().getStorageSync("token")}`
        },
        data: {
          productId,
          quantity: newQuantity
        }
      });
      if (response.data && response.data.items) {
        setCartItems(response.data.items);
      }
    } catch (error) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().showToast({
        title: "更新数量失败",
        icon: "error"
      });
    }
  };
  const removeItem = async productId => {
    try {
      const response = await _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().request({
        url: "http://localhost:5000/api/cart/remove",
        method: "DELETE",
        header: {
          Authorization: `Bearer ${_tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().getStorageSync("token")}`
        },
        data: {
          productId
        }
      });
      if (response.data && response.data.items) {
        setCartItems(response.data.items);
      }
    } catch (error) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().showToast({
        title: "删除商品失败",
        icon: "error"
      });
    }
  };
  const handlePay = () => {
    const token = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().getStorageSync("token");
    if (!token) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().showToast({
        title: "请先登录",
        icon: "error",
        duration: 2000
      });
      return;
    }
    setIsModalVisible(true);
  };
  const confirmOrder = async () => {
    try {
      const token = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().getStorageSync("token");
      // 构建订单商品数据
      const orderProducts = cartItems.map(item => ({
        productId: item.productId._id,
        quantity: item.quantity
      }));
      const response = await _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().request({
        url: "http://localhost:5000/api/orders/create",
        method: "POST",
        data: {
          products: orderProducts
        },
        header: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.data.success) {
        // 清空购物车
        const clearCartResponse = await _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().request({
          url: "http://localhost:5000/api/cart/clear",
          method: "POST",
          header: {
            Authorization: `Bearer ${token}`
          }
        });
        if (clearCartResponse.data.success) {
          setCartItems([]); // 清空本地购物车数据
        }
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().showToast({
          title: "下单成功",
          icon: "success",
          duration: 2000
        });
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().reLaunch({
          url: "/pages/cart/index"
        });
      } else {
        throw new Error(response.data.message || "下单失败");
      }
    } catch (error) {
      console.error("下单错误:", error);
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().showToast({
        title: error.message || "下单失败",
        icon: "error",
        duration: 2000
      });
    }
    setIsModalVisible(false);
  };

  // 计算总金额
  const totalAmount = cartItems.reduce((sum, item) => sum + item.productId.price * item.quantity, 0).toFixed(2);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
    className: "min-h-screen",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Header__WEBPACK_IMPORTED_MODULE_0__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.ScrollView, {
      className: "fixed top-_11p_ h-_84p_ bg-gray-100 w-full p-3",
      scrollY: true,
      enableFlex: true,
      children: cartItems.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
        className: "flex items-center justify-center h-full",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
          children: "\u8D2D\u7269\u8F66\u662F\u7A7A\u7684"
        })
      }) : cartItems.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
        className: "flex items-center justify-between bg-white p-4 mb-2 rounded-lg w-_94p_",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Image, {
          src: item.productId.image,
          className: "w-20 h-20 rounded-md object-cover"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
          className: "flex-1 ml-4",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
            className: "flex flex-col gap-y-2",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
              className: "text-lg font-medium",
              children: item.productId.name
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
              className: "text-sm text-gray-500",
              children: item.productId.description
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
              className: "text-red-500",
              children: ["\xA5", item.productId.price]
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
          className: "flex flex-col items-center gap-y-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
            className: "flex items-center space-x-2 gap-2 w-24",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
              className: "bg-gray-200 rounded w-6 h-6 flex items-center justify-center",
              onClick: () => updateQuantity(item.productId._id, item.quantity - 1),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
                className: "text-sm",
                children: " - "
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
              children: item.quantity
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
              className: "bg-gray-200 rounded w-6 h-6 flex items-center justify-center",
              onClick: () => updateQuantity(item.productId._id, item.quantity + 1),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
                className: "text-sm",
                children: " + "
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
            className: "bg-red-500 text-white px-2 rounded",
            "hover-class": "bg-red-800",
            onClick: () => removeItem(item.productId._id),
            children: "\u5220\u9664"
          })]
        })]
      }, item.productId._id))
    }), cartItems.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
      className: "fixed bottom-_5p_ left-0 right-0 bg-white p-4 flex justify-between items-center w-full rounded-lg",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
        className: "text-lg",
        children: ["\u603B\u8BA1: \xA5", totalAmount]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
        className: "bg-yellow-500 text-white rounded mr-1",
        "hover-class": "bg-yellow-800",
        onClick: handlePay,
        children: "\u7ED3\u7B97"
      })]
    }), isModalVisible && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
      className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
        className: "bg-white rounded-lg p-6 w-_80p_ max-h-_80p_ overflow-y-auto",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
          className: "text-xl font-bold mb-4",
          children: "\u786E\u8BA4\u8BA2\u5355"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.ScrollView, {
          scrollY: true,
          className: "max-h-64 my-4",
          children: cartItems.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
            className: "flex items-center py-2 pr-4 border-b border-gray-100",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Image, {
              src: item.productId.image,
              className: "w-12 h-12 rounded-md object-cover"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
              className: "ml-3 flex-1",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
                className: "font-medium",
                children: item.productId.name
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
                className: "flex justify-between mt-1",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
                  className: "text-red-500",
                  children: ["\xA5", item.productId.price]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
                  className: "text-gray-500",
                  children: ["x", item.quantity]
                })]
              })]
            })]
          }, item.productId._id))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
          className: "border-t border-gray-200 pt-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
            className: "font-bold text-lg mb-4",
            children: ["\u603B\u8BA1: \xA5", totalAmount]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
            className: "flex justify-between mt-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
              className: "bg-gray-300 text-gray-700 rounded w-_45p_",
              onClick: () => setIsModalVisible(false),
              children: "\u53D6\u6D88"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
              className: "bg-yellow-500 text-white rounded w-_45p_",
              "hover-class": "bg-yellow-600",
              onClick: confirmOrder,
              children: "\u786E\u8BA4\u652F\u4ED8"
            })]
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], {})]
  });
}

/***/ }),

/***/ "./src/pages/cart/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/cart/index.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_cart_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/cart/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/cart/index!./src/pages/cart/index.tsx");


var config = {};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_cart_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/cart/index', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_cart_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_cart_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_cart_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_cart_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","common"], function() { return __webpack_exec__("./src/pages/cart/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map