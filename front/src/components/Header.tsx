<<<<<<< HEAD
/*
 * @Author: alan alan.shi@duomai.com
 * @Date: 2025-03-05 14:52:51
 * @LastEditors: alan alan.shi@duomai.com
 * @LastEditTime: 2025-03-05 15:34:21
 * @FilePath: \front\src\components\Header.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { View, Text, Image, Input } from "@tarojs/components";
=======
import { View, Text, Image, Input } from "@tarojs/components";
import Taro from "@tarojs/taro";
>>>>>>> origin/sh
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
<<<<<<< HEAD
      {/* 搜索框 */}
      <View className="flex items-center justify-center w-[55%] mr-28">
        <Input
          type="text"
          placeholder="🔍"
          className="w-full border-solid border-[1px] p-2 border-gray-300 rounded"
        />
=======
      <View className="flex items-center justify-center w-[55%] mr-28">
        <View
          className="w-full border-solid border-[1px] p-2 border-gray-300 rounded bg-gray-50 text-gray-400"
          onClick={handleInputClick}
        >
          🔍 搜索商品
        </View>
>>>>>>> origin/sh
      </View>
    </View>
  );
}
