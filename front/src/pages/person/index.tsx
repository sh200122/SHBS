/*
 * @Author: alan alan.shi@duomai.com
 * @Date: 2025-03-05 14:51:28
 * @LastEditors: alan alan.shi@duomai.com
 * @LastEditTime: 2025-03-05 15:43:13
 * @FilePath: \front\src\pages\Setting.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { View, Text, Button, ScrollView } from "@tarojs/components";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Taro from "@tarojs/taro";
import { logout } from "@/utils/auth";

type Props = {};

export default function Setting({}: Props) {
  const handleLogout = () => {
    logout(); // 使用新的 logout 函数
    setTimeout(() => {
      Taro.reLaunch({
        url: "/pages/login/index",
      });
    }, 1000);
  };

  return (
    <View className="h-screen w-screen">
      <Header />
      <View className="fixed top-[11%] h-[84%] bg-gray-100 w-full p-4">
        <View className="bg-white rounded-lg shadow p-6 max-w-md mx-auto">
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
      <Footer />
    </View>
  );
}
