import { View, Text, ScrollView } from "@tarojs/components";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Taro from "@tarojs/taro";

interface OrderItem {
  _id: string;
  orderNo: string;
  status: string;
  totalAmount: number;
  createTime: string;
  buyerInfo: {
    name: string;
    phone: string;
  };
  products: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
  }>;
}

export default function Order() {
  const [orders, setOrders] = useState<OrderItem[]>([]);
  const [loading, setLoading] = useState(true);

  // 获取订单列表
  const fetchOrders = async () => {
    try {
      const token = Taro.getStorageSync("token");
      const res = await Taro.request({
        url: "http://localhost:5000/api/orders",
        method: "GET",
        header: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.statusCode === 200) {
        setOrders(res.data);
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

  // 更新订单状态
  const handleUpdateStatus = async (orderId: string, newStatus: string) => {
    try {
      const token = Taro.getStorageSync("token");
      const res = await Taro.request({
        url: `http://localhost:5000/api/orders/${orderId}/status`,
        method: "PUT",
        data: { status: newStatus },
        header: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.statusCode === 200) {
        Taro.showToast({
          title: "更新成功",
          icon: "success",
        });
        fetchOrders(); // 刷新订单列表
      }
    } catch (error) {
      console.error("更新订单状态失败:", error);
      Taro.showToast({
        title: "更新失败",
        icon: "error",
      });
    }
  };

  const formatTime = (time: string) => {
    const date = new Date(time);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours().toString().padStart(2, "0");
    const minute = date.getMinutes().toString().padStart(2, "0");
    return `${year}年${month}月${day}日 ${hour}:${minute}`;
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "待付款":
        return "text-orange-500";
      case "待发货":
        return "text-blue-500";
      case "已发货":
        return "text-green-500";
      case "已完成":
        return "text-gray-500";
      default:
        return "text-gray-700";
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
          <View className="flex items-center justify-center h-full">
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
              className="bg-white rounded-lg shadow mb-4 p-4 w-11/12"
            >
              <View className="flex justify-between items-center border-b border-gray-200 pb-2">
                <Text className="text-gray-600">订单号：{order.orderNo}</Text>
                <Text className={`${getStatusColor(order.status)} font-medium`}>
                  {order.status}
                </Text>
              </View>

              {order.products.map((product) => (
                <View
                  key={product.id}
                  className="py-2 border-b border-gray-100"
                >
                  <Text className="text-gray-800">{product.name}</Text>
                  <View className="flex justify-between mt-1">
                    <Text className="text-gray-600">¥{product.price}</Text>
                    <Text className="text-gray-600">x{product.quantity}</Text>
                  </View>
                </View>
              ))}

              <View className="mt-2 flex justify-between items-center">
                <Text className="text-gray-600">{formatTime(order.createTime)}</Text>
                <Text className="font-medium">总计：¥{order.totalAmount}</Text>
              </View>

              {order.status === "待发货" && (
                <View className="mt-3 flex justify-end">
                  <View
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                    onClick={() => handleUpdateStatus(order._id, "已发货")}
                  >
                    <Text>发货</Text>
                  </View>
                </View>
              )}
            </View>
          ))
        )}
      </ScrollView>

      <Footer />
    </View>
  );
}
