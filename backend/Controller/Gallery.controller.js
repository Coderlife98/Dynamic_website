import { Gallery } from "../models/Gallery.model.js";

export const addGallery = async (req, res) => {
  try {
    const { status, menuId } = req.body;
    if (!req.file) {
      return res.status(404).json({
        message: "Select image !!!",
        success: false,
      });
    }

    const data = {
      image: req.file.path,
      status,
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
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};
