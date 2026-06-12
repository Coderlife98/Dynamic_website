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
