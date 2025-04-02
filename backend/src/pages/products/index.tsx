import { View, Text, Button, Image } from "@tarojs/components";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Taro from "@tarojs/taro";
import { useState, useEffect } from "react";
import { useDidShow } from "@tarojs/taro";

type Props = {};

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  status: "active" | "inactive";
}

export default function Products({}: Props) {
  const [products, setProducts] = useState<Product[]>([]);

  const getAdminInfo = () => {
    return Taro.getStorageSync("adminInfo") || {};
  };

  useEffect(() => {
    const adminInfo = getAdminInfo();
    Taro.request({
      url: "http://localhost:5000/api/product/admin",
      method: "GET",
      header: {
        "admin-id": adminInfo._id,
      },
      success: (res) => {
        setProducts(res.data);
      },
      fail: (err) => {
        console.log(err);
      },
    });
  }, []);

  useDidShow(() => {
    getAdminInfo();
  });

  const handleDeleteProduct = (product: Product) => {
    const adminInfo = getAdminInfo();
    Taro.showModal({
      title: "确认下架",
      content: `确定要下架 ${product.name} 吗？`,
      success: function (res) {
        if (res.confirm) {
          Taro.request({
            url: `http://localhost:5000/api/product/${product._id}`,
            method: "DELETE",
            header: {
              "admin-id": adminInfo._id,
            },
            success: () => {
              setProducts(
                products.map((p) =>
                  p._id === product._id ? { ...p, status: "inactive" } : p
                )
              );
              Taro.showToast({
                title: "下架成功",
                icon: "success",
                duration: 2000,
              });
            },
            fail: (err) => {
              console.log(err);
              Taro.showToast({
                title: "下架失败",
                icon: "error",
                duration: 2000,
              });
            },
          });
        }
      },
    });
  };

  const handleActivateProduct = (product: Product) => {
    const adminInfo = getAdminInfo();
    Taro.showModal({
      title: "确认上架",
      content: `确定要上架 ${product.name} 吗？`,
      success: function (res) {
        if (res.confirm) {
          Taro.request({
            url: `http://localhost:5000/api/product/${product._id}/activate`,
            method: "PUT",
            header: {
              "admin-id": adminInfo._id,
            },
            success: () => {
              setProducts(
                products.map((p) =>
                  p._id === product._id ? { ...p, status: "active" } : p
                )
              );
              Taro.showToast({
                title: "上架成功",
                icon: "success",
                duration: 2000,
              });
            },
            fail: (err) => {
              console.log(err);
              Taro.showToast({
                title: "上架失败",
                icon: "error",
                duration: 2000,
              });
            },
          });
        }
      },
    });
  };

  const handleAddProduct = () => {
    Taro.reLaunch({ url: "/pages/products/add" });
  };

  return (
    <View className="w-screen h-screen">
      <Header />
      <View className="fixed top-[89%] left-0 right-0 h-[6%] p-2 flex justify-center items-center bg-[#f3f4f6]">
        <Button
          className="bg-[#fbb713] text-white rounded-md w-full h-full flex justify-center items-center shadow-md"
          hoverClass="bg-yellow-500"
          onClick={handleAddProduct}
        >
          <Text className="text-white text-center">添加闲置</Text>
        </Button>
      </View>
      <View className="fixed top-[11%] left-0 right-0 h-[78%] bg-gray-100 flex flex-col overflow-y-scroll p-4">
        {products.length === 0 ? (
          <Text className="text-gray-500 text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            您还没有闲置任何物品，请先添加闲置~
          </Text>
        ) : (
          <View className="flex flex-col gap-4">
            {products.map((product) => (
              <View
                key={product._id}
                className="bg-white rounded-lg p-4 flex gap-2"
              >
                <Image
                  src={product.image}
                  className="w-full h-full max-w-[300px] max-h-[300px] object-contain rounded"
                  mode="widthFix"
                />
                <View className="flex flex-col gap-2">
                  <Text className="text-lg font-bold">{product.name}</Text>
                  <Text className="text-sm text-gray-500">
                    {product.description}
                  </Text>
                  <Text className="text-sm text-gray-500">
                    {product.price}￥
                  </Text>
                  <View className="flex gap-2">
                    <Button
                      className="bg-[#fbb713] text-white"
                      hoverClass="bg-[#a3770c]"
                      onClick={() =>
                        Taro.reLaunch({
                          url: `/pages/products/edit?id=${product._id}`,
                        })
                      }
                    >
                      编辑
                    </Button>
                    {product.status === "active" ? (
                      <Button
                        className="bg-red-500 text-white"
                        hoverClass="bg-red-600"
                        onClick={() => handleDeleteProduct(product)}
                      >
                        下架
                      </Button>
                    ) : (
                      <Button
                        className="bg-gray-500 text-white"
                        hoverClass="bg-gray-600"
                        onClick={() => handleActivateProduct(product)}
                      >
                        上架
                      </Button>
                    )}
                  </View>
                </View>
              </View>
            ))}
          </View>
        )}
      </View>
      <Footer />
    </View>
  );
}
