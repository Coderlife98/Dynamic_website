// models/Menu.js

import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  path: {
    type: String,
    required: true
  },

  parentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Menu",
    default: null
  },

  order: {
    type: Number,
    default: 0
  },

  isActive: {
    type: Boolean,
    default: true
  }

}, { timestamps: true });

export default mongoose.model("Menu", menuSchema);