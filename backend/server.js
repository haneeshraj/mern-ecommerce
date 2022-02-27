import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use("/api/products", productRoutes);

app.use(notFound);

app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || PORT;

app.listen(
  5000,
  console.log(
    `Server is connected to port ${PORT} in ${process.env.NODE_ENV} mode`.yellow
      .bold
  )
);