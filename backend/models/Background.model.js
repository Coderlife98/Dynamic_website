import mongoose from "mongoose";

const backgroundSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    heading: {
      type: String,
      required: true,
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
    status: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

export const Background = mongoose.model("Background", backgroundSchema);
