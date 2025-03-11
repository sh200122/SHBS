import { View, Text, Button } from "@tarojs/components";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Taro from "@tarojs/taro";
type Props = {};

export default function Products({}: Props) {
  const handleAddProduct = () => {
    Taro.navigateTo({ url: "/pages/products/add" });
  };

  return (
    <View className="w-screen h-screen">
      <Header />
      <Button
        className="bg-[#fbb713] text-white rounded-md w-full fixed h-[5.5%] top-[12%]"
        hoverClass="bg-[#a3770c]"
        onClick={handleAddProduct}
      >
        添加闲置
      </Button>
      <View className="fixed top-[18%] left-0 right-0 h-[77%] bg-sky-500 flex items-center justify-center overflow-y-scroll">
        <Text className="text-gray-500">
          您还没有闲置任何物品，请先添加闲置~
        </Text>
      </View>
      <Footer />
    </View>
  );
}
