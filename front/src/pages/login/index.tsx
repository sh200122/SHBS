import { View, Text, Form, Input, Button, Label } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("提交登录请求:", formData);
  
      const response = await Taro.request({
        url: "http://localhost:5000/api/admin/login",
        method: "POST",
        data: formData,
        header: {
          "content-type": "application/json",
        },
      });
  
      console.log("登录响应:", response);
  
      if (response.statusCode === 200 && response.data.success) {
        const token = response.data.token;
        
        // ✅ 先存 Token
        await Taro.setStorage({ key: "token", data: token });
  
        // ✅ 确保 Token 已存储
        Taro.getStorage({
          key: "token",
          success: (res) => {
            console.log("存储的 Token:", res.data);
          },
          fail: () => {
            console.warn("存储失败");
          },
        });

        Taro.setStorageSync('adminInfo', {
          _id: response.data.admin._id,
          name: response.data.admin.name,
          email: response.data.admin.email
        });
  
        console.log("登录成功，准备跳转...");
  
        // ✅ 改为 reLaunch，防止 Token 丢失
        await Taro.reLaunch({ url: "/pages/dashboard/index" });
  
        console.log("跳转成功");
      } else {
        console.error("登录失败:", response.data.message);
        Taro.showToast({ title: response.data.message || "登录失败", icon: "error" });
      }
    } catch (error) {
      console.error("登录错误:", error);
      Taro.showToast({ title: "登录请求失败", icon: "error" });
    }
  };

  return (
    <View className="flex flex-col items-center justify-center min-h-screen p-4 bg-[#e8e8e8]">
      <Text className="text-2xl font-bold mb-10">登录管理员系统</Text>
      <Form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {/* 邮箱输入框 */}
        <View className="flex flex-col gap-2">
          <Label className="text-sm font-medium text-gray-700">邮箱</Label>
          <Input
            type="text"
            name="email"
            placeholder="请输入邮箱"
            className="p-3"
            value={formData.email}
            onInput={(e) =>
              setFormData({ ...formData, email: e.detail.value })
            }
          />
        </View>

        {/* 密码输入框 */}
        <View className="flex flex-col gap-2">
          <Label className="text-sm font-medium text-gray-700">密码</Label>
          <Input
            type="password" // ✅ 确保密码不明文显示
            name="password"
            placeholder="请输入密码"
            className="p-3"
            value={formData.password}
            onInput={(e) =>
              setFormData({ ...formData, password: e.detail.value })
            }
          />
        </View>

        {/* 提交按钮 */}
        <Button
          formType="submit"
          className="bg-green-500 text-white rounded-md mt-10"
          hoverClass="bg-green-600"
        >
          登录
        </Button>
      </Form>
    </View>
  );
}
