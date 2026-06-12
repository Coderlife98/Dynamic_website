import mongoose from "mongoose";

const teamSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    menuId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Menu",
      default: null,
    },
    social_media: {
      facebook: String,
      instagram: String,
      linkedin: String,
      twitter: String,
      youtube: String,
    },
    status: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

export const Team = await mongoose.model("Team", teamSchema);
