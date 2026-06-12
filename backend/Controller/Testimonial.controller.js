import { Team } from "../models/Team.model.js";
import { Testimonial } from "../models/Testimonial.model.js";

export const addTestimonial = async (req, res) => {
  try {
    const { name, description, status, menuId } = req.body;
    if (!req.file) {
      return res.status(404).json({
        message: "Select Image !!",
        success: false,
      });
    }

    if (!name) {
      return res.status(404).json({
        message: "Enter Name !!",
        success: false,
      });
    }

    if (!description) {
      return res.status(404).json({
        message: "Enter Description !!",
        success: false,
      });
    }
    const data = {
      image: req.file.path,
      name,
      description,
      menuId,
      status,
    };

    const response = await Testimonial.create(data);
    if (response) {
      return res.status(201).json({
        success: true,
        message: "Testimonial added successfully",
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
