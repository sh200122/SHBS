import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  openid: { type: String, unique: true },
  nickname: String,
  avatar: String,
  createTime: { type: Date, default: Date.now },
});

export default mongoose.model("User", userSchema);
