import { Vision } from "../models/Vision.model.js";
import fs from "fs";
export const operationVision = async (req, res) => {
  try {
    const { heading, status, menuId, description } = req.body;
    const getData = await Vision.findOne();
    if (!getData) {
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
        status,
        menuId,
        description,
      };

      const addVision = await Vision.create(data);
      if (addVision) {
        return res.status(200).json({
          message: "Added Vision",
          success: true,
          data: addVision,
        });
      }
    } else {
      if (req.file) {
        if (getData.image && fs.existsSync(getData.image)) {
          fs.unlinkSync(getData.image);
        }
        getData.image = req.file.path;
      }

      getData.heading = heading || getData.heading;
      getData.description = description || getData.description;
      getData.status = status || getData.status;

      await getData.save();
      return res.status(200).json({
        message: "Vision Updated",
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

export const getVision = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
      success: false,
    });
  }
};
