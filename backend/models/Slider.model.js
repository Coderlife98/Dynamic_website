import mongoose from "mongoose";

const sliderSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      require: true,
    },
    heading: {
      type: String,
      require: true,
    },
    subtitle: {
      type: String,
    },
    slug: {
      type: String,
      require: true,
    },
    categories: {
      type: String,
      default: "",
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

const Slider = await mongoose.model("Slider", sliderSchema);
export default Slider;
