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
import ProductBlock from "@/components/ProductBlock";
import { getToken } from "@/utils/auth";

interface Product {
  _id: string;
  image: string;
  name: string;
  price: number;
  description: string;
  status: "active" | "inactive";
}

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

  const [products, setProducts] = useState<Product[]>([]);
  const [limitTimeProducts, setLimitTimeProducts] = useState<Product[]>([]);
  const [hotSaleProducts, setHotSaleProducts] = useState<Product[]>([]);
  const [recommendProducts, setRecommendProducts] = useState<Product[]>([]);

  // 添加登录检查
  useEffect(() => {
    const checkLogin = () => {
      try {
        const token = getToken();
        if (!token) {
          Taro.redirectTo({ url: "/pages/login/index" });
        }
      } catch (error) {
        console.error("检查登录状态失败:", error);
        Taro.redirectTo({ url: "/pages/login/index" });
      }
    };

    checkLogin();
  }, []);

  // 随机打乱数组的函数
  const shuffleArray = (array: Product[]) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // 获取商品数据
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await Taro.request({
          url: "http://localhost:5000/api/product",
          method: "GET",
        });

        // 只过滤 status 为 active 的商品
        const activeProducts = response.data.filter(
          (product: Product) => product.status === "active"
        );

        // 随机打乱并分配到不同区块
        const shuffled = shuffleArray(activeProducts);

        setProducts(activeProducts);
        setLimitTimeProducts(shuffled.slice(0, 4));
        setHotSaleProducts(shuffled.slice(4, 8));
        setRecommendProducts(shuffled.slice(8, 12));
      } catch (error) {
        console.error("获取商品失败:", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <View className="min-h-screen">
      <Header />
      <ScrollView
        className="fixed top-[11%] h-[84%] bg-gray-100 overflow-y-scroll w-full"
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
            <Text className="text-2xl font-bold">⌛限时捡漏</Text>
            <Text className="text-sm text-gray-500">查看更多</Text>
          </View>
          <View className="h-[90%] p-2">
            <View className="grid grid-cols-2 gap-2 h-full">
              {limitTimeProducts.map((product) => (
                <ProductBlock
                  key={product._id}
                  id={product._id}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  description={product.description}
                  onClick={() => {}}
                />
              ))}
            </View>
          </View>
        </View>

        {/* 热卖商品 */}
        <View className="h-[70%]">
          <View className="flex p-4 justify-between items-center h-[10%] bg-white">
            <Text className="text-2xl font-bold">🔥热卖二手</Text>
            <Text className="text-sm text-gray-500">查看更多</Text>
          </View>
          <View className="h-[90%] p-2">
            <View className="grid grid-cols-2 gap-2 h-full">
              {hotSaleProducts.map((product) => (
                <ProductBlock
                  key={product._id}
                  id={product._id}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  description={product.description}
                  onClick={() => {}}
                />
              ))}
            </View>
          </View>
        </View>

        {/* 猜你喜欢 */}
        <View className="h-[70%]">
          <View className="flex p-4 justify-between items-center h-[10%] bg-white">
            <Text className="text-2xl font-bold">👀猜你喜欢</Text>
            <Text className="text-sm text-gray-500">查看更多</Text>
          </View>
          <View className="h-[90%] p-2">
            <View className="grid grid-cols-2 gap-2 h-full">
              {recommendProducts.map((product) => (
                <ProductBlock
                  key={product._id}
                  id={product._id}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  description={product.description}
                  onClick={() => {}}
                />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}
