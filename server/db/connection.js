import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const URI = process.env.MONGODB_URI;
        await mongoose.connect(URI,{
            useNewUrlParser: true, //使用新的url解析器
            useUnifiedTopology: true, //使用新的拓扑结构
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB", error);
        process.exit(1); // 终止进程
    }
}

export default connectDB;