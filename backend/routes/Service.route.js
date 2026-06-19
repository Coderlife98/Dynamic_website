import express from "express";
import { getService, operationService } from "../Controller/Service.controller.js";
import upload from "../middleware/uploadMiddleware.js";
import { uploadErrorHandler } from "../middleware/uploadErrorHandler.js";
const router = express.Router();

router.post(
  "/:folder/add",
  upload.single("image"),
  uploadErrorHandler,
  operationService,
);

router.get("/get", getService);

export default router;
