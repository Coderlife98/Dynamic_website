import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  facebook: {
    type: String,
    default: null,
  },
  instagram: {
    type: String,
    default: null,
  },
  twitter: {
    type: String,
    default: null,
  },
  youtube: {
    type: String,
    default: null,
  },
  linkdin: {
    type: String,
    default: null,
  },
  logo: {
    type: String,
    required: true,
  },
  favicon: {
    type: String,
    required: true,
  },
});

export const Company = mongoose.model("Company", companySchema);
