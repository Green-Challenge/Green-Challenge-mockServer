import * as myRepository from "../model/my.js";
import * as authRepository from "../model/auth.js";
import * as challengeRepository from "../model/challenge.js";
import { chart } from "../model/chart.js";

export async function createProfile(req, res) {
  const profileReq = req.body;
  const user = await authRepository.findById(profileReq.userId);
  if (!user) {
    return res.status(401).json({
      timestamp: Date.now(),
      error: new Error("userId가 없습니다."),
      message: "userId가 없습니다.",
    });
  }
  const profile = await myRepository.createProfile(profileReq);
  return res.status(200).json({
    ...profile,
  });
}

export async function getMyChart(req, res) {
  const { userId } = req.params;
  return res.status(200).json(chart);
}

export async function getMyTrees(req, res) {
  const { userId } = req.params;
  const challenge = await challengeRepository.getChallengeByUserId(userId);
  if (userId === "0") {
    return res.status(200).send();
  }
  return res.status(200).json(challenge);
}

export async function getProfile(req, res) {
  const { userId } = req.params;
  const user = await authRepository.findById(userId);
  if (!user) {
    return res.status(401).json({
      timestamp: Date.now(),
      error: new Error("userId가 없습니다."),
      message: "userId가 없습니다.",
    });
  }
  return res.status(200).json({
    profileImg: user.profileImg,
    nickName: user.nickName,
    siNm: user.siNm,
    sggNm: user.sggNm,
    token: 400,
  });
}

export async function modifyProfile(req, res) {
  const modifyProfileReq = req.body;
  const modifyProfileRes = await authRepository.updateProfile(modifyProfileReq);
  if (modifyProfile === null) {
    return res.status(401).json({
      timestamp: Date.now(),
      error: new Error("userId가 없습니다."),
      message: "userId가 없습니다.",
    });
  }
  return res.status(200).json(modifyProfileRes);
}
