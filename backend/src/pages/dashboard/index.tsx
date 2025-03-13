import { View, Text, ScrollView } from "@tarojs/components";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import Taro from "@tarojs/taro";

interface Statistics {
  idleCount: number;
  soldCount: number;
  completedOrders: number;
  pendingOrders: number;
}

export default function Dashboard() {
  const [stats, setStats] = useState<Statistics>({
    idleCount: 0,
    soldCount: 0,
    completedOrders: 0,
    pendingOrders: 0,
  });

  const fetchData = async () => {
    try {
      const token = Taro.getStorageSync("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      // 获取商品数据
      const productsRes = await Taro.request({
        url: "http://localhost:5000/api/products",
        method: "GET",
        header: headers,
      });

      // 获取订单数据
      const ordersRes = await Taro.request({
        url: "http://localhost:5000/api/orders",
        method: "GET",
        header: headers,
      });

      if (productsRes.statusCode === 200 && ordersRes.statusCode === 200) {
        const products = productsRes.data;
        const orders = ordersRes.data;

        // 统计商品数据
        const idleProducts = products.filter((p) => !p.isSold);
        const soldProducts = products.filter((p) => p.isSold);

        // 统计订单数据
        const completedOrders = orders.filter((o) => o.status === "已完成");
        const pendingOrders = orders.filter((o) => o.status === "待发货");

        setStats({
          idleCount: idleProducts.length,
          soldCount: soldProducts.length,
          completedOrders: completedOrders.length,
          pendingOrders: pendingOrders.length,
        });
      }
    } catch (error) {
      console.error("获取数据失败:", error);
      Taro.showToast({
        title: "获取数据失败",
        icon: "error",
      });
    }
  };

  useEffect(() => {
    // 验证token
    setTimeout(() => {
      Taro.getStorage({
        key: "token",
        success: (res) => {
          console.log("Token:", res.data);
          fetchData();
        },
        fail: () => {
          console.warn("未检测到 Token，跳转至登录页");
          Taro.redirectTo({ url: "/pages/login/index" });
        },
      });
    }, 500);
  }, []);

  const statItems = [
    {
      title: "闲置商品",
      value: stats.idleCount,
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
      icon: "📦",
    },
    {
      title: "已售商品",
      value: stats.soldCount,
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
      <View className="p-4 fixed top-[11%] w-full bg-amber-200 h-[84%]">
        <View className="mb-6">
          <Text className="text-2xl font-bold">数据概览</Text>
          <Text className="text-gray-500 mt-2 block">实时统计数据</Text>
        </View>

        <View className="grid grid-cols-2 gap-4">
          {statItems.map((item, index) => (
            <View key={index} className={`${item.bgColor} p-4 rounded-lg`}>
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
            <Text className="text-sm text-blue-500">更多</Text>
          </View>
          <ScrollView
            className="flex flex-col gap-4 h-[85%] overflow-y-scroll"
            scrollY
            enableFlex
          >
            {advertiseItems.map((item, index) => (
              <View key={index} className="flex items-center gap-2 bg-gray-100 rounded-lg p-3 mt-4 w-[95%]">
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
