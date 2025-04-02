import Taro from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import { AtIcon } from "taro-ui";
import { setToken, setUserId } from "@/utils/auth";

type Props = {};

export default function Login({}: Props) {
  const handleWxLogin = async () => {
    try {
      Taro.login({
        success: async (res) => {
          if (res.code) {
            const response = await Taro.request({
              url: "http://localhost:5000/api/user/wx-login",
              method: "POST",
              data: {
                code: res.code,
              },
            });

            if (response.data.success) {
              // 保存 token 和用户信息
              setToken(response.data.token);
              setUserId(response.data.user._id);
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
    Taro.reLaunch({ url: "/pages/home/index" });
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
