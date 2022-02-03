import express from "express";
import * as challengeController from "../controller/challenge.js";

const router = express.Router();

router.get("/short/:userId", challengeController.getShortChallenge);
router.get("/list/:userId", challengeController.getAllChallenge);
router.post("/chart", challengeController.getChart);
router.get("/:challengeId", challengeController.getChallenge);
router.post("/", challengeController.addChallenging);
router.post("/challenging/detail", challengeController.challengingDetail);
router.get("/tree/:challengeId", challengeController.getChallengingTree);
router.post("/challenging/don", challengeController.createRecord);
router.post("/challenging/record", challengeController.getTodayRecord);

export { router as challenge };
