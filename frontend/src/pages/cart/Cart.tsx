/*
 * @Author: alan alan.shi@duomai.com
 * @Date: 2025-03-05 11:44:12
 * @LastEditors: alan alan.shi@duomai.com
 * @LastEditTime: 2025-03-05 12:17:28
 * @FilePath: \backend\src\pages\cart\Cart.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import { View, Text } from '@tarojs/components'
import Footer from '@/components/Footer'
type Props = {}

export default function Cart({}: Props) {
  return (
    <View>
      <Text>Cart</Text>
      <Footer />
    </View>
  )
}