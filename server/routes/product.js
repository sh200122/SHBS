import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// 验证管理员权限的中间件
const verifyAdmin = async (req, res, next) => {
  const adminId = req.headers["admin-id"];
  if (!adminId) {
    return res.status(401).json({ message: "需要管理员权限" });
  }
  req.adminId = adminId;
  next();
};

// 添加商品（需要管理员权限）
router.post("/add", verifyAdmin, async (req, res) => {
  try {
    const { name, price, description, image, category } = req.body;
    const product = new Product({
      adminId: req.adminId,
      name,
      price,
      description,
      image,
      category,
    });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 获取所有商品（公开接口）
router.get("/", async (req, res) => {
  try {
    const products = await Product.find({ status: "active" });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 获取管理员的商品列表
router.get("/admin", verifyAdmin, async (req, res) => {
  try {
    const products = await Product.find({ adminId: req.adminId });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 获取单个商品详情
router.get("/:id", verifyAdmin, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "商品未找到" });
    }

    // 验证是否为商品所有者
    if (product.adminId.toString() !== req.adminId) {
      return res.status(403).json({ message: "没有权限查看此商品" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 更新商品（需要验证是否为商品所有者）
router.put("/:id", verifyAdmin, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "商品未找到" });
    }

    // 验证是否为商品所有者
    if (product.adminId.toString() !== req.adminId) {
      return res.status(403).json({ message: "没有权限修改此商品" });
    }

    const { name, price, description, image, category } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { name, price, description, image, category },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 删除商品（软删除）
router.delete("/:id", verifyAdmin, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "商品未找到" });
    }

    // 验证是否为商品所有者
    if (product.adminId.toString() !== req.adminId) {
      return res.status(403).json({ message: "没有权限删除此商品" });
    }

    // 软删除：将状态改为 inactive
    product.status = "inactive";
    await product.save();

    res.status(200).json({ message: "商品已成功删除" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 上架商品
router.put("/:id/activate", verifyAdmin, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "商品未找到" });
    }

    // 验证是否为商品所有者
    if (product.adminId.toString() !== req.adminId) {
      return res.status(403).json({ message: "没有权限上架此商品" });
    }

    // 将状态改为 active
    product.status = "active";
    await product.save();

    res.status(200).json({ message: "商品已成功上架" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
