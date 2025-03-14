import {Text, Form, Input, Button, Label, } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useState, useEffect } from "react";

interface Admin {
  _id?: string;
  name: string;
  email: string;
  password: string;
}

export default function EditAdmin() {
  const [admin, setAdmin] = useState<Admin>({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    Taro.request({
      url: "http://localhost:5000/api/admin",
      method: "GET",
      success: (res) => {
        if (res.data.success) {
          setAdmin(res.data.data);
        } else {
          Taro.showToast({
            title: res.data.message || '获取用户信息失败',
            icon: 'error'
          });
        }
      },
      fail: (err) => {
        console.error('获取用户数据失败:', err);
        Taro.showToast({
          title: '获取用户信息失败',
          icon: 'error'
        });
      }
    });
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault(); 
    Taro.request({
      url: "http://localhost:5000/api/admin",
      method: "PUT",
      data: admin,
      success: () => {
          Taro.showToast({
            title: '更新成功',
            icon: 'success'
          });
          Taro.navigateTo({
            url: "/pages/setting/index",
          });
      },
      fail: (err) => {
        console.error('更新失败:', err);
        Taro.showToast({
          title: '更新失败',
          icon: 'error'
        });
      }
    });
  };

  const handleCancel = () => {
    Taro.reLaunch({
      url: "/pages/setting/index",
    });
  };

  return (
    <view className="w-screen h-screen bg-[#e8e8e8] flex items-center justify-center p-4">
      <Form
        onSubmit={handleSubmit}
        className="w-full max-w-lg h-auto bg-white rounded-lg shadow-lg p-6 space-y-4"
      >
        <Text className="text-2xl font-bold block text-center mb-6">
          编辑管理员
        </Text>
        <Label className="block text-gray-700 text-sm font-bold mt-1">
          名称:
        </Label>
        <Input
          name="name"
          value={admin.name}
          onInput={(e) => setAdmin({ ...admin, name: e.detail.value })}
          className="w-full h-[50px] border-solid border-[1px] p-2 border-gray-300 rounded"
        />
        <Label className="block text-gray-700 text-sm font-bold mt-1">
          邮箱:
        </Label>
        <Input
          name="email"
          value={admin.email}
          onInput={(e) => setAdmin({ ...admin, email: e.detail.value })}
          className="w-full h-[50px] border-solid border-[1px] p-2 border-gray-300 rounded"
        />
        <Label className="block text-gray-700 text-sm font-bold mt-1">
          密码:
        </Label>
        <Input
          name="password"
          value={admin.password}
          onInput={(e) => setAdmin({ ...admin, password: e.detail.value })}
          className="w-full h-[50px] border-solid border-[1px] p-2 border-gray-300 rounded"
        />
        <Button
          className="w-full bg-[#fbb713] text-white h-12 rounded mt-6"
          hoverClass="bg-[#a3770c]"
          formType="submit"
        >
          保存
        </Button>
        <Button
          className="w-full bg-red-500 text-white h-12 rounded mt-4"
          hoverClass="bg-red-600"
          onClick={handleCancel}
        >
          取消
        </Button>
      </Form>
    </view>
  );
}