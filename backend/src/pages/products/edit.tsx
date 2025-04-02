import { useEffect, useState } from "react";
import {
  Button,
  Input,
  Text,
  Label,
  Textarea,
  Form,
  View,
  Image,
  Picker,
} from "@tarojs/components";
import Taro from "@tarojs/taro";
type Props = {};

export default function edit({}: Props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  const categoryOptions = [
    "手机",
    "电脑",
    "服饰",
    "鞋子",
    "手表",
    "相机",
    "家电",
    "其他",
  ];

  const handleCategoryChange = (e) => {
    const selectedIndex = e.detail.value;
    setCategory(categoryOptions[selectedIndex]);
  };

  useEffect(() => {
    const adminInfo = Taro.getStorageSync("adminInfo");
    const id = Taro.getCurrentInstance().router?.params?.id;
    Taro.request({
      url: `http://localhost:5000/api/product/${id}`,
      method: "GET",
      header: {
        "admin-id": adminInfo._id,
      },
      success: (res) => {
        const product = res.data;
        setName(product.name);
        setPrice(product.price);
        setDescription(product.description);
        setImage(product.image);
        setCategory(product.category);
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
    const adminInfo = Taro.getStorageSync("adminInfo");
    const id = Taro.getCurrentInstance().router?.params?.id;
    Taro.request({
      url: `http://localhost:5000/api/product/${id}`,
      method: "PUT",
      header: {
        "admin-id": adminInfo._id,
      },
      data: {
        name,
        price: Number(price),
        description,
        image,
        category,
      },
      success: () => {
        Taro.showToast({
          title: "编辑商品成功",
          icon: "success",
        });
        setTimeout(() => {
          Taro.reLaunch({
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

  const imageToBase64 = (tempFilePath: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      Taro.getFileSystemManager().readFile({
        filePath: tempFilePath,
        encoding: "base64",
        success: (res) => {
          // 直接返回base64字符串
          resolve(res.data as string);
        },
        fail: (err) => {
          console.error("转换失败:", err);
          reject(err);
        },
      });
    });
  };

  const handleChooseImage = async () => {
    try {
      const res = await Taro.chooseImage({
        count: 1,
        sizeType: ["compressed"],
        sourceType: ["album", "camera"],
      });

      // 更强力的压缩图片
      const compressRes = await Taro.compressImage({
        src: res.tempFilePaths[0],
        quality: 50, // 降低质量到50%
      });

      // 转换为 base64
      const base64Image = await imageToBase64(compressRes.tempFilePath);

      // 将前缀和base64分开处理
      const imageData = `data:image/jpeg;base64,${base64Image}`;

      // 检查大小
      if (imageData.length > 1000000) {
        // 约1MB的限制
        Taro.showToast({
          title: "图片过大，请选择更小的图片",
          icon: "none",
        });
        return;
      }

      setImage(imageData);

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
          类型:
        </Label>
        <View className="relative">
          <Picker
            mode="selector"
            range={categoryOptions}
            onChange={handleCategoryChange}
            className="w-full h-[50px] border-solid border-[1px] p-2 border-gray-300 rounded"
          >
            <View className="items-center">
              <Text className={category ? "text-black" : "text-gray-500"}>
                {category || "请选择商品类型"}
              </Text>
            </View>
          </Picker>
          <View className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <Text className="text-gray-700">▼</Text>
          </View>
        </View>
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
