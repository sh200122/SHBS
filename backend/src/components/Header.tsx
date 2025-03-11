/*
 * @Author: alan alan.shi@duomai.com
 * @Date: 2025-03-05 14:52:51
 * @LastEditors: alan alan.shi@duomai.com
 * @LastEditTime: 2025-03-05 15:34:21
 * @FilePath: \front\src\components\Header.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { View, Text, Image } from "@tarojs/components";
import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <View className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200 fixed top-[4.5%] left-0 right-0">
      <View className="flex items-center gap-2 h-[7%]">
        <Image src={require("@/images/shop.png")} className="w-8 h-8" />
        <Text className="text-lg font-medium text-gray-800">商店管理员</Text>
      </View>
    </View>
  );
}
