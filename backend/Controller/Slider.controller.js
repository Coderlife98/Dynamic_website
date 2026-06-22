import mongoose from "mongoose";
import Slider from "../models/Slider.model.js";
import fs from "fs";
export const createSlider = async (req, res) => {
  try {
    const { heading, subtitle, slug, menuId, isActive } = req.body;
    if (!req.file) {
      return res.status(404).json({
        message: "Select image !!!",
        success: false,
      });
    }
    if (!heading) {
      return res.status(404).json({
        message: "Enter Heading !!!",
        success: false,
      });
    }
    if (!slug) {
      return res.status(404).json({
        message: "Enter Link !!!",
        success: false,
      });
    }

    if (!menuId) {
      return res.status(404).json({
        message: "Enter Menu Link !!!",
        success: false,
      });
    }
    const data = {
      heading,
      slug,
      subtitle,
      menuId,
      isActive,
      image: req.file.path,
    };

    const response = await Slider.create(data);
    if (response) {
      res.status(200).json({
        success: true,
        data: response,
        message: "Slider Added Successfully !!",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

export const getSlider = async (req, res) => {
  try {
    const getData = await Slider.find();
    if (getData) {
      return res.status(200).json({
        message: "Get Slider Data",
        success: true,
        data: getData,
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Error while accessing slider",
      success: false,
      error: error.message,
    });
  }
};

export const getSliderById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        message: "Invalid Id",
        success: false,
      });
    }

    const getSliders = await Slider.find({
      menuId: id,
    });

    return res.status(200).json({
      message: "Get Data",
      data: getSliders,
      success: true,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error while accessing slider",
      success: false,
      error: error.message,
    });
  }
};

export const deleteSliderById = async (req, res) => {
  const id = req.params.id;
  try {
    const deleteSlider = await Slider.findByIdAndDelete(id);
    if (deleteSlider) {
      return res.status(200).json({
        message: "Slider Deleted !!",
        success: true,
        data: deleteSlider,
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Error while Deleting slider",
      success: false,
      error: error.message,
    });
  }
};

export const updateSliderById = async (req, res) => {
  try {
    const { heading, subtitle, slug, isActive, categories } = req.body;
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        message: "Invalid Id",
        success: false,
      });
    }

    const getData = await Slider.findById(id);
    if (!getData) {
      return res.status(404).json({
        message: "Data not exist",
        success: false,
      });
    }

    if (req.file) {
      if (getData?.image && fs.existsSync(getData?.image)) {
        fs.unlinkSync(getData?.image);
      }

      getData.image = req.file.path;
    }

    getData.heading = heading || getData.heading;
    getData.subtitle = subtitle || getData.subtitle;
    getData.slug = slug || getData.slug;
    getData.categories = categories || getData.categories;
    getData.isActive = isActive || getData.isActive;

    await getData.save();

    return res.status(200).json({
      message: "Updated Succesfully",
      success: true,
      data: getData,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      message: "Error While Updating Slider !!",
      success: false,
      error: error,
    });
  }
};
