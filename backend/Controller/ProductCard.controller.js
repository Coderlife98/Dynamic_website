import mongoose from "mongoose";
import { ProductCard } from "../models/ProductCard.model.js";

export const addProductCard = async (req, res) => {
  try {
    const { name, price, description, discount_price, menuId, isActive } =
      req.body;
    if (!name) {
      return res.status(404).json({
        message: "Enter Name",
        success: false,
      });
    }
    if (!price) {
      return res.status(404).json({
        message: "Enter Price",
        success: false,
      });
    }
    if (!description) {
      return res.status(404).json({
        message: "Enter Description",
        success: false,
      });
    }
    if (!discount_price) {
      return res.status(404).json({
        message: "Enter Discount Price",
        success: false,
      });
    }

    if (!req.file) {
      return res.status(404).json({
        message: "Select Image !!",
        success: false,
      });
    }
    const data = {
      image: req.file.path,
      name,
      price,
      description,
      discount_price,
      menuId,
      isActive,
    };
    const createProduct = await ProductCard.create(data);
    if (createProduct) {
      return res.status(200).json({
        message: "Product Added",
        success: true,
        data: createProduct,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
      success: false,
    });
  }
};

export const getProduct = async (req, res) => {
  try {
    const getProductData = await ProductCard.find();
    if (getProductData.length === 0) {
      return res.status(404).json({
        message: "Empty Product",
        success: false,
        data: getProductData,
      });
    } else {
      return res.status(200).json({
        message: "Get Product",
        data: getProductData,
        success: true,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
      error: error.message,
    });
  }
};

export const deleteProductById = async (req, res) => {
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        message: "Invalid Id",
        success: false,
      });
    }

    const getDataDb = await ProductCard.findById(id);
    if (!getDataDb) {
      return res.status(404).json({
        message: "Data not Exist On DB",
        success: false,
      });
    }

    const deleteById = await ProductCard.findByIdAndDelete(id);
    if (deleteById) {
      return res.status(200).json({
        message: "Data Deleted",
        success: true,
        data: deleteById,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
      error: error.message,
    });
  }
};
