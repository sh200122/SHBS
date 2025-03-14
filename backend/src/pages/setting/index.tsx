/*
 * @Author: alan alan.shi@duomai.com
 * @Date: 2025-03-05 14:51:28
 * @LastEditors: alan alan.shi@duomai.com
 * @LastEditTime: 2025-03-05 15:43:13
 * @FilePath: \front\src\pages\Setting.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { View, Text, Button, ScrollView } from '@tarojs/components'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Taro from '@tarojs/taro' 
import { useEffect, useState } from 'react'
  
type Props = {}

interface Admin {
  name: string;
  email: string;
  password: string;
}

interface StatItem {
  icon: string;
  name: string;
  count: string;
  unit: string;
}

const StatListItem = ({ item }: { item: StatItem }) => (
  <View className="flex justify-between items-center border-b border-gray-100 pb-2">
    <View className="flex items-center gap-2">
      <Text className="text-gray-600">{item.icon} {item.name}</Text>
    </View>
    <Text className="text-sm text-gray-500">{item.count}{item.unit}</Text>
  </View>
);

export default function Setting({}: Props) {

  const statData: StatItem[] = [
    { icon: '👁️', name: '小米20', count: '1w', unit: '人浏览' },
    { icon: '💬', name: '水果10', count: '1k', unit: '人评论' },
    { icon: '👁️', name: '小米20', count: '1w', unit: '人浏览' },
    { icon: '👁️', name: '小米20', count: '1w', unit: '人浏览' },
    { icon: '💬', name: '水果10', count: '1k', unit: '人评论' },
    { icon: '👁️', name: '小米20', count: '1w', unit: '人浏览' },
    { icon: '👁️', name: '小米20', count: '1w', unit: '人浏览' },
    { icon: '💬', name: '水果10', count: '1k', unit: '人评论' },
    { icon: '👁️', name: '小米20', count: '1w', unit: '人浏览' },
  ];

  const [admin, setAdmin] = useState<Admin>({  
    name: "",
    email: "",
    password: "",
  });

  const getAdmin = () => {
    const adminInfo=Taro.getStorageSync('adminInfo')
    Taro.request({
      url: "http://localhost:5000/api/admin",
      method: "GET",
      header:{
        'admin-id':adminInfo._id
      },
      success: (res) => {
        setAdmin({
          name: res.data.data.name,
          email: res.data.data.email,
          password: "" 
        });
      },
      fail: (err) => {
        console.log(err);
      }
    });
  };

  useEffect(() => {
    getAdmin();
  }, []);


  const handleLogout = () => {
    console.log("退出登录...");
    
    // 清除 Token
    Taro.removeStorageSync("token");
    Taro.removeStorageSync('adminInfo');

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

  const handleEdit = () => {
    Taro.reLaunch({
      url: "/pages/setting/edit",
    });
  };
  return (
    <View className="h-screen w-screen">
      <Header />
      <View className="fixed top-[11%] h-[84%] bg-gray-100 w-full p-4">
        <View className="bg-white rounded-lg shadow p-6 max-w-md mx-auto">
          <View className="mb-6 flex items-center justify-center gap-2">
            <Text className="text-lg font-bold mt-1">👤</Text>
            <Text className="text-lg font-bold mt-1">{admin.name}</Text>
          </View>
        
          <Button 
            className="bg-[#fbb713] text-white rounded-md w-full mb-4"
            hoverClass="bg-yellow-500"
            onClick={handleEdit}
          >
            编辑个人信息
          </Button>
          
          <Button
            formType="submit"
            className="bg-red-500 text-white rounded-md w-full"
            hoverClass="bg-red-600"
            onClick={handleLogout}
          >
            退出登录
          </Button>
        </View>

        <View className="bg-white rounded-lg shadow p-6 mx-auto mt-4 h-[66%]">
        <Text className="text-lg font-bold">商品数据统计</Text>
        <ScrollView className="overflow-y-scroll h-[90%] py-4" scrollY enableFlex>
          <View className="space-y-4 pr-4">
            {statData.map((item, index) => (
              <StatListItem key={index} item={item} />
            ))}
          </View>
        </ScrollView>
      </View>
      </View>
      <Footer />
    </View>
  )
}