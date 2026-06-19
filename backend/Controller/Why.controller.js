import { Why_choose } from "../models/Why.model.js";
import fs from "fs";
export const operationWhy = async (req, res) => {
  try {
    const { heading, description, status, menuId } = req.body;
    const isExistData = await Why_choose.findOne();
    if (!isExistData) {
      if (!heading) {
        return res.status(404).json({
          message: "Enter Heading !!",
          success: false,
        });
      }

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
        image: req.file.path,
        heading,
        description,
        status,
        menuId,
      };

      const InsertWhy = await Why_choose.create(data);
      if (InsertWhy) {
        return res.status(200).json({
          message: "Added Why Choose Us",
          success: true,
          data: InsertWhy,
        });
      }
    } else {
      if (req.file) {
        if (isExistData.image && fs.existsSync(isExistData.image)) {
          fs.unlinkSync(isExistData.image);
        }

        isExistData.image = req.file.path;
      }

      isExistData.heading = heading || isExistData.heading;
      isExistData.description = description || isExistData.description;
      isExistData.status = status || isExistData.status;

      await isExistData.save();
      return res.status(200).json({
        message: "Updated Why Choose Us !!",
        success: true,
        data: isExistData,
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

export const getWhy_choose = async (req, res) => {
  try {
    const getData = await Why_choose.find();
    if (getData) {
      return res.status(200).json({
        message: "Get Why Choose Us Data",
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
