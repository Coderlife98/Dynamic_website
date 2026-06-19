import { Team } from "../models/Team.model.js";
import { Testimonial } from "../models/Testimonial.model.js";

export const addTestimonial = async (req, res) => {
  try {
    const { name, description, isActive, menuId, category } = req.body;
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

    if (!category) {
      return res.status(404).json({
        message: "Enter Category !!",
        success: false,
      });
    }
    const data = {
      image: req.file.path,
      name,
      description,
      menuId,
      category,
      isActive,
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

export const getTestimonial = async (req, res) => {
  try {
    const getData = await Testimonial.find();
    if (getData) {
      return res.status(200).json({
        message: "Get Testimonial Data",
        success: true,
        data: getData,
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Error while accessing Testimonial",
      success: false,
    });
  }
};
