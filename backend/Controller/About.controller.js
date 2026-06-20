import path from "path";
import { About } from "../models/About.model.js";
import fs from "fs";
export const addAbout = async (req, res) => {
  try {
    const { heading, subheading, description, menuId, isActive } = req.body;
    const getAbout = await About.findOne();

    const image_1 = req.files?.image_1?.[0].path;
    const image_2 = req.files?.image_2?.[0].path || null;

    if (!getAbout) {
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

      if (!image_1) {
        return res.status(400).json({
          message: "Please Select Image !!",
          success: false,
        });
      }

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
    } else {
      if (image_1) {
        if (getAbout.image_1 && fs.existsSync(getAbout.image_1)) {
          fs.unlinkSync(getAbout.image_1);
        }
        getAbout.image_1 = req.file.path;
      }

      if (image_2) {
        if (getAbout.image_2 && fs.existsSync(getAbout.image_2)) {
          fs.unlinkSync(getAbout.image_2);
        }
        getAbout.image_2 = req.file.path;
      }

      getAbout.heading = heading || getAbout.heading;
      getAbout.description = description || getAbout.description;
      getAbout.subheading = subheading || getAbout.subheading;
      getAbout.isActive = isActive || getAbout.isActive;

      await getAbout.save();
      return res.status(200).json({
        message: "Updated Data Successfully",
        success: true,
        data: getAbout,
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
    const getData = await About.findOne();
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
