import { View, Text, Image, Input } from "@tarojs/components";
import Taro from "@tarojs/taro";
import React from "react";

type Props = {};

export default function Header({}: Props) {
  const handleInputClick = () => {
    Taro.navigateTo({
      url: "/pages/search/index",
    });
  };

  return (
    <View className="flex items-center justify-between bg-white border-b border-gray-200 fixed top-[3%] left-0 right-0">
      <Image
        src="https://github.com/sh200122/SHBS/blob/main/front/public/images/logo.png?raw=true"
        className="w-20 h-20"
      />
      <View className="flex items-center justify-center w-[55%] mr-28">
        <View
          className="w-full border-solid border-[1px] p-2 border-gray-300 rounded bg-gray-50 text-gray-400"
          onClick={handleInputClick}
        >
          🔍 搜索商品
        </View>
      </View>
    </View>
  );
}
