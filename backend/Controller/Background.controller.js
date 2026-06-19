import { Background } from "../models/Background.model.js";

export const addBackground = async (req, res) => {
  try {
    const { heading, description, status, menuId } = req.body;
    if (!heading) {
      return res.status(404).json({
        message: "Enter Heading",
        success: false,
      });
    }

    if (!description) {
      return res.status(404).json({
        message: "Enter Description",
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
      heading,
      description,
      status,
      menuId,
      image: req.file.path,
    };
    const createdBackground = await Background.create(data);
    if (createdBackground) {
      return res.status(200).json({
        message: "Added Background",
        success: true,
        data: createdBackground,
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

export const getBackground = async (req, res) => {
  try {
    const getData = await Background.find();
    if (getData) {
      return res.status(200).json({
        message: "Get Background Data",
        success: true,
        data: getData,
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
