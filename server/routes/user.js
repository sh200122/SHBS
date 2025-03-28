import express from "express";
import axios from "axios";
import User from "../models/User.js";

const router = express.Router();

router.post("/wx-login", async (req, res) => {
  try {
    const { code } = req.body;

    // 请替换为您的微信应用配置
    const APPID = process.env.WX_APPID;
    const SECRET = process.env.WX_SECRET;

    // 调用微信接口获取openid
    const response = await axios.get(
      `https://api.weixin.qq.com/sns/jscode2session?appid=${APPID}&secret=${SECRET}&js_code=${code}&grant_type=authorization_code`
    );

    const { openid } = response.data;

    // 查找或创建用户
    let user = await User.findOne({ openid });
    if (!user) {
      user = await User.create({ openid });
    }

    res.json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
