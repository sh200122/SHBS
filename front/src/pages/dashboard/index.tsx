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
import Taro from "@tarojs/taro";

export default function Dashboard() {
  const [bannerList] = useState([
    { id: 1, image: require("./../../public/images/banner1.jpg") },
    { id: 2, image: require("./../../public/images/banner2.jpg") },
    { id: 3, image: require("./../../public/images/banner3.jpg") },
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
        <View className="bg-yellow-500 h-[70%]">
          <Text>限时低价</Text>
        </View>
        {/* 热卖商品 */}
        <View className="bg-red-500 h-[70%]">
          <Text>热卖商品</Text>
        </View>
        {/* 猜你喜欢 */}
        <View className="bg-green-500 h-[70%]">
          <Text>猜你喜欢</Text>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}
