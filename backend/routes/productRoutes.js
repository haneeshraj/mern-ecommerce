import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();

import Product from "../models/productModel.js";
import {
  getProducts,
  getProductById,
} from "../controllers/productController.js";

// @desc    Fetch All Products
// @route   GET /api/products
// @access  Public

router.route("/").get(getProducts);

// @desc    Fetch Single Product
// @route   GET /api/products/:id
// @access  Public

router.route("/:id").get(getProductById);

export default router;
