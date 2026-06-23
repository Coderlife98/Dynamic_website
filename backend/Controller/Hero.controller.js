import mongoose from "mongoose";
import { Hero } from "../models/Hero.model.js";

export const AddHero = async (req, res) => {
  try {
    const { title, category, menuId, isActive } = req.body;
    if (!req.file) {
      return res.status(404).json({
        message: "Select Image !!",
        success: false,
      });
    }
    if (!category) {
      return res.status(404).json({
        message: "Enter Category !!",
        success: false,
      });
    }

    const data = {
      title,
      category,
      menuId,
      isActive,
      image: req.file.path,
    };
    const response = await Hero.create(data);
    if (response) {
      return res.status(200).json({
        message: "Added Successfully !!",
        success: true,
        data: response,
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Error Occur While Creating images !!",
      success: false,
    });
  }
};

export const getHero = async (req, res) => {
  try {
    const getData = await Hero.find();
    if (!getData) {
      return res.status(404).json({
        message: "Error while Find data !!",
        success: false,
      });
    } else {
      return res.status(200).json({
        message: "get Hero Banner !!",
        success: true,
        data: getData,
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "get Hero Banner !!",
      error: error.message,
      success: false,
    });
  }
};

export const getHeroById = async (req, res) => {
  try {
    const id = req.params.id;
    if (mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        message: "Invalid Id",
        success: false,
      });
    }
    const getData = await Hero.findById(id);
    if (getData) {
      return res.status(200).json({
        message: "Get Data",
        success: true,
        data: getData,
      });
    } else {
      return res.status(404).json({
        message: "Data not Exist On DB",
        success: false,
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Error Occur While get Data By ID",
      success: false,
      error: error.message,
    });
  }
};

export const deleteById = async (req, res) => {
  try {
    const id = req.params.id;
    if (mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        message: "Invalid Id",
        success: false,
      });
    }

    const getData = await Hero.findById(id);
    if (getData) {
      const deleteById = await Hero.findByIdAndDelete(id);
      if (deleteById) {
        return res.status(200).json({
          message: "Data Deleted Successfully",
          success: true,
        });
      }
    } else {
      return res.status(404).json({
        message: "Data not Exist on DB",
        success: false,
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Error Occur While Deleting Data By ID",
      success: false,
      error: error.message,
    });
  }
};
