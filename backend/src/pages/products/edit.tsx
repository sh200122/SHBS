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
        setTimeout(() => {
            Taro.navigateTo({
              url: "/pages/products/index",
            });
          }, 1500);
      },
      fail: (err) => {
        console.log(err);
        Taro.showToast({
          title: "编辑商品失败，请重试",
          icon: "none",
        });
      },
    });
  };

  const handleChooseImage = async () => {
    try {
      const res = await Taro.chooseImage({
        count: 1,
        sizeType: ["compressed"],
        sourceType: ["album", "camera"],
      });

      // 将图片转换为Base64
      const tempFilePath = res.tempFilePaths[0];
      const fileContent = await Taro.getFileSystemManager().readFileSync(
        tempFilePath,
        "base64"
      );
      const base64Image = `data:image/jpeg;base64,${fileContent}`;

      setImage(base64Image);

      Taro.showToast({
        title: "图片选择成功",
        icon: "success",
      });
    } catch (error) {
      console.error("图片处理失败:", error);
      Taro.showToast({
        title: "图片处理失败",
        icon: "none",
      });
    }
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
        <View className="w-full flex items-center justify-center space-x-2">
          <Image
            src={image}
            className="w-full h-full max-w-[300px] max-h-[300px] object-contain rounded"
            mode="widthFix"
          />
          <Button
            className="bg-[#fbb713] text-white h-6 w-30 rounded text-xs leading-6"
            hoverClass="bg-[#a3770c]"
            onClick={handleChooseImage}
          >
            重新选择图片
          </Button>
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
