import { Company } from "../models/Company.model.js";

export const updateDetails = async (req, res) => {
  try {
    const {
      name,
      mobile,
      facebook,
      instagram,
      linkdin,
      twitter,
      youtube,
      address,
      email,
    } = req.body;
    const data = {
      name,
      mobile,
      facebook,
      instagram,
      linkdin,
      twitter,
      youtube,
      address,
      email,
    };
    // const getCompany = await Company.find();
    // const updateRecord = await Company.updateOne(
    //   { _id: getCompany[0]._id },
    //   data,
    // );
    // if (updateRecord) {
    //   return res.status(200).json({
    //     message: "Updated Successfully",
    //     success: true,
    //     data: updateRecord,
    //   });
    // }
  } catch (error) {
    return res.status(404).jsson({
      message: error.message,
      success: false,
    });
  }
};

export const updateImages = async (req, res) => {
  try {
  } catch (error) {}
};
