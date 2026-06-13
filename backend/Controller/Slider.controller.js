import Slider from "../models/Slider.model.js";

export const createSlider = async (req, res) => {
  try {
    const { text, slug, menuId } = req.body;
    if (!req.file) {
      return res.status(404).json({
        message: "Select image !!!",
        success: false,
      });
    }
    if (!text) {
      return res.status(404).json({
        message: "Enter Heading !!!",
        success: false,
      });
    }
    if (!slug) {
      return res.status(404).json({
        message: "Enter Link !!!",
        success: false,
      });
    }

    if (!menuId) {
      return res.status(404).json({
        message: "Enter Menu Link !!!",
        success: false,
      });
    }
    const data = {
      text,
      slug,
      menuId,
      image: req.file.path,
    };

    const response = await Slider.create(data);
    if (response) {
      res.status(200).json({
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

export const getSlider = async (req, res) => {
  try {
    const getData = await Slider.find();
    if (getData) {
      return res.status(200).json({
        message: "Get Slider Data",
        success: true,
        data: getData,
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Error while accessing slider",
      success: false,
    });
  }
};
