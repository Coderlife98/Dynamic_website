import mongoose from "mongoose";
import Menu from "../models/Menu.model.js";

export const createMenu = async (req, res) => {
  try {
    const menu = await Menu.create(req.body);
    res.status(201).json({
      success: true,
      menu,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getMenu = async (req, res) => {
  try {
    const menus = await Menu.find().sort({ order: 1 });
    res.status(200).json({
      message: "get menu",
      success: true,
      menu: menus,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getMenuId = async (req, res) => {
  try {
    const path = `/${req.params.path}`;
    const menu = await Menu.findOne({ path });
    if (!menu) {
      return res.status(404).json({
        message: "Error while Access Path !!",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Access Menu Data",
      success: true,
      data: menu,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error while ACCESS MENU By Id",
      success: false,
    });
  }
};

export const editMenuById = async (req, res) => {
  try {
    const { title, order } = req.body;
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        message: "Invalid Id",
        success: false,
      });
    }

    const isMenuExist = await Menu.findById(id);

    if (!isMenuExist) {
      return res.status(404).json({
        message: "Data not Exist On DB !!",
        success: false,
      });
    }
    const response = await Menu.findByIdAndUpdate(
      id,
      { title: title, order: order },
      { new: true },
    );
    return res.status(200).json({
      message: "Updated Menu Name",
      success: true,
      data: response,
    });
  } catch (error) {
    return res.status(404).json({
      message: error.message,
      success: false,
    });
  }
};

export const deleteById = async (req, res) => {
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        message: "Invalid Id",
        success: false,
      });
    }

    const isMenuExist = await Menu.findById(id);
    if (!isMenuExist) {
      return res.status(404).json({
        message: "Data not exits on DB !!",
        success: false,
      });
    }

    const response = await Menu.findByIdAndDelete(id);
    if (response) {
      return res.status(404).json({
        message: "Deleted Successfully",
        success: true,
        data: response,
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: error.message,
      success: false,
    });
  }
};
