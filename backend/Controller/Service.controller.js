import { Service } from "../models/Service.model.js";
import fs from "fs";
export const operationService = async (req, res) => {
  try {
    const { heading, subheading, description, menuId, isActive } = req.body;
    const findData = await Service.findOne();
    if (!findData) {
      if (!heading) {
        return res.status(404).json({
          message: "Enter Heading !!",
          success: false,
        });
      }

      // if (!subheading) {
      //   return res.status(404).json({
      //     message: "Enter Sub-Heading !!",
      //     success: false,
      //   });
      // }

      if (!description) {
        return res.status(404).json({
          message: "Enter Description !!",
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
        image: req.file.path,
        subheading,
        description,
        menuId,
        isActive,
      };
      const createService = await Service.create(data);
      if (createService) {
        return res.status(200).json({
          message: "Added Services",
          success: true,
          data: createService,
        });
      }
    } else {
      if (req.file) {
        if (findData.image && fs.existsSync(findData.image)) {
          fs.unlinkSync(findData.image);
        }

        findData.image = req.file.path;
      }

      findData.heading = heading || findData.heading;
      findData.subheading = subheading || findData.subheading;
      findData.description = description || findData.description;
      findData.isActive = isActive || findData.isActive;

      await findData.save();

      return res.status(200).json({
        message: "Updated Succesfully",
        success: true,
        data: findData,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
      error: error.message,
    });
  }
};

export const getService = async (req, res) => {
  try {
    const getData = await Service.find();
    if (getData) {
      return res.status(200).json({
        message: "Access Data",
        success: true,
        data: getData,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
      error: error.message,
    });
  }
};
