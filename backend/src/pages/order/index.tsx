import { View, Text, ScrollView, Button } from "@tarojs/components";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Taro from "@tarojs/taro";
import { useDidShow } from "@tarojs/taro";

interface OrderItem {
  _id: string;
  orderNo: string;
  name: string;
  quantity: number;
  totalAmount: number;
  status: string;
  createTime: string;
}

export default function Order() {
  const [orders, setOrders] = useState<OrderItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchOrders();
  }, []);

  useDidShow(() => {
    fetchOrders();
  });

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

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const adminInfo = Taro.getStorageSync("adminInfo");
      const res = await Taro.request({
        url: "http://localhost:5000/api/orders",
        header: {
          "admin-id": adminInfo._id,
        },
      });
      if (res.data.success) {
        setOrders(res.data.data);
      }
    } catch (error) {
      console.error("获取订单列表失败:", error);
      Taro.showToast({
        title: "获取订单失败",
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  // 发货处理函数
  const handleShip = async (orderId: string) => {
    try {
      const adminInfo = Taro.getStorageSync("adminInfo");
      const res = await Taro.request({
        url: `http://localhost:5000/api/orders/${orderId}/ship`,
        method: "PUT",
        header: {
          "admin-id": adminInfo._id,
        },
      });

      if (res.data.success) {
        Taro.showToast({
          title: "发货成功",
          icon: "success",
        });

        // 使用后端返回的实际状态更新本地状态
        const updatedOrder = res.data.data;
        setOrders(
          orders.map((order) =>
            order._id === orderId
              ? { ...order, status: updatedOrder.status }
              : order
          )
        );
      } else {
        throw new Error(res.data.message || "发货失败");
      }
    } catch (error) {
      console.error("发货失败:", error);
      Taro.showToast({
        title: "发货失败",
        icon: "error",
      });
    }
  };

  return (
    <View className="h-screen w-screen">
      <Header />

      <ScrollView
        className="fixed top-[11%] h-[80.4%] bg-gray-100 flex flex-col overflow-y-scroll p-4 w-full"
        scrollY
        enableFlex
      >
        {loading ? (
          <View className="flex items-center justify-center h-32">
            <Text className="text-gray-500">加载中...</Text>
          </View>
        ) : orders.length === 0 ? (
          <View className="flex items-center justify-center h-full">
            <Text className="text-gray-500">暂无订单</Text>
          </View>
        ) : (
          orders.map((order) => (
            <View
              key={order._id}
              className="bg-white rounded-lg p-4 mb-4 shadow-sm w-[92%]"
            >
              <View className="flex justify-between items-center mb-2">
                <Text className="text-sm text-gray-500">
                  订单号：{order.orderNo}
                </Text>
                <Text
                  className={`text-primary ${getStatusColor(order.status)}`}
                >
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
                  总计¥{order.totalAmount.toFixed(2)}
                </Text>
              </View>

              {/* 添加发货按钮 */}
              {order.status === "待发货" && (
                <Button
                  className="bg-blue-500 text-white mt-3 rounded w-full"
                  hoverClass="bg-blue-600"
                  onClick={() => handleShip(order._id)}
                >
                  确认发货
                </Button>
              )}

              {/* 已发货订单显示物流信息 */}
              {order.status === "待收货" && (
                <View className="mt-3 border-t border-gray-100 pt-2">
                  <Text className="text-sm text-gray-500">
                    物流信息: 已发货，配送中
                  </Text>
                </View>
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
