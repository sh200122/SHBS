import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { View, ScrollView, Image, Text, Button } from "@tarojs/components";
import { useEffect, useState } from "react";
import Taro from "@tarojs/taro";
import { useDidShow } from "@tarojs/taro";

type CartItem = {
  productId: {
    _id: string;
    name: string;
    price: number;
    image: string;
    description: string;
  };
  quantity: number;
};

export default function index() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const fetchCartItems = async () => {
    try {
      const response = await Taro.request({
        url: "http://localhost:5000/api/cart",
        method: "GET",
        header: {
          Authorization: `Bearer ${Taro.getStorageSync("token")}`,
        },
      });

      // 确保返回的数据存在且有items数组
      if (response.data && response.data.items) {
        setCartItems(response.data.items);
      } else {
        setCartItems([]);
      }
    } catch (error) {
      console.error("获取购物车失败:", error);
      Taro.showToast({
        title: "获取购物车失败",
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  useDidShow(() => {
    fetchCartItems();
  });

  if (loading) {
    return (
      <View className="min-h-screen">
        <Header />
        <View className="flex items-center justify-center h-[84%]">
          <Text>加载中...</Text>
        </View>
        <Footer />
      </View>
    );
  }

  const updateQuantity = async (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return;

    try {
      const response = await Taro.request({
        url: "http://localhost:5000/api/cart/update",
        method: "PUT",
        header: {
          Authorization: `Bearer ${Taro.getStorageSync("token")}`,
        },
        data: {
          productId,
          quantity: newQuantity,
        },
      });

      if (response.data && response.data.items) {
        setCartItems(response.data.items);
      }
    } catch (error) {
      Taro.showToast({
        title: "更新数量失败",
        icon: "error",
      });
    }
  };

  const removeItem = async (productId: string) => {
    try {
      const response = await Taro.request({
        url: "http://localhost:5000/api/cart/remove",
        method: "DELETE",
        header: {
          Authorization: `Bearer ${Taro.getStorageSync("token")}`,
        },
        data: {
          productId,
        },
      });

      if (response.data && response.data.items) {
        setCartItems(response.data.items);
      }
    } catch (error) {
      Taro.showToast({
        title: "删除商品失败",
        icon: "error",
      });
    }
  };

  const handlePay = () => {
    const token = Taro.getStorageSync("token");
    if (!token) {
      Taro.showToast({
        title: "请先登录",
        icon: "error",
        duration: 2000,
      });
      return;
    }
    setIsModalVisible(true);
  };

  const confirmOrder = async () => {
    try {
      const token = Taro.getStorageSync("token");
      // 构建订单商品数据
      const orderProducts = cartItems.map((item) => ({
        productId: item.productId._id,
        quantity: item.quantity,
      }));

      const response = await Taro.request({
        url: "http://localhost:5000/api/orders/create",
        method: "POST",
        data: {
          products: orderProducts,
        },
        header: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        // 清空购物车
        const clearCartResponse = await Taro.request({
          url: "http://localhost:5000/api/cart/clear",
          method: "POST",
          header: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (clearCartResponse.data.success) {
          setCartItems([]); // 清空本地购物车数据
        }

        Taro.showToast({
          title: "下单成功",
          icon: "success",
          duration: 2000,
        });

        Taro.reLaunch({
          url: "/pages/cart/index",
        });
      } else {
        throw new Error(response.data.message || "下单失败");
      }
    } catch (error: any) {
      console.error("下单错误:", error);
      Taro.showToast({
        title: error.message || "下单失败",
        icon: "error",
        duration: 2000,
      });
    }
    setIsModalVisible(false);
  };

  // 计算总金额
  const totalAmount = cartItems
    .reduce((sum, item) => sum + item.productId.price * item.quantity, 0)
    .toFixed(2);

  return (
    <View className="min-h-screen">
      <Header />
      <ScrollView
        className="fixed top-[11%] h-[84%] bg-gray-100 w-full p-3"
        scrollY
        enableFlex
      >
        {cartItems.length === 0 ? (
          <View className="flex items-center justify-center h-full">
            <Text>购物车是空的</Text>
          </View>
        ) : (
          cartItems.map((item) => (
            <View
              key={item.productId._id}
              className="flex items-center justify-between bg-white p-4 mb-2 rounded-lg w-[94%]"
            >
              <Image
                src={item.productId.image}
                className="w-20 h-20 rounded-md object-cover"
              />
              <View className="flex-1 ml-4">
                <View className="flex flex-col gap-y-2">
                  <Text className="text-lg font-medium">
                    {item.productId.name}
                  </Text>
                  <Text className="text-sm text-gray-500">
                    {item.productId.description}
                  </Text>
                  <Text className="text-red-500">¥{item.productId.price}</Text>
                </View>
              </View>
              <View className="flex flex-col items-center gap-y-2">
                <View className="flex items-center space-x-2 gap-2 w-24">
                  <Button
                    className="bg-gray-200 rounded w-6 h-6 flex items-center justify-center"
                    onClick={() =>
                      updateQuantity(item.productId._id, item.quantity - 1)
                    }
                  >
                    <Text className="text-sm"> - </Text>
                  </Button>
                  <Text>{item.quantity}</Text>
                  <Button
                    className="bg-gray-200 rounded w-6 h-6 flex items-center justify-center"
                    onClick={() =>
                      updateQuantity(item.productId._id, item.quantity + 1)
                    }
                  >
                    <Text className="text-sm"> + </Text>
                  </Button>
                </View>
                <Button
                  className="bg-red-500 text-white px-2 rounded"
                  hover-class="bg-red-800"
                  onClick={() => removeItem(item.productId._id)}
                >
                  删除
                </Button>
              </View>
            </View>
          ))
        )}
      </ScrollView>
      {cartItems.length > 0 && (
        <View className="fixed bottom-[5%] left-0 right-0 bg-white p-4 flex justify-between items-center w-full rounded-lg">
          <Text className="text-lg">总计: ¥{totalAmount}</Text>
          <Button
            className="bg-yellow-500 text-white rounded mr-1"
            hover-class="bg-yellow-800"
            onClick={handlePay}
          >
            结算
          </Button>
        </View>
      )}

      {/* 确认订单弹窗 */}
      {isModalVisible && (
        <View className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <View className="bg-white rounded-lg p-6 w-[80%] max-h-[80%] overflow-y-auto">
            <Text className="text-xl font-bold mb-4">确认订单</Text>

            <ScrollView scrollY className="max-h-64 my-4">
              {cartItems.map((item) => (
                <View
                  key={item.productId._id}
                  className="flex items-center py-2 pr-4 border-b border-gray-100"
                >
                  <Image
                    src={item.productId.image}
                    className="w-12 h-12 rounded-md object-cover"
                  />
                  <View className="ml-3 flex-1">
                    <Text className="font-medium">{item.productId.name}</Text>
                    <View className="flex justify-between mt-1">
                      <Text className="text-red-500">
                        ¥{item.productId.price}
                      </Text>
                      <Text className="text-gray-500">x{item.quantity}</Text>
                    </View>
                  </View>
                </View>
              ))}
            </ScrollView>

            <View className="border-t border-gray-200 pt-4">
              <Text className="font-bold text-lg mb-4">
                总计: ¥{totalAmount}
              </Text>

              <View className="flex justify-between mt-4">
                <Button
                  className="bg-gray-300 text-gray-700 rounded w-[45%]"
                  onClick={() => setIsModalVisible(false)}
                >
                  取消
                </Button>
                <Button
                  className="bg-yellow-500 text-white rounded w-[45%]"
                  hover-class="bg-yellow-600"
                  onClick={confirmOrder}
                >
                  确认支付
                </Button>
              </View>
            </View>
          </View>
        </View>
      )}
      <Footer />
    </View>
  );
}
