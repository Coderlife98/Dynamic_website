import express from "express";
import { updateCompany } from "../Controller/Company.controller.js";
import upload from "../middleware/uploadMiddleware.js";
import { uploadErrorHandler } from "../middleware/uploadErrorHandler.js";
const router = express.Router();

router.patch(
  "/basic_detail",
  upload.fields([
    { name: "logo", maxCount: 1 },
    { name: "favicon", maxCount: 1 },
  ]),
  updateCompany,
  uploadErrorHandler,
);

export default router;
