import { News } from "../models/News.model.js";

export const addNews = async (req, res) => {
  try {
    const { title, menuId } = req.body;
    if (!title) {
      return res.status(404).json({
        message: "Enter Title for Blog !!",
        success: false,
      });
    }

    const data = {
      title,
      menuId,
    };

    const response = await News.create(data);
    if (response) {
      return res.status(201).json({
        message: "Successfully Added News",
        success: true,
        data: response,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};
