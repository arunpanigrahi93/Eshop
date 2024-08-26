import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // Import CORS middleware
import productRoutes from "./routes/productRoutes.js";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

const port = process.env.PORT || 5000;

connectDB(); // Connect to MongoDB

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Use CORS middleware
app.use(cors());

app.get("/", (req, res) => {
  res.send("Api is running...");
});

app.use("/api/products", productRoutes);

// Not Found and Error Handling Middlewares
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`server running on port ${port}`));
