import { View, Text, Input } from "@tarojs/components";
import { useEffect, useState } from "react";
import Taro from "@tarojs/taro";
import Footer from "@/components/Footer";
import ProductBlock from "@/components/ProductBlock";

interface Product {
  _id: string;
  image: string;
  name: string;
  price: number;
  description: string;
  status: "active" | "inactive";
}

const HOT_SEARCHES = ["手机", "电脑", "耳机", "平板", "相机", "手表"]; // 模拟热门搜索数据

export default function SearchResults() {
  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<string[]>([]);

  // 加载历史记录
  useEffect(() => {
    const searchHistory = Taro.getStorageSync("searchHistory") || [];
    setHistory(searchHistory);
  }, []);

  // 保存搜索历史
  const saveHistory = (searchKeyword: string) => {
    if (!searchKeyword.trim()) return;

    const newHistory = [
      searchKeyword,
      ...history.filter((item) => item !== searchKeyword),
    ].slice(0, 10); // 只保留最近10条

    setHistory(newHistory);
    Taro.setStorageSync("searchHistory", newHistory);
  };

  // 清空历史记录
  const clearHistory = () => {
    setHistory([]);
    Taro.removeStorageSync("searchHistory");
  };

  const handleSearch = async (searchKeyword: string) => {
    if (!searchKeyword.trim()) {
      setProducts([]);
      return;
    }

    try {
      setLoading(true);
      const response = await Taro.request({
        url: `http://localhost:5000/api/product/search?keyword=${encodeURIComponent(
          searchKeyword
        )}`,
        method: "GET",
      });
      setProducts(response.data);
      saveHistory(searchKeyword.trim());
    } catch (error) {
      console.error("搜索失败:", error);
      Taro.showToast({
        title: "搜索失败",
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  // 点击搜索标签
  const handleTagClick = (tag: string) => {
    setKeyword(tag);
    handleSearch(tag);
  };

  return (
    <View className="min-h-screen">
      {/* 搜索头部 */}
      <View className="flex items-center justify-between bg-white border-b border-gray-200 fixed top-[3%] left-0 right-0 p-4">
        <View className="flex items-center w-full mt-1">
          <View className="w-[10%]" onClick={() => Taro.navigateBack()}>
            <Text className="text-2xl">⬅️</Text>
          </View>
          <Input
            type="text"
            value={keyword}
            focus
            placeholder="🔍 搜索商品"
            onInput={(e) => {
              setKeyword(e.detail.value);
              handleSearch(e.detail.value);
            }}
            className="w-[55%] border-solid border-[1px] p-2 border-gray-300 rounded ml-4"
          />
        </View>
      </View>

      {/* 搜索结果或推荐区域 */}
      <View className="fixed top-[11%] h-[89%] bg-gray-100 w-full">
        {loading ? (
          <View className="flex justify-center items-center h-full">
            <Text>搜索中...</Text>
          </View>
        ) : products.length > 0 ? (
          <View className="grid grid-cols-2 gap-2 p-2">
            {products.map((product) => (
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
        ) : (
          <View className="p-4">
            {/* 热门搜索 */}
            <View className="mb-6">
              <View className="flex justify-between items-center mb-2">
                <Text className="font-bold">🔥 热门搜索</Text>
              </View>
              <View className="flex flex-wrap gap-2">
                {HOT_SEARCHES.map((tag) => (
                  <Text
                    key={tag}
                    className="px-3 py-1 bg-white rounded-full text-sm"
                    onClick={() => handleTagClick(tag)}
                  >
                    {tag}
                  </Text>
                ))}
              </View>
            </View>

            {/* 搜索历史 */}
            {history.length > 0 && (
              <View>
                <View className="flex justify-between items-center mb-2">
                  <Text className="font-bold">⏱️ 搜索历史</Text>
                  <Text
                    className="text-sm text-gray-500"
                    onClick={clearHistory}
                  >
                    清空
                  </Text>
                </View>
                <View className="flex flex-wrap gap-2">
                  {history.map((tag) => (
                    <Text
                      key={tag}
                      className="px-3 py-1 bg-white rounded-full text-sm"
                      onClick={() => handleTagClick(tag)}
                    >
                      {tag}
                    </Text>
                  ))}
                </View>
              </View>
            )}
          </View>
        )}
      </View>
    </View>
  );
}
