import { Button, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useState } from 'react';

const Login = () => {
  const [userInfo, setUserInfo] = useState(null);

  // 获取登录凭证
  const handleLogin = async () => {
    try {
      const { code } = await Taro.login(); // 获取微信登录 code
      if (!code) throw new Error('获取登录凭证失败');

      // 发送到后端获取 token
      const res = await Taro.request({
        url: 'http://localhost:3000/api/auth/login',
        method: 'POST',
        data: { code }
      });

      if (res.data && res.data.token) {
        Taro.setStorageSync('token', res.data.token); // 存储 token
        setUserInfo(res.data.user);
      }
    } catch (error) {
      console.error('登录失败:', error);
    }
  };

  return (
    <View className="p-4">
      <Button className="bg-green-500 text-white p-2 rounded" onClick={handleLogin}>
        微信登录
      </Button>
      {userInfo && <View className="mt-4">欢迎, {userInfo.nickName}</View>}
    </View>
  );
};

export default Login;
