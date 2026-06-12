import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
      default: Date.now,
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

export const Blog =  mongoose.model("Blog", blogSchema);
