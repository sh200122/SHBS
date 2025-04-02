import express from "express";
import Order from "../models/Order.js";
import Product from "../models/Product.js";
import { auth } from "../middleware/auth.js";

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

// 创建订单
router.post("/create", auth, async (req, res) => {
  try {
    const { products } = req.body;

    // 验证请求数据
    if (!Array.isArray(products) || products.length === 0) {
      return res.status(400).json({
        success: false,
        message: "商品数据格式错误",
      });
    }

    // 获取所有产品信息
    const productIds = products.map((p) => p.productId);
    const productDetails = await Product.find({ _id: { $in: productIds } });

    if (productDetails.length === 0) {
      return res.status(404).json({
        success: false,
        message: "商品不存在",
      });
    }

    // 生成订单号基础部分
    const baseOrderNo = await Order.generateOrderNo();

    // 计算总金额并为每个商品创建独立订单
    const orderPromises = products.map(async (orderProduct, index) => {
      const productDetail = productDetails.find(
        (p) => p._id.toString() === orderProduct.productId
      );

      const orderNo = `${baseOrderNo}-${index + 1}`; // 为每个商品生成唯一订单号
      const totalAmount = productDetail.price * orderProduct.quantity;

      const order = new Order({
        orderNo,
        productId: productDetail._id,
        quantity: orderProduct.quantity,
        name: productDetail.name,
        adminId: productDetail.adminId,
        status: "待发货",
        totalAmount,
        userId: req.user._id,
      });

      return order.save();
    });

    // 等待所有订单创建完成
    const savedOrders = await Promise.all(orderPromises);

    res.status(200).json({
      success: true,
      orders: savedOrders.map((order) => order._id),
      message: "订单创建成功",
    });
  } catch (error) {
    console.error("创建订单错误:", error);
    res.status(500).json({
      success: false,
      message: "订单创建失败",
      error: error.message,
    });
  }
});

// 获取订单列表
router.get("/", verifyAdmin, async (req, res) => {
  try {
    const orders = await Order.find({ adminId: req.adminId }).sort({
      createTime: -1,
    });
    res.status(200).json({
      success: true,
      data: orders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "获取订单列表失败",
      error: error.message,
    });
  }
});

// 获取用户订单列表
router.get("/user", auth, async (req, res) => {
  try {
    // 从auth中间件获取用户ID
    const userId = req.user._id;

    // 查询该用户的所有订单
    const orders = await Order.find({ userId }).sort({
      createTime: -1,
    });

    res.status(200).json({
      success: true,
      data: orders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "获取订单列表失败",
      error: error.message,
    });
  }
});

// 发货处理
router.put("/:id/ship", verifyAdmin, async (req, res) => {
  try {
    const orderId = req.params.id;

    // 查找订单
    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "订单不存在",
      });
    }

    // 验证是否是该管理员的订单
    if (order.adminId.toString() !== req.adminId) {
      return res.status(403).json({
        success: false,
        message: "无权操作此订单",
      });
    }

    // 验证订单状态
    if (order.status !== "待发货") {
      return res.status(400).json({
        success: false,
        message: "只能发货处于待发货状态的订单",
      });
    }

    // 更新订单状态 - 使用findByIdAndUpdate而不是save()
    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { status: "待收货" },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "发货成功",
      data: updatedOrder,
    });
  } catch (error) {
    console.error("发货错误:", error);
    res.status(500).json({
      success: false,
      message: "发货失败",
      error: error.message,
    });
  }
});

// 确认收货
router.put("/:id/confirm", auth, async (req, res) => {
  try {
    const orderId = req.params.id;
    const userId = req.user._id;

    // 查找订单
    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "订单不存在",
      });
    }

    // 验证是否是该用户的订单
    if (order.userId.toString() !== userId.toString()) {
      return res.status(403).json({
        success: false,
        message: "无权操作此订单",
      });
    }

    // 验证订单状态
    if (order.status !== "待收货") {
      return res.status(400).json({
        success: false,
        message: "只能确认收货处于待收货状态的订单",
      });
    }

    // 更新订单状态
    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { status: "已完成" },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "确认收货成功",
      data: updatedOrder,
    });
  } catch (error) {
    console.error("确认收货错误:", error);
    res.status(500).json({
      success: false,
      message: "确认收货失败",
      error: error.message,
    });
  }
});

// 取消订单
router.put("/:id/cancel", auth, async (req, res) => {
  try {
    const orderId = req.params.id;
    const userId = req.user._id;

    // 查找订单
    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "订单不存在",
      });
    }

    // 验证是否是该用户的订单
    if (order.userId.toString() !== userId.toString()) {
      return res.status(403).json({
        success: false,
        message: "无权操作此订单",
      });
    }

    // 验证订单状态 - 待发货和待收货状态都可以取消
    if (order.status !== "待发货" && order.status !== "待收货") {
      return res.status(400).json({
        success: false,
        message: "只能取消待发货或待收货状态的订单",
      });
    }

    // 更新订单状态
    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { status: "已取消" },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "取消订单成功",
      data: updatedOrder,
    });
  } catch (error) {
    console.error("取消订单错误:", error);
    res.status(500).json({
      success: false,
      message: "取消订单失败",
      error: error.message,
    });
  }
});

export default router;
