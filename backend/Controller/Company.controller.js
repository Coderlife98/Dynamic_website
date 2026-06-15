import { Company } from "../models/Company.model.js";

export const updateCompany = async (req, res) => {
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
      logo,
      favicon,
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
      logo,
      favicon,
    };

    const updated = await Company.findOneAndUpdate(
      {},
      { $set: data },
      { new: true },
    );

    return res.status(200).json({
      message: "Updated Successfully",
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
