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
