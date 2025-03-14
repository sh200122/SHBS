import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    adminId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin',
        required: [true, '商品必须属于某个管理员']
    },
    image: { 
        type: String, 
        required: [true, '请上传商品图片'] 
    },
    name: { 
        type: String, 
        required: [true, '请输入商品名称'] 
    },
    price: { 
        type: Number, 
        required: [true, '请输入商品价格'] 
    },
    description: { 
        type: String, 
        required: [true, '请输入商品描述'] 
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Product = mongoose.model("Product", productSchema);

export default Product;