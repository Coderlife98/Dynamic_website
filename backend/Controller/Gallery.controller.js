import { Gallery } from "../models/Gallery.model.js";

export const addGallery = async (req, res) => {
  try {
    const { status, menuId, category } = req.body;
    if (!req.file) {
      return res.status(404).json({
        message: "Select image !!!",
        success: false,
      });
    }

    if (!category) {
      return res.status(404).json({
        message: "Enter Category !!!",
        success: false,
      });
    }

    const data = {
      image: req.file.path,
      status,
      category,
      menuId,
    };

    const response = await Gallery.create(data);
    if (response) {
      return res.status(200).json({
        message: "Added Gallery Image !!",
        success: true,
        data: response,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

export const getGallery = async (req, res) => {
  try {
    const getData = await Gallery.find();
    if (getData) {
      return res.status(200).json({
        message: "Get Gallery Data",
        success: true,
        data: getData,
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Error while accessing Gallery",
      success: false,
    });
  }
};
