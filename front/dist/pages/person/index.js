"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/person/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/person/index!./src/pages/person/index.tsx":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/person/index!./src/pages/person/index.tsx ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Setting; }
/* harmony export */ });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Header */ "./src/components/Header.tsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Footer */ "./src/components/Footer.tsx");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/auth */ "./src/utils/auth.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);







function Setting() {
  const [selectedOrderType, setSelectedOrderType] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("待发货");
  const [orders, setOrders] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);
  const orderTypes = [{
    id: 1,
    name: "待发货",
    icon: "📦"
  }, {
    id: 2,
    name: "待收货",
    icon: "🚚"
  }, {
    id: 3,
    name: "已完成",
    icon: "✅"
  }, {
    id: 4,
    name: "全部订单",
    icon: "📋"
  }];

  // 获取用户订单
  const fetchUserOrders = async () => {
    setLoading(true);
    try {
      const token = _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().getStorageSync("token");
      if (!token) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().showToast({
          title: "请先登录",
          icon: "error",
          duration: 2000
        });
        return;
      }
      const response = await _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().request({
        url: "http://localhost:5000/api/orders/user",
        method: "GET",
        header: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.data.success) {
        setOrders(response.data.data);
      } else {
        throw new Error(response.data.message || "获取订单失败");
      }
    } catch (error) {
      console.error("获取订单失败:", error);
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().showToast({
        title: "获取订单失败",
        icon: "error",
        duration: 2000
      });
    } finally {
      setLoading(false);
    }
  };

  // 页面加载时获取订单
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    fetchUserOrders();
  }, []);

  // 每次页面显示时刷新订单
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__.useDidShow)(() => {
    fetchUserOrders();
  });

  // 处理订单类型切换
  const handleOrderTypeClick = orderName => {
    setSelectedOrderType(orderName);
  };

  // 处理退出登录
  const handleLogout = () => {
    (0,_utils_auth__WEBPACK_IMPORTED_MODULE_3__.logout)();
    setTimeout(() => {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().reLaunch({
        url: "/pages/login/index"
      });
    }, 1000);
  };

  // 筛选订单
  const filteredOrders = orders.filter(order => {
    if (selectedOrderType === "全部订单") {
      return true;
    }
    return order.status === selectedOrderType;
  });

  // 获取状态对应的颜色
  const getStatusColor = status => {
    switch (status) {
      case "待发货":
        return "text-blue-500";
      case "待收货":
        return "text-green-500";
      case "已完成":
        return "text-gray-500";
      case "已取消":
        return "text-red-500";
      default:
        return "text-gray-700";
    }
  };

  // 处理确认收货
  const handleConfirmReceipt = async orderId => {
    try {
      const token = _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().getStorageSync("token");
      if (!token) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().showToast({
          title: "请先登录",
          icon: "error",
          duration: 2000
        });
        return;
      }
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().showModal({
        title: "确认收货",
        content: "确定要确认收货吗？",
        success: async res => {
          if (res.confirm) {
            try {
              const response = await _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().request({
                url: `http://localhost:5000/api/orders/${orderId}/confirm`,
                method: "PUT",
                header: {
                  Authorization: `Bearer ${token}`
                }
              });
              if (response.data.success) {
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().showToast({
                  title: "确认收货成功",
                  icon: "success",
                  duration: 2000
                });
                // 刷新订单列表
                fetchUserOrders();
              } else {
                throw new Error(response.data.message || "确认收货失败");
              }
            } catch (error) {
              console.error("确认收货失败:", error);
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().showToast({
                title: "确认收货失败",
                icon: "error",
                duration: 2000
              });
            }
          }
        }
      });
    } catch (error) {
      console.error("确认收货操作失败:", error);
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().showToast({
        title: "操作失败",
        icon: "error",
        duration: 2000
      });
    }
  };

  // 处理取消订单
  const handleCancelOrder = async orderId => {
    try {
      const token = _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().getStorageSync("token");
      if (!token) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().showToast({
          title: "请先登录",
          icon: "error",
          duration: 2000
        });
        return;
      }
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().showModal({
        title: "取消订单",
        content: "确定要取消该订单吗？",
        success: async res => {
          if (res.confirm) {
            try {
              const response = await _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().request({
                url: `http://localhost:5000/api/orders/${orderId}/cancel`,
                method: "PUT",
                header: {
                  Authorization: `Bearer ${token}`
                }
              });
              if (response.data.success) {
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().showToast({
                  title: "取消订单成功",
                  icon: "success",
                  duration: 2000
                });
                // 刷新订单列表
                fetchUserOrders();
              } else {
                throw new Error(response.data.message || "取消订单失败");
              }
            } catch (error) {
              console.error("取消订单失败:", error);
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().showToast({
                title: "取消订单失败",
                icon: "error",
                duration: 2000
              });
            }
          }
        }
      });
    } catch (error) {
      console.error("取消订单操作失败:", error);
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().showToast({
        title: "操作失败",
        icon: "error",
        duration: 2000
      });
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
    className: "h-screen w-screen",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Header__WEBPACK_IMPORTED_MODULE_0__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
      className: "fixed top-_11p_ h-_84p_ bg-gray-100 w-full p-4",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
        className: "bg-white rounded-lg shadow p-6 max-w-md mx-auto flex flex-col items-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
          className: "text-lg font-bold mb-4",
          children: "\u5FAE\u4FE1\u7528\u6237:"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
          className: "mb-4",
          children: ["VX", _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().getStorageSync("userId")]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
          formType: "submit",
          className: "bg-red-500 text-white rounded-md w-full",
          hoverClass: "bg-red-600",
          onClick: handleLogout,
          children: "\u9000\u51FA\u767B\u5F55"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
      className: "bg-white p-4 fixed top-_36p_ w-full rounded-lg",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
        className: "text-lg font-bold",
        children: "\u6211\u7684\u8BA2\u5355"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
        className: "grid grid-cols-4 gap-4 mt-4",
        children: orderTypes.map(order => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
          className: `flex flex-col items-center justify-center p-2 rounded-lg cursor-pointer ${selectedOrderType === order.name ? "bg-yellow-100 text-yellow-600" : "bg-gray-50"}`,
          onClick: () => handleOrderTypeClick(order.name),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
            className: "text-2xl mb-1",
            children: order.icon
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
            className: "text-sm",
            children: order.name
          })]
        }, order.id))
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.ScrollView, {
      className: "fixed bottom-_5p_ w-_94p_ h-_42p_ bg-white rounded-lg px-4",
      scrollY: true,
      enableFlex: true,
      children: [loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
        className: "flex items-center justify-center h-32",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
          className: "text-gray-500",
          children: "\u52A0\u8F7D\u4E2D..."
        })
      }) : filteredOrders.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
        className: "flex items-center justify-center h-32",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
          className: "text-gray-500",
          children: ["\u6682\u65E0", selectedOrderType === "全部订单" ? "" : selectedOrderType, "\u8BA2\u5355"]
        })
      }) : filteredOrders.map(order => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
        className: "bg-white rounded-lg p-4 mb-4 mr-3 shadow-sm border border-gray-100",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
          className: "flex justify-between items-center mb-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
            className: "text-sm text-gray-500",
            children: ["\u8BA2\u5355\u53F7\uFF1A", order.orderNo]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
            className: `${getStatusColor(order.status)}`,
            children: order.status
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
          className: "border-t border-b border-gray-100 py-3 my-2",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
            className: "flex justify-between items-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
              className: "text-base font-medium",
              children: order.name
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
              className: "text-sm",
              children: ["x", order.quantity]
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
          className: "flex justify-between items-center mt-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
            className: "text-sm text-gray-500",
            children: new Date(order.createTime).toLocaleString()
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
            className: "text-lg font-medium text-primary",
            children: ["\xA5", order.totalAmount.toFixed(2)]
          })]
        }), order.status === "待收货" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
          className: "flex justify-between mt-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
            className: "bg-green-500 text-white rounded flex-1 mr-2",
            onClick: () => {
              handleConfirmReceipt(order._id);
            },
            children: "\u786E\u8BA4\u6536\u8D27"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
            className: "bg-red-500 text-white rounded flex-1",
            onClick: () => {
              handleCancelOrder(order._id);
            },
            children: "\u53D6\u6D88\u8BA2\u5355"
          })]
        }), order.status === "待发货" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
          className: "bg-red-500 text-white mt-3 rounded",
          onClick: () => {
            handleCancelOrder(order._id);
          },
          children: "\u53D6\u6D88\u8BA2\u5355"
        })]
      }, order._id)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
        className: "h-6"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], {})]
  });
}

/***/ }),

/***/ "./src/pages/person/index.tsx":
/*!************************************!*\
  !*** ./src/pages/person/index.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_person_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/person/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/person/index!./src/pages/person/index.tsx");


var config = {};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_person_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/person/index', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_person_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_person_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_person_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_person_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","common"], function() { return __webpack_exec__("./src/pages/person/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map