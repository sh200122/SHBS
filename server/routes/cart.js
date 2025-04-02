import express from "express";
import Cart from "../models/Cart.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

// 添加商品到购物车
router.post("/add", auth, async (req, res) => {
  try {
    const { productId, adminId } = req.body;

    // 调试日志
    console.log("Adding product:", productId, "for user:", req.user._id);

    let cart = await Cart.findOne({ userId: req.user._id });

    if (!cart) {
      // 创建新购物车
      cart = new Cart({
        userId: req.user._id,
        items: [
          {
            productId,
            quantity: 1,
            adminId,
            addedAt: new Date(),
          },
        ],
      });
    } else {
      // 检查商品是否已在购物车中
      const existingItem = cart.items.find(
        (item) => item.productId.toString() === productId
      );

      if (existingItem) {
        // 如果商品已存在，增加数量
        existingItem.quantity += 1;
      } else {
        // 如果商品不存在，添加新商品
        cart.items.push({
          productId,
          quantity: 1,
          adminId,
          addedAt: new Date(),
        });
      }
    }

    await cart.save();

    // 返回填充了商品信息的购物车
    const populatedCart = await Cart.findById(cart._id)
      .populate("items.productId")
      .exec();

    res.status(200).json(populatedCart);
  } catch (error) {
    console.error("Cart add error:", error);
    res.status(500).json({ message: "添加到购物车失败", error: error.message });
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user._id })
      .sort({ addedAt: -1 })
      .populate("items.productId")
      .exec();

    if (!cart) {
      return res.status(200).json({ items: [] });
    }

    // 在内存中对items数组排序
    if (cart.items && cart.items.length > 0) {
      cart.items.sort((a, b) => {
        // 按加入时间降序排列（最新的在前面）
        return new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime();
      });
    }

    res.status(200).json(cart);
  } catch (error) {
    console.error("Cart get error:", error);
    res.status(500).json({ message: "获取购物车失败", error: error.message });
  }
});

// 更新购物车商品数量
router.put("/update", auth, async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    if (quantity < 1) {
      return res.status(400).json({ message: "数量必须大于0" });
    }

    const cart = await Cart.findOne({ userId: req.user._id });
    if (!cart) {
      return res.status(404).json({ message: "购物车不存在" });
    }

    const itemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (itemIndex > -1) {
      cart.items[itemIndex].quantity = quantity;
      await cart.save();

      const updatedCart = await Cart.findById(cart._id)
        .populate("items.productId")
        .exec();

      res.status(200).json(updatedCart);
    } else {
      res.status(404).json({ message: "商品不存在" });
    }
  } catch (error) {
    res.status(500).json({ message: "更新购物车失败", error: error.message });
  }
});

// 删除购物车商品
router.delete("/remove", auth, async (req, res) => {
  try {
    const { productId } = req.body;

    const cart = await Cart.findOne({ userId: req.user._id });
    if (!cart) {
      return res.status(404).json({ message: "购物车不存在" });
    }

    cart.items = cart.items.filter(
      (item) => item.productId.toString() !== productId
    );

    await cart.save();

    const updatedCart = await Cart.findById(cart._id)
      .populate("items.productId")
      .exec();

    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json({ message: "删除商品失败", error: error.message });
  }
});

router.post("/clear", auth, async (req, res) => {
  try {
    await Cart.findOneAndDelete({ userId: req.user._id });
    res.status(200).json({ message: "购物车已清空" });
  } catch (error) {
    res.status(500).json({ message: "清空购物车失败", error: error.message });
  }
});

export default router;
