import multer from "multer";
import fs from "fs";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    const folder = req.params.folder || "others";
    const uploadPath = `./uploads/${folder}`;
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/png", "image/jpg", "imaage/webp", "image/jpeg"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only PNG, JPEG, JPEG, WEBP Files are allowed"), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fieldSize: 100 * 1024,
  },
});

export default upload;
