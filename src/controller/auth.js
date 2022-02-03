import * as userRepository from "../model/auth.js";
import jwt from "jsonwebtoken";

export const JWT_SECRET = "adk";
const EXPIRES_IN_SEC = 86400;

// 회원가입
export async function signup(req, res) {
  const { name, email, password } = req.body;
  const found = await userRepository.findByEmail(email);
  if (found) {
    return res.status(409).json({
      timestamp: Date.now(),
      error: new Error("이메일 중복"),
      message: "이메일이 중복됩니다.",
    });
  }
  const userId = await userRepository.createUser(name, email, password);
  return res.status(201).json({ userId, name });
}

// 이메일 중복 체크
export async function checkEmailDuplicates(req, res) {
  const { email } = req.params;
  const user = await userRepository.findByEmail(email);
  if (user) {
    return res.status(409).json({
      timestamp: Date.now(),
      error: new Error("이메일 중복"),
      message: "이메일이 중복됩니다.",
    });
  }
  return res.status(200).json({ message: "중복되지 않습니다." });
}

// 로그인
export async function signin(req, res) {
  const { email, password } = req.body;
  const user = await userRepository.findByEmail(email);
  if (!user) {
    return res.status(401).json({
      timestamp: Date.now(),
      error: new Error("user 정보나 password가 잘못됬습니다."),
      message: "user 정보나 password가 잘못됬습니다.",
    });
  }
  if (!password === user.password) {
    return res.status(401).json({
      timestamp: Date.now(),
      error: new Error("user 정보나 password가 잘못됬습니다."),
      message: "user 정보나 password가 잘못됬습니다.",
    });
  }
  const token = createJwtToken(user.userId);
  setToken(res, token);
  return res.status(200).send();
}

// 인증
export async function me(req, res) {
  const user = await userRepository.findById(req.userId);
  if (!user) {
    return res.status(404).json({
      timestamp: Date.now(),
      error: new Error("User 가 없습니다."),
      message: "User 가 없습니다.",
    });
  }
  return res.status(200).send();
}

export async function getAllUser(req, res) {
  const user = userRepository.user;
  return res.status(200).json(user);
}

function createJwtToken(id) {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: EXPIRES_IN_SEC,
  });
}

function setToken(res, token) {
  const options = {
    maxAge: EXPIRES_IN_SEC * 1000,
    httpOnly: true,
    sameSite: "none",
    secure: true,
  };
  res.cookie("token", token, options);
}
