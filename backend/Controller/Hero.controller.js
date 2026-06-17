import { Hero } from "../models/Hero.model.js";

export const AddHero = async (req, res) => {
  try {
    const { title, category, menuId } = req.body;
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
