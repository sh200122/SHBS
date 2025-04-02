import jwt from "jsonwebtoken";
import mongoose from "mongoose";

export const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new Error();
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = {
      ...decoded,
      _id: new mongoose.Types.ObjectId(decoded.userId || decoded._id),
    };
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: "请先登录" });
  }
};
