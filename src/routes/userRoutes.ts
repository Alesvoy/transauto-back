import express from "express";
import { createUser, loginUser } from "../controllers/userController";

const router = express.Router();

router.route("/login").get(loginUser);

router.route("/register").post(createUser);

export default router;
