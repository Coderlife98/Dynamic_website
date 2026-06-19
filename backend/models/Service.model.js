import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    heading: {
      type: String,
      required: true,
    },
    subHeading: {
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

export const Service = mongoose.model("Service", serviceSchema);
