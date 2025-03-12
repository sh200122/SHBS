/*
 * @Author: alan alan.shi@duomai.com
 * @Date: 2025-03-06 15:04:03
 * @LastEditors: alan alan.shi@duomai.com
 * @LastEditTime: 2025-03-06 16:57:40
 * @FilePath: \next-example\server\server.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import express from "express";
import cors from "cors";
import productRoutes from "./routes/product.js";
import adminRoutes from "./routes/admin.js";
import dotenv from "dotenv";
import connectDB from "./db/connection.js";
import uploadRouter from './routes/upload.js';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

connectDB();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(cors());
app.use(express.json());

app.use("/api/product", productRoutes);
app.use("/api/admin", adminRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));
app.use('/api/upload', uploadRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



