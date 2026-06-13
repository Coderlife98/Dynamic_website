import { Blog } from "../models/Blog.model.js";

export const addBlog = async (req, res) => {
  try {
    const { title, description, status, menuId } = req.body;
    if (!req.file) {
      return res.status(404).json({
        message: "Select File !!",
        success: false,
      });
    }

    if (!title) {
      return res.status(404).json({
        message: "Enter Title for Blog !!",
        success: false,
      });
    }

    if (!description) {
      return res.status(404).json({
        message: "Enter Description for Blog !!",
        success: false,
      });
    }

    const data = {
      title,
      image: req.file.path,
      description,
      status,
      menuId,
    };

    const response = await Blog.create(data);
    if (response) {
      return res.status(201).json({
        message: "Successfully Added Blog",
        success: true,
        data: response,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getBlog = async (req, res) => {
  try {
    const getData = await Blog.find();
    if (getData) {
      return res.status(200).json({
        message: "Get Blog Data",
        success: true,
        data: getData,
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Error while accessing Blog",
      success: false,
    });
  }
};
