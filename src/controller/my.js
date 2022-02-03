import * as myRepository from "../model/my.js";
import * as authRepository from "../model/auth.js";

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
