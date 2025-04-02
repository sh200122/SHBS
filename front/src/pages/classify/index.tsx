import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductBlock from "@/components/ProductBlock";
import { ScrollView, View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";

interface Product {
  _id: string;
  image: string;
  name: string;
  price: number;
  description: string;
  category: string;
  status: "active" | "inactive";
  adminId: string;
}

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState("手机");
  const [products, setProducts] = useState<Product[]>([]);

  const categories = [
    { id: 1, name: "手机", icon: "📱" },
    { id: 2, name: "电脑", icon: "💻" },
    { id: 5, name: "手表", icon: "⌚" },
    { id: 6, name: "相机", icon: "📷" },
    { id: 7, name: "家电", icon: "🏠" },
    { id: 3, name: "服饰", icon: "👔" },
    { id: 4, name: "鞋子", icon: "👟" },
    { id: 8, name: "其他", icon: "📦" },
  ];

  // 获取商品数据
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await Taro.request({
          url: "http://localhost:5000/api/product",
          method: "GET",
        });

        // 过滤出激活状态的商品
        const activeProducts = res.data.filter(
          (product: Product) => product.status === "active"
        );
        setProducts(activeProducts);
      } catch (error) {
        console.error("获取商品失败:", error);
      }
    };

    fetchProducts();
  }, []);

  // 处理类别点击
  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  // 过滤当前类别的商品
  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <View className="min-h-screen">
      <Header />
      <ScrollView
        className="fixed top-[11%] h-[84%] bg-gray-100 overflow-y-scroll w-full"
        scrollY
        enableFlex
      >
        {/* 分类网格 */}
        <View className="bg-white p-4">
          <View className="grid grid-cols-4 gap-4">
            {categories.map((category) => (
              <View
                key={category.id}
                className={`flex flex-col items-center justify-center p-2 rounded-lg cursor-pointer ${
                  selectedCategory === category.name
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-gray-50"
                }`}
                onClick={() => handleCategoryClick(category.name)}
              >
                <Text className="text-2xl mb-1">{category.icon}</Text>
                <Text className="text-sm">{category.name}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* 商品列表 */}
        <View className="p-4">
          <View className="flex items-center mb-4">
            <View className="w-1 h-6 bg-yellow-500 mr-2" />
            <Text className="text-lg font-bold">{selectedCategory}</Text>
          </View>

          {filteredProducts.length > 0 ? (
            <View className="grid grid-cols-2 gap-4">
              {filteredProducts.map((product) => (
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
          ) : (
            <View className="flex flex-col items-center justify-center py-8">
              <Text className="text-gray-500">暂无商品</Text>
            </View>
          )}
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}
