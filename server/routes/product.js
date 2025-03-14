import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

router.post("/add", async (req, res) => {
    try {
        const { name, price, description, image } = req.body;
        const product = new Product({ name, price, description, image });
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "商品未找到" });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const { name, price, description, image } = req.body;
        const product = await Product.findByIdAndUpdate(req.params.id, { name, price, description, image });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}); 

// 获取商品统计
router.get("/stats", async (req, res) => {
    try {
      const products = await Product.find().select('name views comments');
      // 随机选择3个商品
      const randomProducts = products
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
        .map(product => ({
          productName: product.name,
          views: product.views || Math.floor(Math.random() * 1000), // 如果没有views字段则随机生成
          comments: product.comments || Math.floor(Math.random() * 100) // 如果没有comments字段则随机生成
        }));
      
      res.status(200).json(randomProducts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

export default router;
