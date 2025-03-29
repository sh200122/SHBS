import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  orderNo: {
    type: String,
    required: true,
    unique: true
  },
  status: {
    type: String,
    enum: ['待付款', '待发货', '已发货', '已完成', '已取消'],
    default: '待付款'
  },
  totalAmount: {
    type: Number,
    required: true
  },
  createTime: {
    type: Date,
    default: Date.now
  },
  buyerInfo: {
    name: { type: String, required: true },
    phone: { type: String, required: true }
  },
  products: [{
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true }
  }]
});

// 生成订单号的静态方法
orderSchema.statics.generateOrderNo = async function() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  const orderNo = `ORD${year}${month}${day}${random}`;
  return orderNo;
};

const Order = mongoose.model("Order", orderSchema);

export default Order;