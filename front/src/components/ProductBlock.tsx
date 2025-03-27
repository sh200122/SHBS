import { View, Text, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";

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
  return (
    <View
      className="bg-white rounded-lg shadow overflow-hidden"
      onClick={onClick}
    >
      <Image
        className="w-full h-32 object-cover"
        src={image}
        mode="aspectFill"
      />
      <View className="p-2">
        <Text className="text-sm font-medium truncate">{name}</Text>
        <Text className="text-xs text-gray-500 truncate">{description}</Text>
        <Text className="text-red-500 text-lg font-bold mt-1">¥{price}</Text>
      </View>
    </View>
  );
}
