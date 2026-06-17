// routes/menuRoutes.js

import express from "express";
import Menu from "../models/Menu.model.js";
import {
  createMenu,
  deleteById,
  editMenuById,
  getMenu,
  getMenuById,
  getMenuId,
} from "../Controller/Menu.controller.js";

const router = express.Router();

router.get("/get", getMenu);
router.post("/create", createMenu);
router.post("/:path", getMenuId);
router.post("/editMenu/:id", editMenuById);
router.post("/deleteMenu/:id", deleteById);
router.post("/getMenyById/:id", getMenuById);
export default router;
