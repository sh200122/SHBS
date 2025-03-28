import React from "react";
import Taro from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import { AtIcon } from "taro-ui";

type Props = {};

export default function Login({}: Props) {
  const handleWxLogin = async () => {
    try {
      // 调用微信小程序登录接口获取code
      Taro.login({
        success: async (res) => {
          if (res.code) {
            // 发送code到后端
            const response = await Taro.request({
              url: "http://localhost:5000/api/user/wx-login", // 使用完整的URL
              method: "POST",
              data: {
                code: res.code,
              },
            });

            if (response.data.success) {
              // 登录成功，可以存储用户信息到本地
              Taro.setStorageSync("user", JSON.stringify(response.data.user));
              // 跳转到首页或其他页面
              Taro.reLaunch({ url: "/pages/home/index" });
            }
          }
        },
      });
    } catch (error) {
      console.error("登录失败:", error);
    }
  };

  const handleCancel = () => {
    // 返回上一页，如果没有上一页则进入首页
    Taro.navigateBack({
      fail: () => {
        Taro.reLaunch({ url: "/pages/home/index" });
      },
    });
  };

  return (
    <View className="h-screen w-screen flex flex-col justify-center items-center p-4 space-y-4">
      <Button
        className="bg-green-500 text-white rounded-md w-full flex items-center justify-center h-12"
        onClick={handleWxLogin}
      >
        <AtIcon
          prefixClass="at-icon"
          value="weixin"
          size="24"
          color="#ffffff"
          className="mr-2"
        />
        <Text>微信登录</Text>
      </Button>
      <Button
        className="bg-gray-500 text-white rounded-md w-full h-12 mt-4"
        onClick={handleCancel}
      >
        取消
      </Button>
    </View>
  );
}
