import express from "express";
import * as authController from "../controller/auth.js";
import { isAuth } from "../middleware/auth.js";

const router = express.Router();

router.post("/", authController.signup);
router.get("/me", isAuth, authController.me);
router.get("/:email", authController.checkEmailDuplicates);
router.post("/signin", authController.signin);
router.get("/all/user", authController.getAllUser);

export { router as auth };
