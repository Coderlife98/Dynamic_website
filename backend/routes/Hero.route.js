import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import { uploadErrorHandler } from "../middleware/uploadErrorHandler.js";
import { AddHero, deleteById, getHero, getHeroById, updateById } from "../Controller/Hero.controller.js";
const router = express.Router();

router.post(
  "/:folder/add",
  upload.single("image"),
  uploadErrorHandler,
  AddHero,
);

router.get("/get", getHero);
router.get("/getById/:id", getHeroById);
router.delete("/deleteById/:id", deleteById);
router.patch("/:folder/update_hero/:id",
  upload.single("image"),
  uploadErrorHandler,
  updateById);

export default router;
