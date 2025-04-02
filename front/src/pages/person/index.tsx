import { View, Text, Button, ScrollView, Image } from "@tarojs/components";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Taro, { useDidShow } from "@tarojs/taro";
import { logout } from "@/utils/auth";
import { useEffect, useState } from "react";

interface OrderItem {
  _id: string;
  orderNo: string;
  name: string;
  quantity: number;
  totalAmount: number;
  status: string;
  createTime: string;
  productId?: string;
}

export default function Setting() {
  const [selectedOrderType, setSelectedOrderType] = useState("待发货");
  const [orders, setOrders] = useState<OrderItem[]>([]);
  const [loading, setLoading] = useState(true);

  const orderTypes = [
    { id: 1, name: "待发货", icon: "📦" },
    { id: 2, name: "待收货", icon: "🚚" },
    { id: 3, name: "已完成", icon: "✅" },
    { id: 4, name: "全部订单", icon: "📋" },
  ];

  // 获取用户订单
  const fetchUserOrders = async () => {
    setLoading(true);
    try {
      const token = Taro.getStorageSync("token");
      if (!token) {
        Taro.showToast({
          title: "请先登录",
          icon: "error",
          duration: 2000,
        });
        return;
      }

      const response = await Taro.request({
        url: "http://localhost:5000/api/orders/user",
        method: "GET",
        header: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        setOrders(response.data.data);
      } else {
        throw new Error(response.data.message || "获取订单失败");
      }
    } catch (error) {
      console.error("获取订单失败:", error);
      Taro.showToast({
        title: "获取订单失败",
        icon: "error",
        duration: 2000,
      });
    } finally {
      setLoading(false);
    }
  };

  // 页面加载时获取订单
  useEffect(() => {
    fetchUserOrders();
  }, []);

  // 每次页面显示时刷新订单
  useDidShow(() => {
    fetchUserOrders();
  });

  // 处理订单类型切换
  const handleOrderTypeClick = (orderName: string) => {
    setSelectedOrderType(orderName);
  };

  // 处理退出登录
  const handleLogout = () => {
    logout();
    setTimeout(() => {
      Taro.reLaunch({
        url: "/pages/login/index",
      });
    }, 1000);
  };

  // 筛选订单
  const filteredOrders = orders.filter((order) => {
    if (selectedOrderType === "全部订单") {
      return true;
    }
    return order.status === selectedOrderType;
  });

  // 获取状态对应的颜色
  const getStatusColor = (status: string) => {
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
  const handleConfirmReceipt = async (orderId: string) => {
    try {
      const token = Taro.getStorageSync("token");
      if (!token) {
        Taro.showToast({
          title: "请先登录",
          icon: "error",
          duration: 2000,
        });
        return;
      }

      Taro.showModal({
        title: "确认收货",
        content: "确定要确认收货吗？",
        success: async (res) => {
          if (res.confirm) {
            try {
              const response = await Taro.request({
                url: `http://localhost:5000/api/orders/${orderId}/confirm`,
                method: "PUT",
                header: {
                  Authorization: `Bearer ${token}`,
                },
              });

              if (response.data.success) {
                Taro.showToast({
                  title: "确认收货成功",
                  icon: "success",
                  duration: 2000,
                });
                // 刷新订单列表
                fetchUserOrders();
              } else {
                throw new Error(response.data.message || "确认收货失败");
              }
            } catch (error) {
              console.error("确认收货失败:", error);
              Taro.showToast({
                title: "确认收货失败",
                icon: "error",
                duration: 2000,
              });
            }
          }
        },
      });
    } catch (error) {
      console.error("确认收货操作失败:", error);
      Taro.showToast({
        title: "操作失败",
        icon: "error",
        duration: 2000,
      });
    }
  };

  // 处理取消订单
  const handleCancelOrder = async (orderId: string) => {
    try {
      const token = Taro.getStorageSync("token");
      if (!token) {
        Taro.showToast({
          title: "请先登录",
          icon: "error",
          duration: 2000,
        });
        return;
      }

      Taro.showModal({
        title: "取消订单",
        content: "确定要取消该订单吗？",
        success: async (res) => {
          if (res.confirm) {
            try {
              const response = await Taro.request({
                url: `http://localhost:5000/api/orders/${orderId}/cancel`,
                method: "PUT",
                header: {
                  Authorization: `Bearer ${token}`,
                },
              });

              if (response.data.success) {
                Taro.showToast({
                  title: "取消订单成功",
                  icon: "success",
                  duration: 2000,
                });
                // 刷新订单列表
                fetchUserOrders();
              } else {
                throw new Error(response.data.message || "取消订单失败");
              }
            } catch (error) {
              console.error("取消订单失败:", error);
              Taro.showToast({
                title: "取消订单失败",
                icon: "error",
                duration: 2000,
              });
            }
          }
        },
      });
    } catch (error) {
      console.error("取消订单操作失败:", error);
      Taro.showToast({
        title: "操作失败",
        icon: "error",
        duration: 2000,
      });
    }
  };

  return (
    <View className="h-screen w-screen">
      <Header />
      <View className="fixed top-[11%] h-[84%] bg-gray-100 w-full p-4">
        <View className="bg-white rounded-lg shadow p-6 max-w-md mx-auto flex flex-col items-center">
          <Text className="text-lg font-bold mb-4">微信用户:</Text>
          <Text className="mb-4">VX{Taro.getStorageSync("userId")}</Text>
          <Button
            formType="submit"
            className="bg-red-500 text-white rounded-md w-full"
            hoverClass="bg-red-600"
            onClick={handleLogout}
          >
            退出登录
          </Button>
        </View>
      </View>

      <View className="bg-white p-4 fixed top-[36%] w-full rounded-lg">
        <Text className="text-lg font-bold">我的订单</Text>
        <View className="grid grid-cols-4 gap-4 mt-4">
          {orderTypes.map((order) => (
            <View
              key={order.id}
              className={`flex flex-col items-center justify-center p-2 rounded-lg cursor-pointer ${
                selectedOrderType === order.name
                  ? "bg-yellow-100 text-yellow-600"
                  : "bg-gray-50"
              }`}
              onClick={() => handleOrderTypeClick(order.name)}
            >
              <Text className="text-2xl mb-1">{order.icon}</Text>
              <Text className="text-sm">{order.name}</Text>
            </View>
          ))}
        </View>
      </View>

      <ScrollView
        className="fixed bottom-[5%] w-[94%] h-[42%] bg-white rounded-lg px-4"
        scrollY
        enableFlex
      >
        {loading ? (
          <View className="flex items-center justify-center h-32">
            <Text className="text-gray-500">加载中...</Text>
          </View>
        ) : filteredOrders.length === 0 ? (
          <View className="flex items-center justify-center h-32">
            <Text className="text-gray-500">
              暂无{selectedOrderType === "全部订单" ? "" : selectedOrderType}
              订单
            </Text>
          </View>
        ) : (
          filteredOrders.map((order) => (
            <View
              key={order._id}
              className="bg-white rounded-lg p-4 mb-4 mr-3 shadow-sm border border-gray-100"
            >
              <View className="flex justify-between items-center mb-2">
                <Text className="text-sm text-gray-500">
                  订单号：{order.orderNo}
                </Text>
                <Text className={`${getStatusColor(order.status)}`}>
                  {order.status}
                </Text>
              </View>

              <View className="border-t border-b border-gray-100 py-3 my-2">
                <View className="flex justify-between items-center">
                  <Text className="text-base font-medium">{order.name}</Text>
                  <Text className="text-sm">x{order.quantity}</Text>
                </View>
              </View>

              <View className="flex justify-between items-center mt-2">
                <Text className="text-sm text-gray-500">
                  {new Date(order.createTime).toLocaleString()}
                </Text>
                <Text className="text-lg font-medium text-primary">
                  ¥{order.totalAmount.toFixed(2)}
                </Text>
              </View>

              {order.status === "待收货" && (
                <View className="flex justify-between mt-3">
                  <Button
                    className="bg-green-500 text-white rounded flex-1 mr-2"
                    onClick={() => {
                      handleConfirmReceipt(order._id);
                    }}
                  >
                    确认收货
                  </Button>
                  <Button
                    className="bg-red-500 text-white rounded flex-1"
                    onClick={() => {
                      handleCancelOrder(order._id);
                    }}
                  >
                    取消订单
                  </Button>
                </View>
              )}

              {order.status === "待发货" && (
                <Button
                  className="bg-red-500 text-white mt-3 rounded"
                  onClick={() => {
                    handleCancelOrder(order._id);
                  }}
                >
                  取消订单
                </Button>
              )}
            </View>
          ))
        )}

        {/* 底部留白 */}
        <View className="h-6"></View>
      </ScrollView>

      <Footer />
    </View>
  );
}
