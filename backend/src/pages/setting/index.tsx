/*
 * @Author: alan alan.shi@duomai.com
 * @Date: 2025-03-05 14:51:28
 * @LastEditors: alan alan.shi@duomai.com
 * @LastEditTime: 2025-03-05 15:43:13
 * @FilePath: \front\src\pages\Setting.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { View, Text, Button } from '@tarojs/components'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Taro from '@tarojs/taro' 

type Props = {}

export default function Setting({}: Props) {
  const handleLogout = () => {
    console.log("退出登录...");
    
    // 清除 Token
    Taro.removeStorageSync("token");

    // 提示信息
    Taro.showToast({
      title: "已退出登录",
      icon: "success",
    });

    // 跳转回登录页
    setTimeout(() => {
      Taro.redirectTo({
        url: "/pages/login/index",
      });
    }, 1000); // 延迟 1 秒，让用户看到退出提示
  };
  return (
    <View className='mt-10 w-screen h-screen bg-[#e8e8e8]'>
      <Header />
      <Text>设置</Text>
      <Button
          formType="submit"
          className="bg-red-500 text-white rounded-md mt-10"
          hoverClass="bg-red-600"
          onClick={handleLogout}
        >
          退出登录
        </Button>
      <Footer />
    </View>
  )
}