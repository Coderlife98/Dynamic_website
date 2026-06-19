import fs from "fs";
import { Partner } from "../models/partner.model.js";

export const operationPartner = async (req, res) => {
  try {
    const { heading, isActive, menuId } = req.body;
    const getPartner = await Partner.findOne();
    if (!getPartner) {
      if (!heading) {
        return res.status(404).json({
          message: "Enter Heading",
          success: false,
        });
      }

      if (!req.file) {
        return res.status(404).json({
          message: "Select Images",
          success: false,
        });
      }
      const data = {
        image: req.file.path,
        heading,
        menuId,
        isActive,
      };
      const createPartner = await Partner.create(data);
      if (createPartner) {
        return res.status(200).json({
          message: "Partner Added",
          success: true,
          data: createPartner,
        });
      }
    } else {
      if (req.file) {
        if (getPartner.image && fs.existsSync(getPartner.image)) {
          fs.unlinkSync(getPartner.image);
        }

        getPartner.image = req.file.path;
      }

      getPartner.heading = heading || getPartner.heading;
      getPartner.isActive = isActive || getPartner.isActive;

      await getPartner.save();

      return res.status(200).json({
        message: "Partner Updated Successfully",
        success: true,
        data: getPartner,
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

export const getPartner = async (req, res) => {
  try {
    const getData = await Partner.find();
    if (getData.length === 0) {
      return res.status(404).json({
        message: "Empty Data",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Get Data",
      success: true,
      data: getData,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
      success: false,
    });
  }
};
