import express from "express";

import { getAllUnits, createUnit } from "../controllers/unitController";

const router = express.Router();

router.route("/").get(getAllUnits).post(createUnit);

export default router;
