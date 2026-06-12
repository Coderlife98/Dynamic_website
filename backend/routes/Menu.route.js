// routes/menuRoutes.js

import express from "express";
import Menu from "../models/Menu.model.js";
import { createMenu, getMenu } from "../Controller/Menu.controller.js";

const router = express.Router();

router.get("/", getMenu);
router.post("/create", createMenu);

export default router;
