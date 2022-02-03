import express from "express";
import * as myController from "../controller/my.js";

const router = express.Router();

router.post("/profile", myController.createProfile);
router.get("/chart/:userId", myController.getMyChart);
// userId 0 이면 아무것도 참여 중인 챌린지가 없음.
router.get("/trees/:userId", myController.getMyTrees);
router.get("/profile/:userId", myController.getProfile);
router.put("/profile", myController.modifyProfile);

export { router as my };
