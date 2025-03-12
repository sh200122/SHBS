import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'

type Props = {}

export default function Footer({}: Props) {
  // 获取当前页面路径
  const currentPath = Taro.getCurrentInstance().router?.path || ''

  // 判断是否为当前页面的函数
  const isActive = (path: string) => currentPath.includes(path)

  return (
    <View className='fixed bottom-0 left-0 right-0 flex justify-between items-center bg-white py-2 border-t border-gray-200 h-[5%]'>
      <View className='flex-1 flex flex-col items-center' onClick={() => Taro.navigateTo({ url: '/pages/dashboard/index' })}>
        <Text className={`iconfont icon-home text-xl ${isActive('dashboard') ? 'text-[#fbb713]' : ''}`}></Text>
        <Text className={`text-base mt-1 ${isActive('dashboard') ? 'text-[#fbb713]' : ''}`}>仪表板</Text>
      </View>
      <View className='flex-1 flex flex-col items-center' onClick={() => Taro.navigateTo({ url: '/pages/products/index' })}>
        <Text className={`iconfont icon-category text-xl ${isActive('products') ? 'text-[#fbb713]' : ''}`}></Text>
        <Text className={`text-base mt-1 ${isActive('products') ? 'text-[#fbb713]' : ''}`}>商品管理</Text>
      </View>
      <View className='flex-1 flex flex-col items-center' onClick={() => Taro.navigateTo({ url: '/pages/order/index' })}>
        <Text className={`iconfont icon-cart text-xl ${isActive('order') ? 'text-[#fbb713]' : ''}`}></Text>
        <Text className={`text-base mt-1 ${isActive('order') ? 'text-[#fbb713]' : ''}`}>订单管理</Text>
      </View>
      <View className='flex-1 flex flex-col items-center' onClick={() => Taro.navigateTo({ url: '/pages/setting/index' })}>
        <Text className={`iconfont icon-user text-xl ${isActive('setting') ? 'text-[#fbb713]' : ''}`}></Text>
        <Text className={`text-base mt-1 ${isActive('setting') ? 'text-[#fbb713]' : ''}`}>设置</Text>
      </View>
    </View>
  )
}