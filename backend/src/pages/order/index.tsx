
import { View, Text } from '@tarojs/components'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

type Props = {}

export default function Order({}: Props) {
  return (
    <View className='mt-10 w-screen h-screen bg-[#e8e8e8]'>
      <Header />
      <Text>订单</Text>
      <Footer />
    </View>
  )
}