import express from "express";
import axios from "axios";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/wx-login", async (req, res) => {
  try {
    const { code } = req.body;
    const APPID = process.env.WX_APPID;
    const SECRET = process.env.WX_SECRET;

    const response = await axios.get(
      `https://api.weixin.qq.com/sns/jscode2session?appid=${APPID}&secret=${SECRET}&js_code=${code}&grant_type=authorization_code`
    );

    const { openid } = response.data;

    let user = await User.findOne({ openid });
    if (!user) {
      user = await User.create({ openid });
    }

    // 生成 JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({ success: true, user, token });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
