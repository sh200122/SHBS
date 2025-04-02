import { View, Text, ScrollView } from "@tarojs/components";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import Taro from "@tarojs/taro";
import { useDidShow } from "@tarojs/taro";

interface Statistics {
  idleCount: number;
  makeMoney: number;
  completedOrders: number;
  pendingOrders: number;
}

export default function Dashboard() {
  const [stats, setStats] = useState<Statistics>({
    idleCount: 0,
    makeMoney: 0,
    completedOrders: 0,
    pendingOrders: 0,
  });

  useEffect(() => {
    // 验证token
    setTimeout(() => {
      Taro.getStorage({
        key: "token",
        success: (res) => {
          console.log("Token:", res.data);
          fetchDashboardData();
        },
        fail: () => {
          console.warn("未检测到 Token，跳转至登录页");
          Taro.redirectTo({ url: "/pages/login/index" });
        },
      });
    }, 500);
  }, []);

  useDidShow(() => {
    fetchDashboardData();
  });

  const fetchDashboardData = async () => {
    try {
      const adminInfo = Taro.getStorageSync("adminInfo");
      const productRes = await Taro.request({
        url: "http://localhost:5000/api/product/admin",
        method: "GET",
        header: {
          "admin-id": adminInfo._id,
        },
      });
      const orderRes = await Taro.request({
        url: "http://localhost:5000/api/orders/",
        method: "GET",
        header: {
          "admin-id": adminInfo._id,
        },
      });

      // 修复这里：正确获取响应数据
      const productData = productRes.data;
      const orderData = orderRes.data.data;

      // 确保数据存在后再处理
      if (!productData || !orderData) {
        throw new Error("返回数据格式错误");
      }

      const idleCount = productData.length;
      const makeMoney = orderData.reduce((total: number, order: any) => {
        if (order.status === "已完成") {
          return total + order.totalAmount;
        }
        return total;
      }, 0);

      const completedOrders = orderData.filter(
        (order: any) => order.status === "已完成"
      ).length;
      const pendingOrders = orderData.filter(
        (order: any) => order.status === "待发货"
      ).length;

      setStats({
        idleCount,
        makeMoney,
        completedOrders,
        pendingOrders,
      });
    } catch (error) {
      console.error("获取数据失败", error);
      Taro.showToast({
        title: "获取数据失败",
        icon: "none",
      });
    }
  };

  const statItems = [
    {
      title: "闲置商品",
      value: stats.idleCount,
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
      icon: "📦",
    },
    {
      title: "已赚取(￥)",
      value: stats.makeMoney,
      bgColor: "bg-green-100",
      textColor: "text-green-600",
      icon: "💰",
    },
    {
      title: "已完成订单",
      value: stats.completedOrders,
      bgColor: "bg-purple-100",
      textColor: "text-purple-600",
      icon: "✅",
    },
    {
      title: "待发货订单",
      value: stats.pendingOrders,
      bgColor: "bg-orange-100",
      textColor: "text-orange-600",
      icon: "🚚",
    },
  ];

  const advertiseItems = [
    {
      content: "后台维护通知",
      icon: "⚙️",
    },
    {
      content: "老板狂撒钱，发布商品领奖励啦！",
      icon: "💰",
    },
    {
      content: "好消息特大好消息",
      icon: "🥳",
    },
    {
      content: "618超级大促，发布就赚钱",
      icon: "🤑",
    },
    {
      content: "只要你敢发，我们就敢卖",
      icon: "💵",
    },
    {
      content: "后台维护通知",
      icon: "⚙️",
    },
    {
      content: "发布商品领奖励啦！",
      icon: "💰",
    },
  ];

  return (
    <View className="min-h-screen">
      <Header />
      <View className="p-4 fixed top-[11%] w-full h-[84%] bg-gray-100">
        <View className="mb-6">
          <Text className="text-2xl font-bold">数据概览</Text>
          <Text className="text-gray-500 mt-2 block">📊实时统计数据</Text>
        </View>

        <View className="grid grid-cols-2 gap-4">
          {statItems.map((item, index) => (
            <View
              key={index}
              className={`${item.bgColor} p-4 rounded-lg shadow-md`}
            >
              <View className="flex items-center justify-between">
                <Text className="text-2xl mb-2">{item.icon}</Text>
                <Text className={`${item.textColor} text-2xl font-bold`}>
                  {item.value}
                </Text>
              </View>
              <Text className="text-gray-600">{item.title}</Text>
            </View>
          ))}
        </View>
        <View className="bg-white rounded-lg p-4 shadow-md mt-4 h-[55%]">
          <View className="flex items-center justify-between mb-3">
            <Text className="text-lg font-bold">推广信息{}</Text>
            <Text className="text-lg">📢</Text>
          </View>
          <ScrollView
            className="flex flex-col gap-4 h-[85%] overflow-y-scroll"
            scrollY
            enableFlex
          >
            {advertiseItems.map((item, index) => (
              <View
                key={index}
                className="flex items-center gap-2 bg-gray-100 rounded-lg p-3 mt-4 w-[95%]"
              >
                <Text className="text-2xl">{item.icon}</Text>
                <Text className="text-gray-600">{item.content}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
      <Footer />
    </View>
  );
}
