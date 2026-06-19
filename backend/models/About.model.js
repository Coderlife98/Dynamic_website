import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema(
  {
    image_1: {
      type: String,
      required: true,
    },
    image_2: {
      type: String,
    },
    heading: {
      type: String,
      required: true,
    },
    subheading: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    menuId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Menu",
      default: null,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

export const About = mongoose.model("About", aboutSchema);
