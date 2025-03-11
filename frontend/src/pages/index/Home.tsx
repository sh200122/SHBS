/*
 * @Author: alan alan.shi@duomai.com
 * @Date: 2025-03-05 10:25:40
 * @LastEditors: alan alan.shi@duomai.com
 * @LastEditTime: 2025-03-05 12:10:04
 * @FilePath: \backend\src\pages\home\Home.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: alan alan.shi@duomai.com
 * @Date: 2025-03-05 10:25:40
 * @LastEditors: alan alan.shi@duomai.com
 * @LastEditTime: 2025-03-05 11:52:22
 * @FilePath: \backend\src\pages\index\Home.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import { View, Text } from '@tarojs/components'
import Footer from '@/components/Footer'
type Props = {}

export default function Home({}: Props) {
  return (
    <View>
      <Text>Home</Text> 
      <Footer />
    </View>
  )
}
