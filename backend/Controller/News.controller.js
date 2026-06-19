import { News } from "../models/News.model.js";

export const addNews = async (req, res) => {
  try {
    const { title, menuId, category, isActive } = req.body;
    if (!title) {
      return res.status(404).json({
        message: "Enter News !!",
        success: false,
      });
    }
    if (!category) {
      return res.status(404).json({
        message: "Enter category  !!",
        success: false,
      });
    }

    const data = {
      title,
      menuId,
      isActive,
      category,
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

export const getNews = async (req, res) => {
  try {
    const getData = await News.find();
    if (getData) {
      return res.status(200).json({
        message: "Get News Data",
        success: true,
        data: getData,
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Error while accessing News",
      success: false,
    });
  }
};
