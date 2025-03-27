import React, { useState } from "react";
import {
  Button,
  Input,
  Text,
  Label,
  Textarea,
  Form,
  View,
  Image,
} from "@tarojs/components";
import Taro from "@tarojs/taro";
type Props = {};

export default function add({}: Props) {
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    price: "",
    description: "",
  });
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!formData.image || !formData.name || !formData.price) {
      Taro.showToast({
        title: "请填写必选项",
        icon: "error",
        duration: 2000,
      });
      return;
    }
    const adminInfo = Taro.getStorageSync("adminInfo");
    try {
      const res = await Taro.request({
        url: "http://localhost:5000/api/product/add",
        method: "POST",
        header: {
          "admin-id": adminInfo._id,
        },
        data: formData,
      });
      if (res.statusCode === 201) {
        setFormData({
          image: "",
          name: "",
          price: "",
          description: "",
        });
        Taro.showToast({
          title: "添加成功",
          icon: "success",
        });
        setTimeout(() => {
          Taro.reLaunch({
            url: "/pages/products/index",
          });
        }, 1000);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  const imageToBase64 = (tempFilePath: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      Taro.getFileSystemManager().readFile({
        filePath: tempFilePath,
        encoding: "base64",
        success: (res) => {
          const base64 = `data:image/jpeg;base64,${res.data}`;
          resolve(base64);
        },
        fail: (err) => {
          console.error("转换失败:", err);
          reject(err);
        },
      });
    });
  };

  // 处理选择图片
  const handleChooseImage = async () => {
    try {
      const res = await Taro.chooseImage({
        count: 1,
        sizeType: ["compressed"],
        sourceType: ["album", "camera"],
      });

      // 压缩图片
      const compressRes = await Taro.compressImage({
        src: res.tempFilePaths[0],
        quality: 80,
      });

      // 转换为 base64
      const base64Image = await imageToBase64(compressRes.tempFilePath);

      setFormData({ ...formData, image: base64Image });
    } catch (error) {
      console.error("选择图片失败:", error);
      Taro.showToast({
        title: "添加图片失败",
        icon: "error",
      });
    }
  };

  const handleCancel = () => {
    Taro.reLaunch({
      url: "/pages/products/index",
    });
  };
  return (
    <view className="w-screen h-screen bg-[#e8e8e8] flex items-center justify-center p-4">
      <Form
        onSubmit={handleSubmit}
        className="w-full max-w-lg h-auto bg-white rounded-lg shadow-lg p-6 space-y-4"
      >
        <Text className="text-2xl font-bold block text-center mb-6">
          添加闲置
        </Text>
        <Label className="block text-gray-700 text-sm font-bold">图片:</Label>
        <View className="w-full flex flex-col items-center space-y-2">
          {formData.image ? (
            <Image
              src={formData.image}
              className="w-full h-full max-w-[300px] max-h-[300px] object-contain rounded"
              mode="widthFix"
            />
          ) : (
            <View
              className="w-32 h-32 bg-gray-200 rounded flex items-center justify-center cursor-pointer hover:bg-gray-300"
              onClick={handleChooseImage}
            >
              <Text className="text-gray-500 text-2xl">+</Text>
            </View>
          )}
        </View>
        <Label className="block text-gray-700 text-sm font-bold mt-1">
          商品:
        </Label>
        <Input
          name="name"
          type="text"
          value={formData.name}
          onInput={(e) => setFormData({ ...formData, name: e.detail.value })}
          className="w-full h-[50px] border-solid border-[1px] p-2 border-gray-300 rounded"
          placeholder="请输入商品"
        />
        <Label className="block text-gray-700 text-sm font-bold mt-1">
          价格:
        </Label>
        <Input
          name="price"
          type="number"
          value={formData.price}
          onInput={(e) => setFormData({ ...formData, price: e.detail.value })}
          className="w-full h-[50px] border-solid border-[1px] p-2 border-gray-300 rounded"
          placeholder="请输入价格"
        />
        <Label className="block text-gray-700 text-sm font-bold mt-1">
          描述:
        </Label>
        <Textarea
          name="description"
          value={formData.description}
          onInput={(e) =>
            setFormData({ ...formData, description: e.detail.value })
          }
          className="w-full h-[100px] border-solid border-[1px] p-2 border-gray-300 rounded"
          placeholder="请输入描述..."
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
