import {
  View,
  Text,
  ScrollView,
  Swiper,
  SwiperItem,
  Image,
} from "@tarojs/components";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [bannerList] = useState([
    {
      id: 1,
      image:
        "https://github.com/sh200122/SHBS/blob/main/front/public/images/banner1.jpg?raw=true",
    },
    {
      id: 2,
      image:
        "https://github.com/sh200122/SHBS/blob/main/front/public/images/banner1.jpg?raw=true",
    },
    {
      id: 3,
      image:
        "https://github.com/sh200122/SHBS/blob/main/front/public/images/banner1.jpg?raw=true",
    },
  ]);
  return (
    <View className="min-h-screen">
      <Header />
      <ScrollView
        className="fixed top-[11%] h-[100%] bg-gray-100 overflow-y-scroll w-full"
        scrollY
        enableFlex
      >
        {/* 轮播图 */}
        <View className="bg-sky-500 h-[30%]">
          <Swiper
            className="h-full w-full"
            indicatorDots
            autoplay
            interval={3000}
            circular
          >
            {bannerList.map((banner) => (
              <SwiperItem key={banner.id}>
                <Image
                  className="w-full h-full"
                  src={banner.image}
                  mode="aspectFill"
                />
              </SwiperItem>
            ))}
          </Swiper>
        </View>
        {/* 限时低价 */}
        <View className="h-[70%]">
          <View className="flex p-4 justify-between items-center h-[10%] bg-white">
            <Text className="text-2xl font-bold">⌛限时低价</Text>
            <Text className="text-sm text-gray-500">查看更多</Text>
          </View>
          <View className=" h-[90%] bg-blue-500"></View>
        </View>
        {/* 热卖商品 */}
        <View className=" h-[70%]">
          <View className="flex p-4 justify-between items-center h-[10%] bg-white">
            <Text className="text-2xl font-bold">🔥热卖商品</Text>
            <Text className="text-sm text-gray-500">查看更多</Text>
          </View>
          <View className="flex justify-center items-center h-[90%] bg-blue-500"></View>
        </View>
        {/* 猜你喜欢 */}
        <View className=" h-[70%]">
          <View className="flex p-4 justify-between items-center h-[10%] bg-white">
            <Text className="text-2xl font-bold">👀猜你喜欢</Text>
            <Text className="text-sm text-gray-500">查看更多</Text>
          </View>
          <View className="flex justify-center items-center h-[90%] bg-blue-500"></View>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}
