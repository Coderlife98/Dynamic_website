import mongoose from "mongoose";

const sliderSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      require: true,
    },
    text: {
      type: String,
      require: true,
    },
    slug: {
      type: String,
      require: true,
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

const Slider = await mongoose.model("Slider", sliderSchema);
export default Slider;
