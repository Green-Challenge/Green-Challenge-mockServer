import express from "express";
import * as myController from "../controller/my.js";

const router = express.Router();

router.post("/profile", myController.createProfile);

export { router as my };
