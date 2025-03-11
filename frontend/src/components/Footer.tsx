/*
 * @Author: alan alan.shi@duomai.com
 * @Date: 2025-03-05 11:23:57
 * @LastEditors: alan alan.shi@duomai.com
 * @LastEditTime: 2025-03-05 12:19:47
 * @FilePath: \backend\src\components\footer.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import { View, Text, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
type Props = {}

export default function Footer({}: Props) {
  return (
    <View className='fixed bottom-0 left-0 right-0 flex justify-between items-center bg-white py-2 border-t border-gray-200'>
      <View className='flex-1 flex flex-col items-center' onClick={() => Taro.navigateTo({ url: '/pages/index/Home' })}>
        <Text className='iconfont icon-home text-xl'></Text>
        <Text className='text-xs mt-1'>首页</Text>
      </View>
      <View className='flex-1 flex flex-col items-center' onClick={() => Taro.navigateTo({ url: '/pages/categories/Categories' })}>
        <Text className='iconfont icon-category text-xl'></Text>
        <Text className='text-xs mt-1'>分类</Text>
      </View>
      <View className='flex-1 flex flex-col items-center' onClick={() => Taro.navigateTo({ url: '/pages/cart/Cart' })}>
        <Text className='iconfont icon-cart text-xl'></Text>
        <Text className='text-xs mt-1'>购物车</Text>
      </View>
      <View className='flex-1 flex flex-col items-center' onClick={() => Taro.navigateTo({ url: '/pages/account/Account' })}>
        <Text className='iconfont icon-user text-xl'></Text>
        <Text className='text-xs mt-1'>我的</Text>
      </View>
    </View>
  )
}