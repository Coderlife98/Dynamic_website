import multer from "multer";

export const uploadErrorHandler = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({
        message: "Image must be less than 100KB",
        success: false,
      });
    }
  }

  if (err.message) {
    return res.status(400).json({
      message: err.message,
      success: false,
    });
  }
  next();
};
