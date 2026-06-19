import express from "express";
import {
  addProductCard,
  deleteProductById,
  getProduct,
} from "../Controller/ProductCard.controller.js";
import upload from "../middleware/uploadMiddleware.js";
import { uploadErrorHandler } from "../middleware/uploadErrorHandler.js";
const router = express.Router();

router.post(
  "/:folder/add",
  upload.single("image"),
  uploadErrorHandler,
  addProductCard,
);
router.get("/get", getProduct);

router.delete("/delete/:id", deleteProductById);

export default router;
