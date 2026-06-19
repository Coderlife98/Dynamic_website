import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import { uploadErrorHandler } from "../middleware/uploadErrorHandler.js";
import { getPartner, operationPartner } from "../Controller/Our_Partner.controller.js";
const router = express.Router();

router.post(
  "/:folder/add",
  upload.single("image"),
  uploadErrorHandler,
  operationPartner,
);

router.get("/get", getPartner);

export default router;
