import { Company } from "../models/Company.model.js";
import fs from "fs";

export const updateCompany = async (req, res) => {
  try {
    const {
      name,
      email,
      address,
      mobile,
      facebook,
      instagram,
      twitter,
      youtube,
      linkdin,
    } = req.body;

    const newLogo = req.files?.logo?.[0]?.path;
    const newFavicon = req.files?.favicon?.[0]?.path;

    // Get existing company document
    const company = await Company.findOne({});

    const data = {
      name,
      email,
      address,
      mobile,
      facebook,
      instagram,
      twitter,
      youtube,
      linkdin,
    };

    // Handle logo update
    if (newLogo) {
      if (company?.logo && fs.existsSync(company.logo)) {
        fs.unlinkSync(company.logo);
      }
      data.logo = newLogo;
    }

    // Handle favicon update
    if (newFavicon) {
      if (company?.favicon && fs.existsSync(company.favicon)) {
        fs.unlinkSync(company.favicon);
      }
      data.favicon = newFavicon;
    }

    let updated;

    // If company document already exists → update it
    if (company) {
      updated = await Company.findOneAndUpdate(
        {},
        { $set: data },
        { new: true },
      );
    }
    // If no document exists → create one
    else {
      updated = await Company.create(data);
    }

    return res.status(200).json({
      message: company
        ? "Company Updated Successfully"
        : "Company Created Successfully",
      success: true,
      data: updated,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

export const getData = async (req, res) => {
  try {
    const response = await Company.find();
    if (response) {
      return res.status(200).json({
        message: "Get Data",
        success: true,
        data: response,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

export const getLogo = async (req, res) => {
  try {
    const response = await Company.findOne().select("logo favicon");
    if (response) {
      return res.status(200).json({
        message: "Get Logo",
        data: response,
        success: true,
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Error While Access Logo",
      success: false,
    });
  }
};
