import { Mission } from "../models/Mission.model.js";
import fs, { existsSync } from "fs";
export const addMission = async (req, res) => {
  try {
    const { heading, description, menuId, status } = req.body;
    const isDataExist = await Mission.findOne();
    if (!isDataExist) {
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
          message: "Select File !!",
          success: false,
        });
      }

      const data = {
        heading,
        description,
        menuId,
        status,
        image: req.file.path,
      };
      const createdMission = await Mission.create(data);
      if (createdMission) {
        return res.status(200).json({
          message: "Added Mission",
          success: true,
          data: createdMission,
        });
      }
    } else {
      // Update existing mission ============================================ /////////////////////

      if (req.file) {
        // Delete old image
        console.log(isDataExist.image);
        if (isDataExist.image && fs.existsSync(isDataExist.image)) {
          fs.unlinkSync(isDataExist.image);
        }

        isDataExist.image = req.file.path;
      }
      isDataExist.heading = heading || isDataExist.heading;
      isDataExist.description = description || isDataExist.description;
      isDataExist.status = status || isDataExist.status;
      isDataExist.menuId = menuId || isDataExist.menuId;

      await isDataExist.save();

      return res.status(200).json({
        message: "Mission Updated Successfully",
        success: true,
        data: isDataExist,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
      success: false,
    });
  }
};
