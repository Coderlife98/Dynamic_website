import path from "path";
import { About } from "../models/About.model.js";
import fs from "fs";
export const addAbout = async (req, res) => {
  try {
    const { heading, subheading, description, menuId, isActive } = req.body;

    if (!heading) {
      return res.status(400).json({
        message: "Enter Heading!!",
        success: false,
      });
    }

    if (!description) {
      return res.status(400).json({
        message: "Enter Description!!",
        success: false,
      });
    }

    const image_1 = req.files?.image_1?.[0].path;
    const image_2 = req.files?.image_2?.[0].path || null;

    if (!image_1) {
      return res.status(404).json({
        message: "Please Select Image !!",
        success: false,
      });
    }
    const data = {
      heading,
      subheading,
      description,
      menuId,
      isActive,
      image_1,
      image_2,
    };
    const response = await About.create(data);
    if (response) {
      return res.status(202).json({
        message: "Added Data Successfully",
        success: true,
        data: response,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Error while Add Data",
      error: error.message,
      success: false,
    });
  }
};

export const getData = async (req, res) => {
  try {
    const getData = await About.find();
    if (!getData) {
      return res.status(404).json({
        message: "Data not Available",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Access Data",
      data: getData,
      success: true,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error while Accessing Data",
      error: error.message,
      success: true,
    });
  }
};
