import mongoose from "mongoose";

const faqSchema = new mongoose.Schema({
  title: {
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
  isActive: {
    type: Boolean,
    default: false,
  },
});

export const Faq = await mongoose.model("Faq", faqSchema);
