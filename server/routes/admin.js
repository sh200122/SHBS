import express from "express";
import Admin from "../models/Admin.js";

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    // 查找管理员
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    if (admin.password !== password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    res.status(200).json({
      success: true,
      message: "Admin logged in successfully",
      admin: {
        _id: admin._id,
        email: admin.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;
