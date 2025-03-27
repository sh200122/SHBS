import { View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";

type Props = {};

export default function Footer({}: Props) {
  // 获取当前页面路径
  const currentPath = Taro.getCurrentInstance().router?.path || "";

  // 判断是否为当前页面的函数
  const isActive = (path: string) => currentPath.includes(path);

  return (
    <View className="fixed bottom-0 left-0 right-0 flex justify-between items-center bg-white py-2 border-t border-gray-200 h-[5%]">
      <View
        className="flex-1 flex flex-col items-center"
        onClick={() => Taro.switchTab({ url: "/pages/dashboard/index" })}
      >
        <Text
          className={`text-2xl ${
            isActive("dashboard") ? "text-[#fbb713]" : ""
          }`}
        >
          🏠
        </Text>
      </View>
      <View
        className="flex-1 flex flex-col items-center"
        onClick={() => Taro.switchTab({ url: "/pages/products/index" })}
      >
        <Text
          className={`text-2xl ${isActive("products") ? "text-[#fbb713]" : ""}`}
        >
          🗂️
        </Text>
      </View>
      <View
        className="flex-1 flex flex-col items-center"
        onClick={() => Taro.switchTab({ url: "/pages/order/index" })}
      >
        <Text
          className={`text-2xl ${isActive("order") ? "text-[#fbb713]" : ""}`}
        >
          🛒
        </Text>
      </View>
      <View
        className="flex-1 flex flex-col items-center"
        onClick={() => Taro.switchTab({ url: "/pages/setting/index" })}
      >
        <Text
          className={`text-2xl ${isActive("setting") ? "text-[#fbb713]" : ""}`}
        >
          👤
        </Text>
      </View>
    </View>
  );
}
