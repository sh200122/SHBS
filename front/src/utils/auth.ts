import Taro from "@tarojs/taro";

export const setToken = (token: string) => {
  Taro.setStorageSync("token", token);
};

export const getToken = () => {
  return Taro.getStorageSync("token");
};

export const removeToken = () => {
  Taro.removeStorageSync("token");
};

export const logout = () => {
  removeToken();
};
