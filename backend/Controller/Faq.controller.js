import { Faq } from "../models/Faq.model.js";

export const addFaq = async (req, res) => {
  try {
    const { title, description, status, menuId } = req.body;
    if (!title) {
      return res.status(404).json({
        message: "Enter Title for Blog !!",
        success: false,
      });
    }

    if (!description) {
      return res.status(404).json({
        message: "Enter Description for Blog !!",
        success: false,
      });
    }

    const data = {
      title,
      description,
      status,
      menuId,
    };

    const response = await Faq.create(data);
    if (response) {
      return res.status(201).json({
        message: "Successfully Added Faq",
        success: true,
        data: response,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getFaq = async (req, res) => {
  try {
    const getData = await Faq.find();
    if (getData) {
      return res.status(200).json({
        message: "Get Faq Data",
        success: true,
        data: getData,
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Error while accessing Faq",
      success: false,
    });
  }
};
