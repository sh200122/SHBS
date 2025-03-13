import express from "express";
import Order from "../models/Order.js";
import Product from "../models/Product.js";

const router = express.Router();

// 创建订单
router.post("/create", async (req, res) => {
    try {
      const { buyerInfo, products } = req.body;
      
      // 计算订单总金额
      let totalAmount = 0;
      const orderProducts = [];
      
      // 验证并处理商品信息
      for (const item of products) {
        const product = await Product.findById(item.productId);
        if (!product) {
          return res.status(404).json({ message: `商品 ${item.productId} 不存在` });
        }
        
        orderProducts.push({
          productId: product._id,
          name: product.name,
          price: product.price,
          quantity: item.quantity
        });
        
        totalAmount += product.price * item.quantity;
      }
  
      // 生成订单号
      const orderNo = await Order.generateOrderNo();
      
      // 创建订单
      const order = new Order({
        orderNo,
        buyerInfo,
        products: orderProducts,
        totalAmount,
        status: '待付款'
      });
      
      await order.save();
      res.status(201).json(order);
    } catch (error) {
      console.error('创建订单错误:', error);
      res.status(500).json({ message: error.message });
    }
  });

// 获取订单列表
router.get("/", async (req, res) => {
  try {
    const { status, startDate, endDate } = req.query;
    let query = {};
    
    // 根据状态筛选
    if (status) {
      query.status = status;
    }
    
    // 根据日期范围筛选
    if (startDate || endDate) {
      query.createTime = {};
      if (startDate) query.createTime.$gte = new Date(startDate);
      if (endDate) query.createTime.$lte = new Date(endDate);
    }
    
    const orders = await Order.find(query).sort({ createTime: -1 });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 获取订单详情
router.get("/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "订单不存在" });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 更新订单状态
router.put("/:id/status", async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findById(req.params.id);
    
    if (!order) {
      return res.status(404).json({ message: "订单不存在" });
    }
    
    // 验证状态转换的合法性
    const validStatusTransitions = {
      '待付款': ['已取消', '待发货'],
      '待发货': ['已发货', '已取消'],
      '已发货': ['已完成', '已取消'],
      '已完成': [],
      '已取消': []
    };
    
    if (!validStatusTransitions[order.status].includes(status)) {
      return res.status(400).json({ message: "非法的状态转换" });
    }
    
    order.status = status;
    await order.save();
    
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;