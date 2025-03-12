import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
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
});

const Product = mongoose.model("Product", productSchema);

export default Product;