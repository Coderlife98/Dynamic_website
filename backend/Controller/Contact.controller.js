import mongoose from "mongoose";
import { Contact } from "../models/Contact.model.js";

export const addContact = async (req, res) => {
  try {
    const { name, emailId, mobile, subject, menuId, message } = req.body;

    if (!name) {
      return res.status(404).json({
        message: "Enter Name !!",
        success: false,
      });
    }

    if (!emailId) {
      return res.status(404).json({
        message: "Enter Email !!",
        success: false,
      });
    }

    if (!mobile) {
      return res.status(404).json({
        message: "Enter Mobile !!",
        success: false,
      });
    }

    if (!message) {
      return res.status(404).json({
        message: "Enter Message !!",
        success: false,
      });
    }

    const data = {
      name,
      emailId,
      mobile,
      subject,
      menuId,
      message,
    };

    const createdContact = await Contact.create(data);
    if (createdContact) {
      return res.status(200).json({
        message: "Added Enquiry Data",
        success: false,
        data: createdContact,
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

export const getContact = async (req, res) => {
  try {
    const getContactList = await Contact.find();
    if (getContactList) {
      return res.status(200).json({
        message: "Get Enquiry Data",
        success: true,
        data: getContactList,
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

export const deleteEnquiryById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        message: "Invalid Id",
        success: false,
      });
    }

    const getData = await Contact.findById(id);

    if (!getData) {
      return res.status(404).json({
        success: false,
        message: "Data not Exist in DB",
      });
    }
    const deleteData = await Contact.findByIdAndDelete(id);
    if (deleteData) {
      return res.status(200).json({
        success: true,
        message: "Enquiry Deleted",
        data: deleteData,
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
