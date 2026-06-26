import express from "express";
import {
  addAbout,
  getData,
  getDataById,
} from "../Controller/About.controller.js";
import { uploadErrorHandler } from "../middleware/uploadErrorHandler.js";
import upload from "../middleware/uploadMiddleware.js";
const router = express.Router();

router.post(
  "/:folder/add/:id",
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
// router.patch(
//   "/:folder/update/:id",
//   upload.fields([
//     { name: "image_1", maxCount: 1 },
//     { name: "image_2", maxCount: 1 },
//   ]),
//   uploadErrorHandler,
//   addAbout,
// );

router.get("/getById/:id", getDataById)

export default router;
