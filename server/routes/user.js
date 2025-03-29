import express from "express";
import axios from "axios";
import User from "../models/User.js";
<<<<<<< HEAD
=======
import jwt from "jsonwebtoken";
>>>>>>> origin/sh

const router = express.Router();

router.post("/wx-login", async (req, res) => {
  try {
    const { code } = req.body;
<<<<<<< HEAD

    // 请替换为您的微信应用配置
    const APPID = process.env.WX_APPID;
    const SECRET = process.env.WX_SECRET;

    // 调用微信接口获取openid
=======
    const APPID = process.env.WX_APPID;
    const SECRET = process.env.WX_SECRET;

>>>>>>> origin/sh
    const response = await axios.get(
      `https://api.weixin.qq.com/sns/jscode2session?appid=${APPID}&secret=${SECRET}&js_code=${code}&grant_type=authorization_code`
    );

    const { openid } = response.data;

<<<<<<< HEAD
    // 查找或创建用户
=======
>>>>>>> origin/sh
    let user = await User.findOne({ openid });
    if (!user) {
      user = await User.create({ openid });
    }

<<<<<<< HEAD
    res.json({ success: true, user });
=======
    // 生成 JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({ success: true, user, token });
>>>>>>> origin/sh
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
