import { View, Text, Image } from "@tarojs/components";

type Props = {};

export default function Header({}: Props) {
  return (
    <View className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200 fixed top-[4.5%] left-0 right-0">
      <View className="flex items-center gap-2 h-[7%]">
        <Image src={require("@/images/shop.png")} className="w-8 h-8" />
        <Text className="text-lg font-medium text-gray-800">商店管理员</Text>
      </View>
    </View>
  );
}
