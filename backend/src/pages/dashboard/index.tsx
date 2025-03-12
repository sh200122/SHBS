import { View, Text } from "@tarojs/components";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import Taro from "@tarojs/taro";
export default function Dashboard() {
  useEffect(() => {
    setTimeout(() => {
      Taro.getStorage({
        key: "token",
        success: (res) => {
          console.log("Token:", res.data);
        },
        fail: () => {
          console.warn("未检测到 Token，跳转至登录页");
          Taro.redirectTo({ url: "/pages/login/index" });
        },
      });
    }, 500);
  }, []);
  
  return (
    <View className="mt-10 w-screen h-screen bg-[#e8e8e8]">
      <Header />
      <Text>首页</Text>
      <Footer />
    </View>
  );
}
