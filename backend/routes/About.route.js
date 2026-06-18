import express from "express";
import {
  addAbout,
  getData,
} from "../Controller/About.controller.js";
import { uploadErrorHandler } from "../middleware/uploadErrorHandler.js";
import upload from "../middleware/uploadMiddleware.js";
const router = express.Router();

router.post(
  "/:folder/add",
  upload.fields([
    { name: "image_1", maxCount: 1 },
    { name: "image_2", maxCount: 1 },
  ]),
  uploadErrorHandler,
  addAbout,
);

// +++++++++++++++++++++++=Get +++++++++++++++++++++++++++++==+++==
router.get("/get", getData);

// ++++++++++++++++++++++++++ Update +++++++++++++++++++++++++++++++
// router.put(
//   "/:folder/:id/update",
//   upload.fields([
//     { name: "image_1", maxCount: 1 },
//     { name: "image_2", maxCount: 1 },
//   ]),
//   uploadErrorHandler,
//   updateData,
// );

export default router;
