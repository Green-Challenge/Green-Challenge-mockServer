import * as myRepository from "../model/my.js";
import * as authRepository from "../model/auth.js";
import * as challengeRepository from "../model/challenge.js";
import { chart } from "../model/chart.js";

export async function getShortChallenge(req, res) {
  const { userId } = req.params;
  const shortRes = await authRepository.getChallengeShortById(userId);
  if (!shortRes) {
    return res.status(401).json({
      timestamp: Date.now(),
      error: new Error("userId가 없습니다."),
      message: "userId가 없습니다.",
    });
  }
  return res.status(200).json(shortRes);
}

export async function getAllChallenge(req, res) {
  const challenge = await challengeRepository.getAllChallenge();
  return res.status(200).json(challenge);
}

export async function getChallenge(req, res) {
  const { challengeId } = req.params;
  const challenge = await challengeRepository.findById(challengeId);
  if (!challenge) {
    return res.status(401).json({
      timestamp: Date.now(),
      error: new Error("challengeId가 없습니다."),
      message: "challengeId가 없습니다.",
    });
  }
  return res.status(200).json(challenge);
}

export async function addChallenging(req, res) {
  return res.send();
}

export async function challengingDetail(req, res) {
  const { userId, challengeId } = req.body;
  const challengingRes = await challengeRepository.getChallengingDetailById(
    challengeId
  );
  return res.status(200).json(challengingRes);
}

export async function getChallengingTree(req, res) {
  const { challengeId } = req.params;
  const treeRes = await challengeRepository.getChallengeTreeGrowthById(
    challengeId
  );
  return res.status(200).json(treeRes);
}

export async function createRecord(req, res) {
  return res.status(200).send();
}

export async function getTodayRecord(req, res) {
  return res.status(200).json({
    distance: "7",
    reducedCarbon: 23.0,
  });
}

export async function getChart(req, res) {
  return res.status(200).json(chart);
}
