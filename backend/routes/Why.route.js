import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import { uploadErrorHandler } from "../middleware/uploadErrorHandler.js";
import { getWhy_choose, operationWhy } from "../Controller/Why.controller.js";
const router = express.Router();

router.post(
  "/:folder/add",
  upload.single("image"),
  uploadErrorHandler,
  operationWhy,
);

router.get("/get", getWhy_choose);
export default router;
