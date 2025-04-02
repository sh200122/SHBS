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

export const getUserId = () => {
  return Taro.getStorageSync("userId");
};

export const setUserId = (userId: string) => {
  Taro.setStorageSync("userId", userId);
};

export const removeUserId = () => {
  Taro.removeStorageSync("userId");
};

export const logout = () => {
  removeToken();
  removeUserId();
  Taro.removeStorageSync("searchHistory"); // 清空搜索历史记录
};
