import mongoose from "mongoose";

const whychooseusSchema = new mongoose.Schema(
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
    bulletPoints: {
      type: [String],
      validate: {
        validator: function (value) {
          return value.length === 6;
        },
        message: "Exactly 6 bullet points are required",
      },
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

export const Why_choose = mongoose.model("Why_choose", whychooseusSchema);
