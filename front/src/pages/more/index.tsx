import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductBlock from "@/components/ProductBlock";
import { ScrollView, View, Text, Image } from "@tarojs/components";
import { useEffect, useState } from "react";
import Taro, { useDidShow } from "@tarojs/taro";

interface Product {
  _id: string;
  image: string;
  name: string;
  price: number;
  description: string;
  status: "active" | "inactive";
  adminId: string;
}

export default function Index() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

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
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await Taro.request({
        url: "http://localhost:5000/api/product",
        method: "GET",
      });

      // 只过滤 status 为 active 的商品
      const activeProducts = response.data.filter(
        (product: Product) => product.status === "active"
      );

      // 随机打乱商品顺序
      const shuffledProducts = shuffleArray(activeProducts);
      setProducts(shuffledProducts);
    } catch (error) {
      console.error("获取商品失败:", error);
      Taro.showToast({
        title: "获取商品失败",
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  // 页面加载时获取数据
  useEffect(() => {
    fetchProducts();
  }, []);

  // 每次页面显示时刷新数据
  useDidShow(() => {
    fetchProducts();
  });

  return (
    <View className="min-h-screen">
      <Header />
      <ScrollView
        className="fixed top-[11%] h-[84%] bg-gray-100 overflow-y-scroll w-full p-3"
        scrollY
        enableFlex
      >
        <View className="flex p-4 justify-between items-center bg-white rounded-lg mb-3 w-[94%]">
          <Text className="text-2xl font-bold">🛍️ 全部商品</Text>
          <Text
            className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm"
            onClick={() => fetchProducts()}
          >
            刷新
          </Text>
        </View>

        {loading ? (
          <View className="flex items-center justify-center h-32">
            <Text className="text-gray-500">加载中...</Text>
          </View>
        ) : products.length === 0 ? (
          <View className="flex items-center justify-center h-32">
            <Text className="text-gray-500">暂无商品</Text>
          </View>
        ) : (
          <View className="grid grid-cols-2 gap-3 w-[94%]">
            {products.map((product) => (
              <ProductBlock
                key={product._id}
                id={product._id}
                image={product.image}
                name={product.name}
                price={product.price}
                description={product.description}
                adminId={product.adminId}
                onClick={() => {}}
              />
            ))}
          </View>
        )}

        {/* 底部留白 */}
        <View className="h-6"></View>
      </ScrollView>
      <Footer />
    </View>
  );
}
