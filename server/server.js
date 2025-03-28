import express from "express";
import cors from "cors";
import productRoutes from "./routes/product.js";
import adminRoutes from "./routes/admin.js";
import orderRoutes from "./routes/order.js";
import dotenv from "dotenv";
import connectDB from "./db/connection.js";
import userRoutes from "./routes/user.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/product", productRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
