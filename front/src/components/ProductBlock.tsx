import { View, Text, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useState } from "react";

interface ProductProps {
  id: string;
  image: string;
  name: string;
  price: number;
  description: string;
  onClick?: () => void;
}

export default function ProductBlock({
  id,
  image,
  name,
  price,
  description,
  onClick,
}: ProductProps) {
  const [loading, setLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const defaultImage = "/assets/images/default.png";

  const handleImageLoad = () => {
    setLoading(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setLoading(false);
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <View
      className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-200 active:scale-95"
      onClick={handleClick}
    >
      {/* 商品图片 */}
      <View className="relative w-full h-32">
        {loading && (
          <View className="absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center">
            <Text className="text-gray-400">加载中...</Text>
          </View>
        )}

        <Image
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            loading ? "opacity-0" : "opacity-100"
          }`}
          src={imageError ? defaultImage : image}
          mode="aspectFill"
          onLoad={handleImageLoad}
          onError={handleImageError}
          lazyLoad
        />
      </View>

      {/* 商品信息 */}
      <View className="p-2 flex flex-col relative">
        {/* 商品名称 */}
        <Text className="text-sm font-medium text-gray-800 truncate">
          {name}
        </Text>

        {/* 商品描述 */}
        <Text className="text-xs text-gray-500 truncate mt-1">
          {description}
        </Text>

        {/* 价格 */}
        <Text className="text-red-500 text-lg font-bold mt-1">¥{price}</Text>

        <View className="absolute bottom-3 right-2 flex gap-2">
          <View
            className="rounded-lg transition-colors duration-200"
            hover-class="bg-yellow-500"
            hover-stay-time={100}
          >
            <Text
              className="text-2xl text-center transition-transform duration-200"
              hover-class="scale-110"
            >
              🛍️
            </Text>
          </View>
          <View
            className="rounded-lg transition-colors duration-200"
            hover-class="bg-red-500"
            hover-stay-time={100}
          >
            <Text
              className="text-2xl text-center transition-transform duration-200"
              hover-class="scale-110"
            >
              🛒
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
