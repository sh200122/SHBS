import { View, Text } from '@tarojs/components'
import Taro, { useRouter } from '@tarojs/taro'

type Props = {}

export default function Footer({}: Props) {
  const router = useRouter()
  const currentPath = router.path || ''

  const getActiveClass = (path: string) => {
    return currentPath.includes(path) ? 'text-[#fbb713] font-bold' : 'text-gray-500'
  }

  return (
    <View className='fixed bottom-0 left-0 right-0 flex justify-between items-center bg-white py-2 border-t border-gray-200 h-[5%]'>
      <View className='flex-1 flex flex-col items-center' hoverClass='opacity-60' onClick={() => Taro.navigateTo({ url: '/pages/dashboard/index' })}>
        <Text className={`iconfont icon-home text-xl ${getActiveClass('Dashboard')}`}></Text>
        <Text className={`text-xs mt-1 ${getActiveClass('Dashboard')}`}>仪表板</Text>
      </View>
      <View className='flex-1 flex flex-col items-center' hoverClass='opacity-60' onClick={() => Taro.navigateTo({ url: '/pages/products/index' })}>
        <Text className={`iconfont icon-category text-xl ${getActiveClass('Products')}`}></Text>
        <Text className={`text-xs mt-1 ${getActiveClass('Products')}`}>商品管理</Text>
      </View>
      <View className='flex-1 flex flex-col items-center' hoverClass='opacity-60' onClick={() => Taro.navigateTo({ url: '/pages/order/index' })}>
        <Text className={`iconfont icon-cart text-xl ${getActiveClass('Order')}`}></Text>
        <Text className={`text-xs mt-1 ${getActiveClass('Order')}`}>订单管理</Text>
      </View>
      <View className='flex-1 flex flex-col items-center' hoverClass='opacity-60' onClick={() => Taro.navigateTo({ url: '/pages/setting/index' })}>
        <Text className={`iconfont icon-user text-xl ${getActiveClass('Setting')}`}></Text>
        <Text className={`text-xs mt-1 ${getActiveClass('Setting')}`}>设置</Text>
      </View>
    </View>
  )
}