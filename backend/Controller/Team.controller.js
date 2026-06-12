import { Team } from "../models/Team.model.js";

export const addTeam = async (req, res) => {
  try {
    const {
      name,
      designation,
      status,
      menuId,
      social_media,
      facebook,
      instagram,
      linkedin,
      twitter,
      youtube,
    } = req.body;
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

    if (!designation) {
      return res.status(404).json({
        message: "Enter Designation !!",
        success: false,
      });
    }
    const data = {
      image: req.file.path,
      name,
      designation,
      menuId,
      status,
      social_media: {
        facebook,
        instagram,
        linkedin,
        twitter,
        youtube,
      },
    };

    const response = await Team.create(data);
    if (response) {
      return res.status(201).json({
        success: true,
        message: "Team member added successfully",
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
