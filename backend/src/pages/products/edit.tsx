import React, { useEffect, useState } from "react";
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

export default function edit({}: Props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const id = Taro.getCurrentInstance().router?.params?.id;
    Taro.request({
      url: `http://localhost:5000/api/product/${id}`,
      method: "GET", 
      success: (res) => {
        const product = res.data;
        setName(product.name);
        setPrice(product.price);
        setDescription(product.description);
        setImage(product.image);
      },
      fail: (err) => {
        console.log(err);
        Taro.showToast({
          title: "获取商品失败",
          icon: "none",
        });
      },
    });
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const id = Taro.getCurrentInstance().router?.params?.id;
    Taro.request({
      url: `http://localhost:5000/api/product/${id}`,
      method: "PUT",
      data: {
        name,
        price: Number(price),
        description,
        image,
      },
      success: () => {
        Taro.showToast({
          title: "编辑商品成功",
          icon: "success",
        });
      },
      fail: (err) => {
        console.log(err);
        Taro.showToast({
          title: "编辑商品失败",
          icon: "none",
        });
      },
    });
  };

  const handleChooseImage = async () => {
    try {
      const res = await Taro.chooseImage({
        count: 1,
        sizeType: ['compressed'],
        sourceType: ['album', 'camera'],
      });
  
      // 上传图片到服务器
      const tempFilePath = res.tempFilePaths[0];
      const uploadRes = await Taro.uploadFile({
        url: 'http://localhost:5000/api/upload', // 确保后端有这个上传接口
        filePath: tempFilePath,
        name: 'file',
      });
  
      if (uploadRes.statusCode === 200) {
        const data = JSON.parse(uploadRes.data);
        setImage(data.url); // 保存服务器返回的图片URL
      } else {
        throw new Error('上传失败');
      }
    } catch (error) {
      console.error('图片处理失败:', error);
      Taro.showToast({
        title: '图片上传失败',
        icon: 'none',
      });
    }
  };
  
  // 修改Image组件的显示方式
  const getImageUrl = (url: string) => {
    // 如果是完整的URL就直接返回，否则拼接基础URL
    if (url.startsWith('http')) {
      return url;
    }
    return `http://localhost:5000${url}`;
  };

  const handleCancel = () => {
    Taro.navigateTo({
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
          编辑商品
        </Text>
        <Label className="block text-gray-700 text-sm font-bold">图片:</Label>
        <View className="w-full flex flex-col items-center space-y-2">
          {image ? (
            <View className="relative">
              <Image
                src={getImageUrl(image)}
                className="w-full h-[200px] object-contain rounded"
                mode="aspectFit"
              />
              <Button
                className="absolute top-2 right-2 bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center"
                onClick={() => setImage("")}
              >
                X
              </Button>
            </View>
          ) : (
            <Button
              className="w-full h-[200px] border-2 border-dashed border-gray-300 rounded flex items-center justify-center"
              onClick={handleChooseImage}
            >
              点击上传图片
            </Button>
          )}
        </View>
        <Label className="block text-gray-700 text-sm font-bold mt-1">
          商品:
        </Label>
        <Input
          name="name"
          type="text"
          value={name}
          onInput={(e) => setName(e.detail.value)}
          className="w-full h-[50px] border-solid border-[1px] p-2 border-gray-300 rounded"
        />
        <Label className="block text-gray-700 text-sm font-bold mt-1">
          价格:
        </Label>
        <Input
          name="price"
          type="number"
          value={price}
          onInput={(e) => setPrice(e.detail.value)}
          className="w-full h-[50px] border-solid border-[1px] p-2 border-gray-300 rounded"
        />
        <Label className="block text-gray-700 text-sm font-bold mt-1">
          描述:
        </Label>
        <Textarea
          name="description"
          value={description}
          onInput={(e) => setDescription(e.detail.value)}
          className="w-full h-[100px] border-solid border-[1px] p-2 border-gray-300 rounded"
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
